import React, { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import LayoutAdmin from "./components/WrapperDefault";

export default function HomeAdmin({children}: { children: ReactNode}) {
    return (
        <LayoutAdmin>
            { children }
        </LayoutAdmin>
    );
}
