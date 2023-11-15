
const URL_API = "http://localhost:3001/api/categorie";

export async function fetchCategorie(slug: string) {
    const res = await fetch(`${URL_API}/${slug}`);
    const categoria = await res.json();
    return categoria;
}