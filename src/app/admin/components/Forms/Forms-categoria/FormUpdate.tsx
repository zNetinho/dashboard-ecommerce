"use client";
import { Button } from "@components/components/ui/button";
import { Input } from "@components/components/ui/input";
import { Label } from "@components/components/ui/label";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { fetchCategorie } from "@components/services/category/functions";

const updateCategorieFormSchema = z.object({
    // Tipa o dado, e permite criar algumas validações.
    // avatar: z .custom<FileList>((v) => v instanceof FileList)
    // .transform(list => list.item(0)!) o zod so tem tipos primitivos, e para poder enviar arquivos usamos essa tipagem '!' define que e um campo que sempre vai existir
    // .refine(file => file?.size <= 5 * 1024 * 1024, "O arquivo precisa ter no máximo 5MB"), 
    nome: z.string()
        .nonempty("O nome da categoria e obrigatorio")
        .toLowerCase(),
    descricao: z.string()
        .min(10, "A descrição deve conter no mínimo 10 caracteres"),
    descricao_seo: z.string()
        .min(1, "Por favor insira algo")
        .max(148, "A descrição de SEO deve conter até 148 caracteres."),
    title_seo: z.string()
        .min(1, "Por favor informe o Titulo SEO da categoria.")
    // Permite criar regras de transformação para os campos
        .transform(words => {
            return words.trim().split(" ").map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1));
            }).join(" ");
        }),
    texto_acima: z.string(),
    texto_abaixo: z.string(),
});

// o z.infer, define qual a interface com base no Schema que passamos 'createCategorieFormSchema'
export type updateCategorieFormData = z.infer<typeof updateCategorieFormSchema>

export default function FormUpdateCategoria({categoria} : any ) {
    console.log(categoria);  
    const { data: session, status } = useSession();
    // const token = session?.user?.token?.token;
    const user = session;

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
        resolver: zodResolver(updateCategorieFormSchema)
    });

    async function saveChange(data: updateCategorieFormData) {
        try {
            const response = await fetch("http://localhost:3001/api/categorie", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session?.user.token}`
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

    return (
        <div>
            {/* A função 'createCategoria' e passada como parametro para o HOF */}
            <form onSubmit={handleSubmit(saveChange)}>
                <div>
                    <Label htmlFor="nome_da_categoria">
                  Nome
                    </Label>
                    <Input 
                        type="text"
                        id="nome_da_categoria"
                        placeholder={categoria.nome}
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
                        placeholder={categoria?.descricao}
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
                        placeholder={categoria?.descricao_seo}
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
                        placeholder={categoria?.title_seo}
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
                        placeholder={categoria?.texto_acima}
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
                        placeholder={categoria?.texto_abaixo}
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
