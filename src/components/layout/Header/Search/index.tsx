import { Input } from "@components/components/ui/input";
import React from "react";

export default function Search() {

    return (
        <div>
            <Input
                type="search"
                placeholder="Search..."
                className="md:w-[100px] lg:w-[300px] bg-slate-500"
                onChange={(e) => filtrarProdutos(e.target.value)}
            />
        </div>
    );
}
