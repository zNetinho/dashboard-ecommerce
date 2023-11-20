export interface Product {
    sku: number,
    nome: string,
    preco: number,
    img: string[],
    descricao: string,
    title_seo: string,
    description_seo: string,
    categoria: string
    slug: string,
    estoque: number,
    criadoPor: string,
    atualizadoPor: string
}