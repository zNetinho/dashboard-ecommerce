import { z } from "zod";

const categoriasNome = ["Nome 4", "Nome 5", "Nome 6", "Nome 7", "Nome 8"] as const;

export const ProductSchemaForms = z.object({
    // Tipa o dado, e permite criar algumas validações.
    // avatar: z .custom<FileList>((v) => v instanceof FileList)
    // .transform(list => list.item(0)!) o zod so tem tipos primitivos, e para poder enviar arquivos usamos essa tipagem '!' define que e um campo que sempre vai existir
    // .refine(file => file?.size <= 5 * 1024 * 1024, "O arquivo precisa ter no máximo 5MB"), 
    nome: z.string()
        .nonempty("O nome da categoria e obrigatorio")
        .toLowerCase(),
    preco: z.coerce.number().gte(1),
    img: z.string().array(),
    descricao: z.string(),
    descricao_seo: z.string()
        .min(1, "Por favor insira algo")
        .max(148, "A descrição de SEO deve conter até 148 caracteres."),
    categoria: z.enum(categoriasNome),
    title_seo: z.string()
    // Permite criar regras de transformação para os campos
        .transform(words => {
            return words.trim().split(" ").map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1));
            }).join(" ");
        }),
    estoque: z.coerce.number().gte(0)
});