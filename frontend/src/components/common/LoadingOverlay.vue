<template>
    <v-overlay v-model="carregando" persistent class="d-flex align-center justify-center">
        <v-progress-circular indeterminate size="64" color="primary"></v-progress-circular>
    </v-overlay>
</template>

<script>
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';



export default {
    setup() {
        const appStore = useAppStore();
        const { carregando } = storeToRefs(appStore);
        console.log(carregando.value);
        return {
            carregando
        }
    },
};
</script>