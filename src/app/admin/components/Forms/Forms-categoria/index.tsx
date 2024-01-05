import { Button } from "@components/components/ui/button";
import { Input } from "@components/components/ui/input";
import { Label } from "@components/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CategorieSchemaForms } from "../forms";

// o z.infer, define qual a interface com base no Schema que passamos 'createCategorieFormSchema'
export type updateCategorieFormData = z.infer<typeof CategorieSchemaForms>

export default function FormsCreateCategoria({token}: any) {
    console.log(token);
    async function createCategoria(data: updateCategorieFormData) {
        try {
            const response = await fetch("http://localhost:3001/api/categorie", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    nome: data.nome,
                    descricao: data.descricao,
                    descricao_seo: data.descricao_seo,
                    title_seo: data.title_seo
                })
            });
            if(response.ok) {
                const data = await response.json();
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
    } = useForm<updateCategorieFormData>({
        // o zodResolver liga o formulario a validação criada no schema
        resolver: zodResolver(CategorieSchemaForms)
    });

    return (
        <div>
            {/* A função 'createCategoria' e passada como parametro para o HOF */}
            <form onSubmit={handleSubmit(createCategoria)}>
                <div>
                    <Label htmlFor="nome_da_categoria">
                        Nome
                    </Label>
                    <Input 
                        type="text"
                        id="nome_da_categoria"
                        // chamando a função register e passando o nome do campo
                        { ...register("nome")}
                    />
                    { errors.nome && <span className="text-red-400"> { errors.nome?.message } </span> }
                </div>
                <div>
                    <Label htmlFor="descricao">
                        descricao
                    </Label>
                    <Input 
                        type="text"
                        id="descricao"
                        { ...register("descricao")}
                    />
                    { errors.descricao && <span className="text-red-400"> { errors.descricao.message } </span> }
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
                    { errors.descricao_seo && <span className="text-red-400"> { errors.descricao_seo.message } </span> }
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
                    { errors.title_seo && <span className="text-red-400"> { errors.title_seo.message } </span> }
                </div>
                <div>
                    <Label htmlFor="texto_acima">
                        Texto acima
                    </Label>
                    <Input 
                        type="text"
                        id="texto_acima"
                        // chamando a função register e passando o nome do campo
                        { ...register("texto_acima")}
                    />
                    { errors.texto_acima && <span className="text-red-400"> { errors.texto_acima?.message } </span> }
                </div>
                <div>
                    <Label htmlFor="texto_abaixo">
                        Texto abaixo
                    </Label>
                    <Input 
                        type="text"
                        id="texto_abaixo"
                        // chamando a função register e passando o nome do campo
                        { ...register("texto_abaixo")}
                    />
                    { errors.texto_abaixo && <span className="text-red-400"> { errors.texto_abaixo?.message } </span> }
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
                    >
                        Cancelar
                    </Button>
                </div>
            </form>
        </div>
    );
}
