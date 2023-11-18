"use client";

import { useSession } from "next-auth/react";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    const { data: session } = useSession();

    if( session ) {
        return (
            <div>
                {children}
            </div>
        );
    } else {
        return (
            <div>
                <h1> Rota de acesso bloqueada </h1>
                <span> para acessar essa rota faça login</span>
            </div>
        );
    }
}
