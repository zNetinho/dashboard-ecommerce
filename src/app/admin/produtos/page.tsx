"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/components/ui/tabs";
import { useEffect, useState } from "react";
import TableListProduct from "./components/Table/TableListProduct";
import FormsCreateProduto from "./components/Forms/FormsCreate";
import { useSession } from "next-auth/react";


const URL_API = "http://localhost:3001/api/products";

export default function ProductPage() {
    const { data: session } = useSession();
    const token = session?.user?.token?.token;
    const [produtos, setProdutos ] = useState<any>([]);"";
    
    async function chamaProdutos() {
        try {
            const res = await fetch(`${URL_API}`);
            const resultado = await res.json();
            // console.log(resultadoPaginado, quantity);
            console.log(resultado);
            setProdutos(resultado);
            // setQuantity(quantity);
        } catch (error) {
            console.log("Erro na chamada das categorias");
        }
    }

    useEffect(() => {
        chamaProdutos();
    }, []);

    return (
        <div>
            <main>
                <section className="flex flex-col">
                    {/* Guias de abas para opções */}
                    <div className="my-4 w-full">
                        <Tabs defaultValue="lista_categorias">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="lista_categorias">
                Lista de Produtos
                                </TabsTrigger>
                                <TabsTrigger value="criar_categoria">Criar produto</TabsTrigger>
                            </TabsList>
                            {/* Ao clicar em uma aba renderizar o conteudo dela */}
                            <TabsContent value="lista_categorias">
                                <div>
                                    <h2 className="text-3xl font-medium text-center my-4">
                  Listar de produtos
                                    </h2>
                                    <TableListProduct
                                        produtos={produtos}
                                        token={token}
                                    />
                                </div>
                            </TabsContent>
                            <TabsContent value="criar_categoria">
                                <div>
                                    <h2 className="text-3xl font-medium text-center my-4">
                  Criar produto
                                    </h2>
                                    <FormsCreateProduto />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
            </main>
        </div>
    );
}
