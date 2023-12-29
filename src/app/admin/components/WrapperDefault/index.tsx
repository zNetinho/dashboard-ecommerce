import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";

export default function LayoutAdmin({ children }: {children: ReactNode}) {
    return (
        <main className="flex w-full">
            <div className="w-1/6">
                <Sidebar />
            </div>
            <div className="w-3/4">
                { children }
            </div>
        </main>
    );
}
