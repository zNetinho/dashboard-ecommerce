
const URL_API = "http://localhost:3001/api/categorie";

export async function fetchCategorie(slug: string) {
    const res = await fetch(`${URL_API}/${slug}`);
    console.log(res);
    if(res.ok) {
        const categoria = await res.json();
        return categoria;
    }
}

export async function fetchCategories() {
    const res = await fetch(`${URL_API}`);
    const categorias = await res.json();
    console.log(categorias);
    return categorias;
}