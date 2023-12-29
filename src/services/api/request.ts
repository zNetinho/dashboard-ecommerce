const API_BASE_URL = "http://localhost:3010"; // Substitua pela URL base da sua API

const fetchWithToken = async (url: string, options: any = {}, token: string) => {
    const headers = {
        ...options.headers,
        Authorization: `Bearer ${token}` // Adicionar o token JWT no header Authorization
    };

    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers
    });

    return response;
};

export default fetchWithToken;