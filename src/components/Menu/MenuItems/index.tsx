import LinkComponent from "@components/components/LinkComponent";
import { fetchCategories } from "@components/services/category/functions";
import { useEffect, useState } from "react";

type itensMenu = {
    name: string,
    slug: string
}

const items = [
    {name: "Categoria 01", slug: "nome-2"},
    {name: "Categoria 02", slug: "Exemplo-de-nome"},
    {name: "Categoria 03", slug: "exemplo-de-nome"},
];


export default async function MenuItems() {
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const categories = await fetchCategories();
    //             // Extrair apenas o nome e o slug das categorias
    //             const items = categories.map((category: itensMenu) => ({
    //                 name: category.name,
    //                 slug: category.slug
    //             }));
    //             console.log(items);
    //         } catch (error) {
    //             console.error("Erro ao buscar as categorias:", error);
    //         }
    //     };

    //     // Verificar se já existem categorias para evitar a requisição repetida
    //     if (items.length === 0) {
    //         fetchData();
    //     }
    // }, []);
    console.log(items);
    
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <LinkComponent
                        href={`/${item.slug}`}
                        anchor={item.name}
                        title={item.name}
                    />
                </li>
            ))}

        </ul>
    );
}
