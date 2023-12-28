"use client";
import LinkComponent from "../LinkComponent";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

export default function Menu( ) {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList className='flex gap-4'>
                    <NavigationMenuItem>
                        <LinkComponent
                            href='/'
                            title='Clique para a Home'
                        >
                            Inicio
                        </LinkComponent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            Categorias
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[350px] py-8 gap-4 flex justify-center items-center">
                                <LinkComponent
                                    href='/categoria/nome-2'
                                    title='Clique para a Categoria 01'
                                >
                                    Categoria 01
                                </LinkComponent>
                                <LinkComponent
                                    href='/categoria/nome-3'
                                    title='Clique para a Categoria 02'
                                >
                                    Categoria 02
                                </LinkComponent>
                                <LinkComponent
                                    href='/categoria/nome-4'
                                    title='Clique para a Categoria 03'
                                > 
                                    Categoria 03
                                </LinkComponent>
                            </div>

                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
