import { BanknoteIcon } from "lucide-react";
import React from "react";

export default function ProductPrice({preco}: any) {
    return (
        <>
            <span className="flex gap-2 line-through"><strong>DE:</strong> <BanknoteIcon />R$ {Number(preco * 1.2).toFixed(2)} </span>
            <span className="flex gap-2"><strong>POR:</strong> <BanknoteIcon />R$ {Number(preco)}</span>
        </>
    );
}
