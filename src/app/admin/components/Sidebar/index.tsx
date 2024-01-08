"use client";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@components/components/ui/navigation-menu";
import React from "react";

export default function Sidebar() {
    return (
        <section className="w-[200px] -mx-5 h-[780px] bg-white">
            <NavigationMenu orientation="vertical">
                <NavigationMenuList className='flex-col gap-4'>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='max-w-full text-[#5D576B] hover:text-[#403855] dark:text-gray-100 dark:hover:text-gray-300'>
                Inicio
                        </NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='text-[#5D576B] hover:text-[#403855] dark:text-gray-100 dark:hover:text-gray-300' dir="ltr">
              Categorias
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="w-[180px] p-2 flex flex-row" dir="ltr">
                            <ul className="flex flex-row">
                                <li className="p-4">
                                    <NavigationMenuLink href="/admin/categorias">Lista categoria</NavigationMenuLink>
                                </li>
                                <li className="p-4">
                                    <NavigationMenuLink href="/categorias">Editar categoria</NavigationMenuLink>
                                </li>
                                <li className="p-4">
                                    <NavigationMenuLink href="/categorias">Excluir categoria</NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='text-[#5D576B] hover:text-[#403855] dark:text-gray-100 dark:hover:text-gray-300'>
              Produtos
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="w-[180px] p-2">
                            <ul>
                                <li className="p-4">
                                    <NavigationMenuLink href="/admin/produtos">Lista produtos</NavigationMenuLink>
                                </li>
                                <li className="p-4">
                                    <NavigationMenuLink href="/categorias">Editar produtos</NavigationMenuLink>
                                </li>
                                <li className="p-4">
                                    <NavigationMenuLink href="/admin/produtos/new">Criar produto</NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </section>
    );
}
