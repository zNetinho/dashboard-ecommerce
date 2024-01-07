import LinkComponent from "@components/components/LinkComponent";
import { DeleteIcon, EditIcon } from "lucide-react";
import React from "react";

interface TableRowProducts {
    token: string,
    produtos: {
        sku: number
        nome: string,
        descricao: string
    },
    index: number
}

export default function TableRowProduct({
    token,
    produtos,
    index
}: TableRowProducts) {
    const sku = produtos.sku;
    console.log(produtos);
 
    async function deleteProduto(sku: number) {
        try {
            const response = await fetch(`http://localhost:3001/api/produtos/${sku}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });
            if(response.ok) {
                const data = await response.json();
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <tr key={index}>
            <td className="w-auto h-10 px-2 border-2">
                {produtos.sku}
            </td>
            <td className="w-auto h-10 px-2 border-2">
                {produtos.nome}
            </td>
            <td className="w-auto h-10 px-2 border-2">
                {produtos.descricao}
            </td>
            <td className="w-auto h-10 px-2 border-2">
                <LinkComponent href={`/admin/produtos/edit/${sku}`}>
                    <EditIcon fill="yellow" color="black" className="cursor-pointer"/>
                </LinkComponent>
            </td>
            <td className="w-auto h-10 px-2 border-2">
                <DeleteIcon fill="red" color="white" onClick={() => deleteProduto(sku)} className="cursor-pointer"/>
            </td>
        </tr>
    );
}
