"use client";
import React from "react";
import TableRowProduct from "./TableRowProduct";

export default function TableListProduct({
    produtos,
    token
}: any) {
    return (
        <table border={1}>
            <thead>
                {/* <TableHeader /> */}
            </thead>
            <tbody>
                {/* <h2>Lista de</h2> */}
                { produtos.map((produtos: any, index: any) => (
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
                {/* <TableNavigation /> */}
            </tfoot>
        </table>
    );
}
