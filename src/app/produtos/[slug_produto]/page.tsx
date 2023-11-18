import Modal from "@components/components/pages/Categorie/Grid/Modal";
import { fetchProduct } from "@components/services/products/functions";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
    params: { slug_produto: string }
}

export async function generateMetadata(
    { params, }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug_produto;
    const produto = await fetchProduct(slug);
    console.log(produto);
    return {
        title: produto.title_seo,
        description: produto.description_seo,
    };
}

export default async function Produto({params}: any ) {
    const slug = params.slug_produto;
    const produto = await fetchProduct(slug);
    console.log(produto);
    return (
        <div>
            {/* <Modal 
                // product={produto}
                key={produto.sku}
            /> */}
        </div>
    );
}
