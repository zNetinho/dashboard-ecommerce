import React from "react";
import Modal, { ProductsProps } from "./Modal";

// vai receber o array da chamada na API, fazendo um for com Modal.

interface Product {
    products: [{
        sku: number;
        img: string[];
        nome: string;
        slug: string;
        descricao: string;
        categoria: string;
        preco: number;
    }]
  }


// vai receber JSON de produtos da API
export default function GridProducts({products}: Product) {
    return (
        <div className="flex flex-wrap gap-5">
            {products.map((product: { sku: number; img: string[]; nome: string; slug: string, descricao: string; categoria: string; preco: number; }, index: React.Key | null | undefined) => (
                <Modal 
                    product={product}
                    key={index}
                />
            ))}
        </div>
    );
}
