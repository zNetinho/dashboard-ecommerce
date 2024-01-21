"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FormUpdateCategoria from "../../../components/Forms/Forms-categoria/FormUpdate";

export default function EditCategoria() {
    const { slug } = useParams();
    const [ categoria, setCategoria ] = useState([]);

    async function buscaCategoria() {
        try {
            const res = await fetch(`http://localhost:3001/api/categorie/${slug}`);
            const dado = await res.json();
            console.log(categoria);
            setCategoria(dado);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        buscaCategoria();
    },[slug]);

    return (
        <div>
            <FormUpdateCategoria
                categoria={categoria}
            />
        </div>
    );
}
