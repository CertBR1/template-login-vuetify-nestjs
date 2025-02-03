<template>
    <v-form>
        <v-text-field label="Usuario" type="usuario" variant="outlined" density="compact"
            prepend-inner-icon="mdi-account" :rules="usuarioRules" />
        <v-text-field label="Senha" type="password" variant="outlined" density="compact" prepend-inner-icon="mdi-lock"
            :rules="senhaRules" />
        <v-btn block color="primary" class="mt-3" size="large" @click="login">Entrar</v-btn>
    </v-form>
</template>

<script>
import { useToast } from '@/common/toast';
import { useAuthStore } from '@/stores/auth';

export default {
    data() {
        return {
            usuario: null,
            senha: null,
            usuarioRules: [(v) => !!v || 'Usuário é obrigatório'],
            senhaRules: [(v) => !!v || 'Senha é obrigatória'],
        }
    },
    methods: {
        async login() {
            const authStore = useAuthStore();
            try {
                await authStore.login({ usuario: this.usuario, senha: this.senha });
            } catch (error) {
                // useToast().mostrarToast("Usuário ou senha inválidos", "error");

            }
        }
    }
}
</script>

<route lang="yaml">
meta:
    requiresAuth: false
    layout: login
</route>