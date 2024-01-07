"use client";
import React, { useEffect, useState } from "react";
import TableRow from "../components/Table/TableRow";
import TableHeader from "../components/Table/TableHeader";
import { useSession } from "next-auth/react";
import TableNavigation from "../components/Table/TableNavigation";
import TableRowProduct from "./components/Table/TableRowProduct";


const URL_API = "http://localhost:3001/api/products";

export default function ProductPage() {
    const token = "123144123";
    const [produtos, setProdutos ] = useState<any>([]);
    
    async function chamaProdutos() {
        try {
            const res = await fetch(`${URL_API}`);
            const resultado = await res.json();
            // console.log(resultadoPaginado, quantity);
            console.log(resultado);
            setProdutos(resultado);
            // setQuantity(quantity);
        } catch (error) {
            console.log("Erro na chamada das categorias");
        }
    }

    useEffect(() => {
        chamaProdutos();
    }, []);

    return (
        <div>
            <table border={1}>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    { produtos.map((produtos, index) => (
                        <TableRowProduct 
                            key={index}
                            produtos={produtos}
                            index={index}
                            token={token}
                            // findCategoriaToUpdate={findCategoriaToUpdate}
                        />
                    ))}
                </tbody>
                <tfoot>
                    <tr className='h-20'>
                        <td>
                            {/* <span>Total de registros {}</span> */}
                        </td>
                    </tr>
                    <TableNavigation />
                </tfoot>
            </table>
        </div>
    );
}
