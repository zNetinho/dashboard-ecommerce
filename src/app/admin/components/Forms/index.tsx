"use client";
import { useSession } from "next-auth/react";
import FormsCreateCategoria from "./Forms-categoria";

export default function FormCategorias() {
    const { data: session, status } = useSession();
    if (status === "authenticated" && session?.user) {
        console.log("forms criar categorias", session)
        // Agora você pode usar session.accessToken em suas requisições
        const token = session
    }
    const token = session?.user?.token?.token
    console.log(token)

    return (
        <div>
            <FormsCreateCategoria
                token={token}
            />
        </div>
    );
}
