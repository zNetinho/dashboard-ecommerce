import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      email: string | null | undefined;
      name: string | null | undefined;
      avatar?: string | null | undefined;
      image?: string | null | undefined;
      token: string | null | undefined;
    };
  }
}

declare module "next-auth" {
  interface User extends JWT {
    id: string | null | undefined;
    email: string | null | undefined;
    name: string | null | undefined;
    avatar: string | null | undefined;
    token: string | null | undefined;
  }
}