"use client";
import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TableNavigation from "./TableNavigation";

const URL_API = "http://localhost:3001/api/categorie";

export default function TableList(token) {
    console.log(token);

    const [ pagina , setPagina ] = useState(1);
    const [ quantity, setQuantity ] = useState(0);
    const [ categorias, setCategorias ] = useState([]);


    async function chamaCategorias() {
        try {
            const res = await fetch(`${URL_API}${pagina > 0 ? `?pagina=${pagina}` : ""}`);
            const { resultadoPaginado, quantity }: any = await res.json();
            console.log(resultadoPaginado, quantity);
            setCategorias(resultadoPaginado);
            setQuantity(quantity);
        } catch (error) {
            console.log("Erro na chamada das categorias");
        }
    }
    
    useEffect(() => {
        chamaCategorias();
    }, [pagina]);

    return (
        <div>
            <table border={1}>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    { categorias.map((item, index) => (
                        <TableRow 
                            key={index}
                            item={item}
                            index={index}
                            token={token}
                            // findCategoriaToUpdate={findCategoriaToUpdate}
                        />
                    ))}
                </tbody>
                <tfoot>
                    <tr className='h-20'>
                        <td>
                            <span>Total de registros {quantity}</span>
                        </td>
                    </tr>
                    <TableNavigation 
                        quantity={quantity}
                        setPagina={setPagina}
                    />
                </tfoot>
            </table>
        </div>
    );
}
