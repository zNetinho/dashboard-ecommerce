const URL_API = "http://localhost:3001/api/products";

export async function listProducts() {
    const res = await fetch(`${URL_API}`);
    const produtos = await res.json();
    return produtos;
}

export async function fetchProduct(params: any) {
    const slug_produto = params;
    console.log(slug_produto);
    const res = await fetch(`${URL_API}/${slug_produto}`);
    const produto = await res.json();
    return produto;
}