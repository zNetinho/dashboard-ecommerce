"use client";

import { useSession } from "next-auth/react";
import React from "react";
import LayoutAdmin from "./components/WrapperDefault";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    const { data: session } = useSession();

    if( session ) {
        return (
            <LayoutAdmin>
                {children}
            </LayoutAdmin>
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
