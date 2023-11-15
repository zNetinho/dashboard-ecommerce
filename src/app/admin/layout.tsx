"use client";

import { UserContext } from "@components/providers/UserContext";
import React, { useContext } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    const { isAuthenticated } = useContext(UserContext);

    if( isAuthenticated ) {
        return (
            <div>
                {children}
            </div>
        );
    } else {
        return (
            <div><h1>Por favor faça login</h1></div>
        );
    }
}
