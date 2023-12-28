import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
                const user = await res.json();
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
            const userCustom = user as unknown as any;
            if(user) {
                token.id = user.id;
                return {
                    ...token,
                    token: userCustom.token,
                    email: userCustom.email, 
                    name: userCustom.name,
                    avatar: userCustom.avatar,
                };
            } 
            return token;
        },
        session: async ({ session, token }) => {
            return {
                ...session,
                user: {
                    email: token.email,
                    name: token.name,
                    avatar: token.picture,
                    token: token.token
                },
            };
        },
        redirect: async({ baseUrl }) => {
            return baseUrl;
        },
    },
    pages: {
        signIn: "/auth/signin",
        // signOut: "/auth/signout",
        // error: "/auth/error", // Error code passed in query string as ?error=
        // verifyRequest: "/auth/verify-request", // (used for check email message)
        // newUser: "/auth/signin" // New users will be directed here on first sign in (leave the property out if not of interest)
    }
};