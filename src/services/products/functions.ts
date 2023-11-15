const URL_API = "http://localhost:3001/api/products";

export async function listProducts() {
    const res = await fetch(`${URL_API}`);
    const produtos = await res.json();
    return produtos;
}