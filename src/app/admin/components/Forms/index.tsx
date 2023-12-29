"use client";
import { Button } from "@components/components/ui/button";
import { Input } from "@components/components/ui/input";
import { Label } from "@components/components/ui/label";
import { supabase } from "@components/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

// Cria um schema para o objeto, representando a estrutura do objeto que vai receber
const createCategorieFormSchema = z.object({
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
});


// o z.infer, define qual a interface com base no Schema que passamos 'createCategorieFormSchema'
type createCategorieFormData = z.infer<typeof createCategorieFormSchema>

export default function FormCategorias() {

    // devolve 2 info importante, 1° register, para registrar os campos do formularios.
    // 2° handleSubmit, e um *High-order function*, ele vai devolver uma função para ser executada
    // 3° formState, traz todos os erros da validação do formulário.
    // 4° control, funciona como controle para fieldArrays
    const { 
        register,
        handleSubmit,
        formState: {errors},
        control
    } = useForm<createCategorieFormData>({
        // o zodResolver liga o formulario a validação criada no schema
        resolver: zodResolver(createCategorieFormSchema)
    });

    async function createCategoria(data: createCategorieFormData) {
        const token = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..D30RVG1blozMwIKz.77vh0pOBz3mjkVkF5x8QLLZQ_2E-d7dC1O1X7KNPhwIK-PCSj0jimxRjJIfrN1BsNmZ3-IMYf4swcef67ybDcfSj3u5nqXTNRFIrKhbwX9eL-aCfwWdgrm_hWtC6shO98PwgSdXIBGMCA56GkbF65WsZL2tZEw0vjGM10LtgZlU_cPL7Y6B0t0kzS41TGr2Ismj8qYSaJy1gQadeHt5Ei27TAm-GeRmMAWDa5CS87MYjpQBEuPrKfd6Mp1UMJqF99XjtWkMjOnKqo46xex-PttIgb3YGNx7yag7jvFf5GZpwgHGkNXXLRnSsN_BaaMxGeKLMCAaeBZv0u9C1wcT_orkrQMaAPZACgTCnToc1N398j8M5zAoDbaKqG9larOII8kJJRBuFJEmldR8OzT8QlFrAk0PQuTI0-NrpjFpH2Tm_NTDh.Kzcvr-K9mrrtnFInC-uZ1A";
        try {
            const response = await fetch("URL_DO_BANCO", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error);
        }

        

    }
    console.log(errors);

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
