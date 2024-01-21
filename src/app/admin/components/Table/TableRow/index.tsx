import LinkComponent from "@components/components/LinkComponent";
import { DeleteIcon, EditIcon } from "lucide-react";

import React from "react";
// import { deleteCategoria } from "../../Forms/forms";

interface TableRowProps {
  item: {
    id: number;
    nome: string;
    descricao: string;
    slug: string;
    produtos: string[];
  };
  index: number;
  token: string;
}

export default function TableRow({
    item,
    index,
    token
}: TableRowProps) {
    console.log(token);
    const id = item.id;

    async function deleteCategoria(id: number) {
        try {
            const response = await fetch(`http://localhost:3001/api/categorie/${id}`, {
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
                {item.id}
            </td>
            <td className="w-auto h-10 px-2 border-2">
                {item.nome}
            </td>
            <td className="w-auto h-10 px-2 border-2">
                {item.descricao}
            </td>
            <td className="w-auto h-10 px-2 border-2">
                {item.produtos.length}
            </td>
            <td className="w-auto h-10 px-2 border-2">
                <LinkComponent href={`/admin/categorias/edit/${item.slug}`}>
                    <EditIcon fill="yellow" color="black" className="cursor-pointer"/>
                </LinkComponent>
            </td>
            <td className="w-auto h-10 px-2 border-2">
                <DeleteIcon fill="red" color="white" onClick={() => deleteCategoria(id)} className="cursor-pointer"/>
            </td>
        </tr>
    );
}
