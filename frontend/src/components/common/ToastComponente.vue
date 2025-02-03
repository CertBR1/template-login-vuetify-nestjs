<template>
    <v-snackbar v-model="snackbar.mostrar" :timeout="snackbar.tempoExibicao" :color="snackbar.cor">
        {{ snackbar.mensagem }}
    </v-snackbar>
</template>

<script>
import { eventBus } from '@/common/eventBus';


export default {
    data() {
        return {
            snackbar: {
                mostrar: false,
                mensagem: "",
                cor: "success",
                tempoExibicao: 3000,
            },
        };
    },
    created() {
        eventBus.on("mostrar-toast", ({ mensagem, cor = "success", tempoExibicao = 3000 }) => {
            this.snackbar.mensagem = mensagem;
            this.snackbar.cor = cor;
            this.snackbar.mostrar = true;
            this.snackbar.tempoExibicao = tempoExibicao;
        });
    },
};
</script>