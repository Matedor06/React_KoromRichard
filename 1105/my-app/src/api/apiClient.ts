
import axios from "axios";
export const BACKEND_URL = "http://localhost:8001/api";

const apiClient = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;

export const getPizzas = async () => {
    const response = await apiClient.get("/pizzas");
    return response.data;
};
export const getPizzaById = async (id: number) => {
    const response = await apiClient.get(`/pizzas/${id}`);
    return response.data;
}
export const createPizza = async (pizza: any) => {
    const response = await apiClient.post("/pizzas", pizza);
    return response.data;
}
export const updatePizza = async (id: number, pizza: any) => {
    const response = await apiClient.put(`/pizzas/${id}`, pizza);
    return response.data;
}
