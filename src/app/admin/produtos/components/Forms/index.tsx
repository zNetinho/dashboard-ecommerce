import { Button } from "@components/components/ui/button";
import { Input } from "@components/components/ui/input";
import { Label } from "@components/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ProductSchemaForms } from "./forms";

// o z.infer, define qual a interface com base no Schema que passamos 'createCategorieFormSchema'
export type updateProductFormData = z.infer<typeof ProductSchemaForms>

export default function FormsCreateProduto({token}: any) {
    console.log("teste de renderização", token);
    
    async function createProduto(data: updateProductFormData) {
        console.log("Entrou no callback do HOF");
        try {
            const response = await fetch("http://localhost:3001/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    nome: data.nome_produto,
                    preco: data.preco_produto,
                    // img: data.img,
                    descricao: data.descricao,
                    descricao_seo: data.descricao_seo,
                    categoria: data.categoria,
                    title_seo: data.title_seo,
                    estoque: data.estoque
                })
            });
            if(response.ok) {
                const data = await response.json();
                if(data) {
                    alert("Produto cadastrado com sucesso.");
                }

                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }


    // devolve 2 info importante, 1° register, para registrar os campos do formularios.
    // 2° handleSubmit, e um *High-order function*, ele vai devolver uma função para ser executada
    // 3° formState, traz todos os erros da validação do formulário.
    // 4° control, funciona como controle para fieldArrays

    const { 
        register,
        handleSubmit,
        formState: {errors},
        control
    } = useForm<updateProductFormData>({
        // o zodResolver liga o formulario a validação criada no schema
        resolver: zodResolver(ProductSchemaForms)
    });
    
    return (
        <div>
            {/* A função 'createCategoria' e passada como parametro para o HOF */}
            <form onSubmit={handleSubmit(createProduto)}>
                <div>
                    <Label htmlFor="nome_do_produto">
                        Nome
                    </Label>
                    <Input 
                        type="text"
                        id="nome_do_produto"
                        // chamando a função register e passando o nome do campo
                        { ...register("nome_produto")}
                    />
                    { errors.nome_produto && <span className="text-red-400"> { errors.nome_produto?.message } </span> }
                </div>
                <div>
                    <Label htmlFor="preco_do_produto">
                        Preço do produto
                    </Label>
                    <Input 
                        type="text"
                        id="preco_do_produto"
                        // chamando a função register e passando o nome do campo
                        { ...register("preco_produto")}
                    />
                    { errors.preco_produto && <span className="text-red-400"> { errors.preco_produto?.message } </span> }
                </div>
                <div>
                    <Label htmlFor="descricao">
                        Descricao
                    </Label>
                    <Input 
                        type="text"
                        id="descricao"
                        { ...register("descricao")}
                    />
                    { errors.descricao && <span className="text-red-400"> { errors.descricao?.message } </span> }
                </div>
                <div>
                    <Label htmlFor="descricao_seo">
                        Meta description
                    </Label>
                    <Input 
                        type="text"
                        id="descricao_seo"
                        { ...register("descricao_seo")}
                    />
                    { errors.descricao_seo && <span className="text-red-400"> { errors.descricao_seo?.message } </span> }
                </div>
                <div>
                    <Label htmlFor="categoria_do_produto">
                        Categoria do produto
                    </Label>
                    <Input 
                        type="text"
                        id="categoria_do_produto"
                        { ...register("categoria")}
                    />
                    { errors.categoria && <span className="text-red-400"> { errors.categoria?.message } </span> }
                </div>
                <div>
                    <Label htmlFor="title_seo">
                        Titulo (title)
                    </Label>
                    <Input 
                        type="text"
                        id="title_seo"
                        { ...register("title_seo")}
                    />
                    { errors.title_seo && <span className="text-red-400"> { errors.title_seo?.message } </span> }
                </div>
                <div>
                    <Label htmlFor="estoque">
                       Estoque
                    </Label>
                    <Input 
                        type="text"
                        id="estoque"
                        { ...register("estoque")}
                    />
                    { errors.estoque && <span className="text-red-400"> { errors.estoque?.message } </span> }
                </div>
                <div className="flex gap-4 mt-5">
                    <Button
                        variant="outline"
                        type="submit"
                    >
                        Criar
                    </Button>
                    <Button
                        variant="destructive"
                        type="reset"
                    >
                        Cancelar
                    </Button>
                </div>
            </form>
        </div>
    );
}
