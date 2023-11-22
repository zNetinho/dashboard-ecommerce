"use client";
import PurchaseButton from "@components/components/PurchaseButton";
import ProductPrice from "../../ProductPrice";
import Thumbnails from "../../Thumbnail";
import DescriptionProduct from "../../description";
import { useContext, useState } from "react";
import { CartContext } from "@components/providers/Cart";
import { Button } from "@components/components/ui/button";
import ButtonAddToCart from "@components/components/Cart/ButtonAddToCart";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import HandleCart from "../HandleCart";
// vai receber nome, preço, descrição

const images = [
    "https://radio93fm.com.br/wp-content/uploads/2019/02/produto.png",
    "https://radio93fm.com.br/wp-content/uploads/2023/07/marketing-digital.webp",
    "https://radio93fm.com.br/wp-content/uploads/2023/06/importancia-das-arvores-equilibrio-ecologico-300x148.png",
    "https://radio93fm.com.br/wp-content/uploads/2023/06/creme-de-cebola.webp"
];



export default function ProductInfo({product}: any) {

    return (
        // Nome do produto, preço, descrição, imagem, e sku
        <div className="p-10 w-full">
            <div className="flex gap-2">
                <div className="flex flex-row gap-4">
                    {/* Imagens */}
                    <div className="flex flex-row">
                        <Thumbnails 
                            photos={product.img}
                        />
                    </div>
                </div>
                <div>
                    {/* Informações */}
                    <h1 className="text-3xl font-bold mx-2">{product.nome}</h1>
                    <span className="text-gray-500 ml-2 my-4">COD. {product.sku}</span>
                    <div className="py-4 px-2">
                        <ProductPrice 
                            preco={product.preco}
                        />
                    </div>
                    <DescriptionProduct
                        description={product.descricao}
                    />
                    <div>
                        <HandleCart 
                            product={product}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
