import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
interface IUser {
    userLogged: {
        email: string,
        nome: string,
        avatar: string,
    }
    token: string
}

export const authOptions: NextAuthOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "your email"},
                password: { label: "Password", type: "password"},
            },
            async authorize(credentials, req) {
                const data = {
                    email: credentials?.email,
                    password: credentials?.password
                };
                const res = await fetch("http://localhost:3001/api/user/login", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" }
                });
                const user: IUser = await res.json();
                console.log(user)
                const userCustom = {
                    email: user.userLogged.email || "",
                    name: user.userLogged.nome || "",
                    image: user.userLogged.avatar || "",
                    token: user.token
                };
                return userCustom;
            }
        }),
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                const userCustom = user as {
                    id?: string;
                    email?: string;
                    name?: string;
                    avatar?: string;
                };
    
                console.log("Lib Auth.ts", token, user);
    
                // Adicione as propriedades desejadas ao token
                token.token = user.token;
                token.email = userCustom.email;
                token.name = userCustom.name;
                token.avatar = userCustom.avatar;
    
                return token;
            }
            return token;
        },
        // jwt: ({ token, user }) => {
        //     console.log(user)
        //     if (user) {
        //         const userCustom = user as {
        //             token?: string;
        //             email?: string;
        //             name?: string;
        //             avatar?: string;
        //         };
        //         console.log("Lib Auth.ts", token, user);
    
        //         // Adicione as propriedades desejadas ao token
        //         token.token = userCustom.token;
        //         token.email = userCustom.email;
        //         token.name = userCustom.name;
        //         token.avatar = userCustom.avatar;
    
        //     }
        //     return token;
        // },
        session: async ({ session, token }) => {
            console.log("callback session", session, token)
            return {
                ...session,
                user: {
                    email: token.email,
                    name: token.name,
                    avatar: token.picture,
                    token: token
                },
            };
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
          },
    },
    pages: {
        signIn: "/auth/signin",
    }
};