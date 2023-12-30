import { DeleteIcon, EditIcon } from "lucide-react";
import React from "react";

interface TableRowProps {
  item: {
    id: number,
    nome: string,
    descricao: string,
    produtos: string[];
  },
  index: number
}

export default function TableRow({item, index}: TableRowProps) {
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
      <td>
          <EditIcon />
      </td>
      <td>
          <DeleteIcon />
      </td>
    </tr>
  );
}
