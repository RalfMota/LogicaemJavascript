let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);  // Exibe o valor final de SOMA

/*  A lógica foi aplicadao ao Javascript para da seguinte forma:

Variáveis Iniciais:

INDICE = 12: Definido como o valor limite para K.
SOMA = 0: Variável que armazenará o valor acumulado da soma.
K = 1: Variável de controle que começa em 1.

Loop while: O loop executa enquanto K for menor que INDICE. Dentro do loop:

O valor de K é incrementado em 1 a cada iteração (K = K + 1).
O novo valor de K é adicionado à variável SOMA.

Passo a Passo:

Iteração 1: K = 2, SOMA = 0 + 2 = 2
Iteração 2: K = 3, SOMA = 2 + 3 = 5
Iteração 3: K = 4, SOMA = 5 + 4 = 9
Iteração 4: K = 5, SOMA = 9 + 5 = 14
Iteração 5: K = 6, SOMA = 14 + 6 = 20
Iteração 6: K = 7, SOMA = 20 + 7 = 27
Iteração 7: K = 8, SOMA = 27 + 8 = 35
Iteração 8: K = 9, SOMA = 35 + 9 = 44
Iteração 9: K = 10, SOMA = 44 + 10 = 54
Iteração 10: K = 11, SOMA = 54 + 11 = 65
Iteração 11: K = 12, SOMA = 65 + 12 = 77

Resultado Final: Após o loop terminar, o valor final de SOMA será 77. */
