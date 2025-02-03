import api from "@/common/api";
import { useToast } from "@/common/toast";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        usuario: null,
        acess_token: null,
        autenticado: false
    }),
    actions: {
        async login(credencial: { usuario: string, senha: string }) {
            try {
                console.log(credencial);
                const resposta = await api.post("/auth/login", credencial);
                if (resposta.status === 200) {
                    this.acess_token = resposta.data.access_token;
                    this.usuario = resposta.data.usuario;
                    this.autenticado = true;
                    return;
                }
                throw new Error(resposta.data.message);
            } catch (error) {
                console.error(error);
                if (error.status === 401) useToast().mostrarToast("Usuário ou senha inválidos", "error");
                throw error;
            }
        },
        logout() {
            this.usuario = null;
            this.acess_token = null;
            this.autenticado = false;
        },
    },
    persist: true
});