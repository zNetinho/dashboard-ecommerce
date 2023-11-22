"use serve";
import GridProducts from "@components/components/pages/Categorie/Grid";
import { fetchCategorie } from "@components/services/category/functions";
import { listProducts } from "@components/services/products/functions";
import type { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
    params: { slug_categoria: string }
}

export async function generateMetadata(
    { params, }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug_categoria;
    const { categoria } = await fetchCategorie(slug);
    return {
        title: categoria.title_seo,
        description: categoria.descricao_seo,
        category: categoria.nome,
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: `http://localhost:3000/${slug}`,
        },
    };
}

// fazer Logica para chamada na api passando o array de resultados para o GridProducts

export default async function Categoria({ params }: any) {
    const { slug_categoria } = params;
    console.log(slug_categoria);
    const { categoria } = await fetchCategorie(slug_categoria);
    console.log(categoria);
    const productsList = await listProducts();
    const products: any = [];
    if( productsList ) {
        for (let index = 0; index < productsList.length; index++) {
            const product = productsList[index];
            if(product.categoria === categoria.nome) {
                products.push(product);
            }
        }
    }else {
        return null;
    }
    console.log(products);
    
    return (
        <div>
            <h1 className="text-4xl font-bold mx-5">{ categoria?.nome }</h1>
            <GridProducts 
                products={products}
            />
        </div>
    );
}
