import NextAuth from "next-auth";
import { authOptions } from "../../../../lib/auth";

const handler = NextAuth(authOptions);

import CredentialProvider from "next-auth/providers/credentials";

export { handler as GET, handler as POST };
