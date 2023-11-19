import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { loginAccount } from "@components/services/account/functions-auth";
import { url } from "inspector";
import { setCookie } from "nookies";

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
                console.log(credentials);
                const data = {
                    email: credentials?.email,
                    password: credentials?.password
                };
                console.log(data);
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
                };
                return userCustom;
            }
        }),
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            const userCustom = user as unknown as any;
            if(user) {

                return {
                    ...token,
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
        newUser: "/auth/signin" // New users will be directed here on first sign in (leave the property out if not of interest)
    }
};