import { z } from "zod";

export const CategorieSchemaForms = z.object({
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