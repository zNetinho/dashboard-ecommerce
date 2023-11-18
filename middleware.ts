import { NextResponse } from "next/server";
import { withAuth, NextRequestWithAuth, NextAuthMiddlewareOptions } from "next-auth/middleware";

const middleware = (request: NextRequestWithAuth) => {
    console.log("[MIDDLEWARE_NEXTAUTH_TOKEN]: ", request.nextauth.token);

    const isPrivateRoutes = request.nextUrl.pathname.startsWith("/admin");
    // const isAdminUser = request.nextauth.token?.role === "admin";

    if (isPrivateRoutes) {
        return NextResponse.rewrite(new URL("/signin", request.url));
    }
};

const callbackOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware, callbackOptions);

export const config = {
    matcher: "/admin"
};