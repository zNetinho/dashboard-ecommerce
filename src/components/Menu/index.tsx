"use client";
import LinkComponent from "../LinkComponent";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import MenuItems from "./MenuItems";

export default function Menu( ) {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList className='flex gap-4'>
                    <NavigationMenuItem>
                        <LinkComponent
                            href='/'
                            anchor='Inicio'
                            title='Clique para a Home'
                        />  
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Categorias
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[350px] py-8 gap-4 flex justify-center items-center">
                                <LinkComponent
                                    href='/Exemplo-de-nome'
                                    anchor='Categoria 01'
                                    title='Clique para a Categoria 01'
                                />
                                <LinkComponent
                                    href='/exemplo-de-nome'
                                    anchor='Categoria 02'
                                    title='Clique para a Categoria 02'
                                />
                                <LinkComponent
                                    href='/nome-2'
                                    anchor='Categoria 03'
                                    title='Clique para a Categoria 03'
                                /> 
                            </div>

                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
