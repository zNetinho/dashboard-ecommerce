"use client";
import { Checkbox } from "@components/components/ui/checkbox";
import { Label } from "@components/components/ui/label";
import { ScrollArea } from "@components/components/ui/scroll-area";
import { Product } from "@components/types/Product/Product";
import { Separator } from "@radix-ui/react-dropdown-menu";
import React from "react";

const filtros = [    
    // substituir pelos reais filtros
    "Produto de Exemplo", "Filtro 2", "Filtro 3", "Filtro 4", "Filtro 5", "Filtro 6", "Filtro 7", "Filtro 8", "Filtro 9", "Filtro 10", "Filtro 11", "Filtro 12"
];

interface FilterProps {
    setFiltro: (valor: string) => void;
}

export default function Filters({setaFiltro, ativaFiltro}: any) {

    const handleFilterChange = (event: any) => {
        const selectedFilter = event.target.nextElementSibling;
        const filtro = selectedFilter.outerText;
        if(filtro !== "") {
            setaFiltro(filtro);
            ativaFiltro();
        }
    };

    return (
        // filtros
        <div className="w-[20%] ml-7">
            <ScrollArea className="h-72 w-48 rounded-md border">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Filtros</h4>
                    {filtros.map((tag) => (
                        <ul className="flex gap-4 my-2 items-center" key={tag}             
                        >
                            <li onClick={handleFilterChange}>
                                <Checkbox id={tag}
                                />
                                <Label htmlFor={tag} className="text-lg"   
                                >
                                    {tag}
                                </Label>
                                <Separator className="my-2" />
                            </li>
                        </ul>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
