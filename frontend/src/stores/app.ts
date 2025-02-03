// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    carregando: false
  }),
  actions: {
    appCarregando() {
      this.carregando = true
    },
    appNaoCarregando() {
      this.carregando = false
    }
  }
})
