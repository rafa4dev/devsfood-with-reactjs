let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        const req = await fetch(`${BASE}/categories`);
        const json = await req.json();
        return json;
    }
};