import { useContext } from "react";
import FormCategorias from "../components/Forms";
import { UserContext } from "@components/providers/UserContext";
import { GetServerSideProps } from "next";

export default async function CategoriaAdmin() {
    
    return (
        <main>
            <section className="flex flex-col"> 
                <FormCategorias />
            </section>
        </main>
    );
}