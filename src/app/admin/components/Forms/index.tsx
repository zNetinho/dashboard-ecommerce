"use client";
import { useSession } from "next-auth/react";
import FormsCreateCategoria from "./Forms-categoria";

export default function FormCategorias() {
    const { data: session, status } = useSession();
    const token = session?.user?.token?.token;
    console.log(token);

    return (
        <div>
            <FormsCreateCategoria
                token={token}
            />
        </div>
    );
}
