import React from "react";
import Modal, { ProductsProps } from "./Modal";

// vai receber o array da chamada na API, fazendo um for com Modal.

interface Product {
    sku: number;
    img: string[];
    nome: string;
    descricao: string;
    categoria: string;
    price: number;
  }

const products: Product[] = [
    {
        sku: 12345,
        img: ["/produto.png", "/produto.png"],
        nome: "Produto de Exemplo",
        descricao: "Esta é uma descrição do produto.",
        categoria: "Eletrônicos",
        price: 49.99
    },
    {
        sku: 54321,
        img: ["/produto.png"],
        nome: "Outro Produto",
        descricao: "Esta é outra descrição do produto.",
        categoria: "Moda",
        price: 29.99
    },
];

// vai receber JSON de produtos da API
export default function GridProducts({products}: any) {
    return (
        <div className="flex flex-wrap gap-5">
            {products.map((product: { sku: number; img: string[]; nome: string; descricao: string; categoria: string; price: number; }, index: React.Key | null | undefined) => (
                <Modal 
                    product={product}
                    key={index}
                />
            ))}
        </div>
    );
}
