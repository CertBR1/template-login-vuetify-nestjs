// src/services/api.js
import axios from "axios";
import { useAppStore } from "@/stores/app";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Altere para sua API real
});

api.interceptors.request.use(
    (config) => {
        const appStore = useAppStore();
        appStore.appCarregando(); // Ativa o loading ao iniciar uma requisição
        return config;
    },
    (error) => {
        const appStore = useAppStore();
        appStore.appNaoCarregando(); // Desativa o loading em caso de erro
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        const appStore = useAppStore();
        appStore.appNaoCarregando(); // Desativa o loading ao receber resposta
        return response;
    },
    (error) => {
        const appStore = useAppStore();
        appStore.appNaoCarregando(); // Desativa o loading mesmo em erro
        return Promise.reject(error);
    }
);

export default api;
