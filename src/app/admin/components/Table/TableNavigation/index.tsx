import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function TableNavigation({quantity, setPagina}: any) {
    const [pageAtual, setPageAtual ] = useState(1);
    const [ numberPages, setNumberPages ] = useState(0);
    const value = ( quantity / 10);

    useEffect(() => {
        setNumberPages(value);
    }, []);

    const handlePaginaChange = (novaPagina: any) => {
        setPageAtual(novaPagina);
        setPagina(novaPagina);
    };
  
    return (
        <tr>
            <td>
                {/* disabled={pageAtual === 1} */}
                <button onClick={() => handlePaginaChange(pageAtual - 1)} disabled={pageAtual === 1}>
                    <ArrowLeft />
                </button>
            </td>
            <td>
                <button onClick={() => handlePaginaChange(pageAtual + 1)} disabled={pageAtual === value} className="disabled:cursor-not-allowed">
                    <ArrowRight />
                </button>
            </td>
        </tr>
    );
}
