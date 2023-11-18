import React from "react";
import ItemModal from "./Item";

export interface ProductsProps {
    product: {
        sku: number,
        img: Array<string>,
        nome: string,
        slug: string,
        descricao: string,
        categoria: string,
        preco: number
    }
}

export default function Modal({product}: ProductsProps) {
    return (
        <ItemModal 
            key={product.sku}
            img={product.img[0]}
            name={product.nome}
            slug={product.slug}
            preco={product.preco}
        />
    );
}
