"use client";
import { useEffect, useState } from "react";
import Filters from "../Filter";
import Modal from "./Modal";
interface Product {
  sku: number;
  img: string[];
  nome: string;
  slug: string;
  descricao: string;
  categoria: string;
  preco: number;
}

export default function GridProducts({ products }: any) {
    const [filtro, setFiltro] = useState("");
    const [produtosFiltrados, setProdutosFiltrados] = useState<Product[]>(
        products
    );

    function filtrarProdutos(filtro: string) {
        let produtinhos = [];

        if( filtro ) {
            for (let i = 0; i < products.length; i++) {
                if (products[i].nome.toLocaleLowerCase() === filtro.toLocaleLowerCase()) {
                    produtinhos.push(products[i]);
                }
                if (produtinhos.length > 0) {
                    setProdutosFiltrados(produtinhos);
                }
            }
        }
    }

    useEffect(
        () => {
            
        },
        [filtro, produtosFiltrados]
    );
        
    return (
        <div>
            {/* <Input
                type="search"
                placeholder="Search..."
                className="md:w-[100px] lg:w-[300px] bg-slate-500"
                onChange={(e) => filtrarProdutos(e.target.value)}
            /> */}
            <div className="flex">
                <div className="filterBar">
                    <Filters
                        setaFiltro={setFiltro}
                        ativaFiltro={filtrarProdutos}
                    />
                </div>
                <div className="max-w-[1300px] flex flex-wrap gap-5 px-8">
                    {produtosFiltrados
                        .filter(product => (filtro ? product.nome === filtro : true))
                        .map((product: any, index) =>
                            <Modal product={product} key={index} />
                        )}
                </div>
            </div>
        </div>
    );
}
