import PageDefault from "@components/components/Default";
import { ThemeProvider } from "@components/components/theme-provider";
import { AuthProvider } from "@components/providers/Auth";
import CartProvider from "@components/providers/Cart";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        template: "%s | Ecommerce",
        default: "Home | Ecommerce"
    },
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <AuthProvider>
                    <CartProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                        >
                            <PageDefault>
                                {children}
                            </PageDefault>
                        </ThemeProvider>
                    </CartProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
