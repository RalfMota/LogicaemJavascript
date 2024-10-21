// Definir constantes para controle
const TEMPO_ESPERA = 2000; // Tempo de espera para simular o aquecimento da lâmpada

// Função principal para controlar os interruptores e descobrir qual controla qual lâmpada
function controlarInterruptores() {
    // Lâmpadas simuladas como objetos com estado e temperatura
    let lampadas = [
        { id: 1, estado: 'desligada', temperatura: 'fria' }, // Lâmpada 1
        { id: 2, estado: 'desligada', temperatura: 'fria' }, // Lâmpada 2
        { id: 3, estado: 'desligada', temperatura: 'fria' }  // Lâmpada 3
    ];

    // Ligar o interruptor da lâmpada 1 e esperar
    ligarLampada(lampadas[0]);
    console.log("Ligando o interruptor 1 e aguardando para aquecer...");

    // Simular o tempo de espera para aquecer a lâmpada
    setTimeout(() => {
        // Desligar a lâmpada 1 e ligar a lâmpada 2
        desligarLampada(lampadas[0]);
        ligarLampada(lampadas[1]);
        console.log("Desligando o interruptor 1 e ligando o interruptor 2.");

        // Verificar estado das lâmpadas
        console.log("Indo para a sala das lâmpadas...");
        verificarLampadas(lampadas);

    }, TEMPO_ESPERA);
}

// Função para ligar uma lâmpada
function ligarLampada(lampada) {
    lampada.estado = 'ligada';
    lampada.temperatura = 'quente'; // A lâmpada está quente quando ligada
}

// Função para desligar uma lâmpada
function desligarLampada(lampada) {
    lampada.estado = 'desligada';
    lampada.temperatura = 'quente'; // Continua quente mesmo desligada por um tempo
}

// Função para verificar e identificar o controle das lâmpadas
function verificarLampadas(lampadas) {
    lampadas.forEach(lampada => {
        // Estado atual da lâmpada
        console.log(`Lâmpada ${lampada.id}: Estado = ${lampada.estado}, Temperatura = ${lampada.temperatura}`);
    });

    // Descobrir qual interruptor controla qual lâmpada
    lampadas.forEach(lampada => {
        if (lampada.estado === 'ligada') {
            console.log(`A lâmpada ${lampada.id} está acesa e é controlada pelo interruptor 2.`);
        } else if (lampada.temperatura === 'quente') {
            console.log(`A lâmpada ${lampada.id} está apagada, mas quente. Ela é controlada pelo interruptor 1.`);
        } else {
            console.log(`A lâmpada ${lampada.id} está apagada e fria. Ela é controlada pelo interruptor 3.`);
        }
    });
}

// Executar o controle dos interruptores
controlarInterruptores();

/* O programa simula o ligar e desligar das lâmpadas e registra o estado delas (ligada, desligada, quente, fria).
Após simular o tempo de espera, ele "verifica" o estado das lâmpadas e deduz qual interruptor controla qual lâmpada, com base no estado da luz e na temperatura da lâmpada.*/