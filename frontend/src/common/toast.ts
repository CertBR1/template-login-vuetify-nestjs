import { eventBus } from "./eventBus";


export function useToast() {
    return {
        mostrarToast: (mensagem: string, cor: string = "success", tempoExibicao: number = 3000) => {
            eventBus.emit("mostrar-toast", { mensagem, cor, tempoExibicao });
        },
    };
}
