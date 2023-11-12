import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        })
    ],
    pages: {
        signIn: "/auth/signin",
        // signOut: "/auth/signout",
        // error: "/auth/error", // Error code passed in query string as ?error=
        // verifyRequest: "/auth/verify-request", // (used for check email message)
        // newUser: "/pages/auth/new-user" // New users will be directed here on first sign in (leave the property out if not of interest)
    }
};