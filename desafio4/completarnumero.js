function completeSequences() {
    // a) 1, 3, 5, 7, ___ 
    let seqA = [1, 3, 5, 7];
    seqA.push(seqA[seqA.length - 1] + 2); // Sequência de ímpares
    console.log("Próximo valor da sequência A: " + seqA[seqA.length - 1]); // 9

    // b) 2, 4, 8, 16, 32, 64, ____
    let seqB = [2, 4, 8, 16, 32, 64];
    seqB.push(seqB[seqB.length - 1] * 2); // Multiplica por 2
    console.log("Próximo valor da sequência B: " + seqB[seqB.length - 1]); // 128

    // c) 0, 1, 4, 9, 16, 25, 36, ____
    let seqC = [0, 1, 4, 9, 16, 25, 36];
    let nextC = (seqC.length) * (seqC.length); // Sequência de quadrados perfeitos
    seqC.push(nextC);
    console.log("Próximo valor da sequência C: " + seqC[seqC.length - 1]); // 49

    // d) 4, 16, 36, 64, ____
    let seqD = [4, 16, 36, 64];
    let nextD = (seqD.length * 2) ** 2; // Quadrados perfeitos de números pares
    seqD.push(nextD);
    console.log("Próximo valor da sequência D: " + seqD[seqD.length - 1]); // 100

    // e) 1, 1, 2, 3, 5, 8, ____
    let seqE = [1, 1, 2, 3, 5, 8];
    let nextE = seqE[seqE.length - 1] + seqE[seqE.length - 2]; // Sequência de Fibonacci
    seqE.push(nextE);
    console.log("Próximo valor da sequência E: " + seqE[seqE.length - 1]); // 13

    // f) 2, 10, 12, 16, 17, 18, 19, ____
    let seqF = [2, 10, 12, 16, 17, 18, 19];
    let nextF = seqF[seqF.length - 1] + 1; // Intercala pares e ímpares
    seqF.push(nextF);
    console.log("Próximo valor da sequência F: " + seqF[seqF.length - 1]); // 20
}

// Executar função
completeSequences();


/* Utilizando javascript, foi criado o código, especificando as varíaveis de acordo com cada sequência númerica, determinada a lógica para os elementos dispostos no arrays:

Sequência A: 1, 3, 5, 7, ___

    A sequência aumenta de 2 em 2 (números ímpares). O próximo valor é 9.

Sequência B: 2, 4, 8, 16, 32, 64, ____

    A sequência dobra o valor a cada elemento (multiplicação por 2). O próximo valor é 128.

Sequência C: 0, 1, 4, 9, 16, 25, 36, ____

    A sequência segue os quadrados perfeitos: n2n2. O próximo valor é 49 (7²).

Sequência D: 4, 16, 36, 64, ____

    Sequência de quadrados perfeitos de números pares: (2,4,6,8,...)2(2,4,6,8,...)2. O próximo valor é 100 (10²).

Sequência E: 1, 1, 2, 3, 5, 8, ____

    Sequência de Fibonacci, onde cada número é a soma dos dois anteriores. O próximo valor é 13.

Sequência F: 2, 10, 12, 16, 17, 18, 19, ____

    Sequência alterna pares e ímpares. O próximo valor é 20.


*/