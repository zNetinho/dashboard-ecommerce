import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/components/ui/tabs";
import FormCategorias from "../components/Forms";
import TableList from "../components/Table";

export default async function CategoriaAdmin() {
    
    return (
        <main>
            <section className="flex flex-col">
                {/* Guias de abas para opções */}
                <div className="my-4 w-full">
                    <Tabs defaultValue="lista_categorias">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="lista_categorias">Lista de categorias</TabsTrigger>
                            <TabsTrigger value="criar_categoria">Criar categoria</TabsTrigger>
                        </TabsList>
                    {/* Ao clicar em uma aba renderizar o conteudo dela */}
                    <TabsContent value="lista_categorias">
                        <div>
                            <h2 className="text-3xl font-medium text-center my-4">Listar categorias</h2>
                            {/* <FormCategorias /> */}
                            <TableList />
                        </div>
                    </TabsContent>
                    <TabsContent value="criar_categoria">
                        <div>
                            <h2 className="text-3xl font-medium text-center my-4">Criar categoria</h2>
                            <FormCategorias />
                        </div>
                    </TabsContent>
                    </Tabs>
                </div>
            </section>
        </main>
    );
}