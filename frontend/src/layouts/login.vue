<template>
    <v-container class="fill-height d-flex align-center justify-center">
        <v-card class="pa-4" width="100%" max-width="360">
            <v-card-title class="text-center text-h5 font-weight-bold">Login</v-card-title>
            <v-card-text>
                <router-view></router-view>
            </v-card-text>
            <v-card-actions class="d-flex flex-column">
                <v-btn variant="text" color="primary" class="text-caption">Esqueceu a senha?</v-btn>
                <v-btn variant="text" color="secondary" class="text-caption">Criar conta</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'LoginLayout'
}
</script>