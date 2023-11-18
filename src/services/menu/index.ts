import { fetchCategories } from "../category/functions";

export async function menu() {
    const categorias = await fetchCategories();
    const menuItens = [];
    for (let index = 0; index < categorias.length; index++) {
        const item = categorias[index];
        const categoriaParaOMenu = {
            nome: item.nome,
            slug: item.slug
        };
        console.log(item);
        menuItens.push(categoriaParaOMenu);
    }
    console.log(menuItens);
    return menuItens;
}