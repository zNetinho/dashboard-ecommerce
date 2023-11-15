import React from "react";
import ItemModal from "./Item";

export interface ProductsProps {
    product: {
        sku: number,
        img: Array<string>,
        nome: string,
        descricao: string,
        categoria: string,
        price: number
    }
}

// vai ser usado na Grid, para incluir os produtos.
export default function Modal({product}: ProductsProps) {
    return (
        <ItemModal 
            key={product.sku}
            img={product.img[0]}
            name={product.nome}
            price={Number(product.price)}
        />
    );
}
