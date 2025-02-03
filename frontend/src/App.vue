<template>
  <v-app>
    <v-main>
      <LoadingOverlay />
      <router-view />
      <ToastComponente></ToastComponente>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import LoadingOverlay from './components/common/LoadingOverlay.vue';

//
</script>
