function countA(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === 'a') {
            count++;
        }
    }
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
}

// Exemplo de uso
const inputString = "Abracadabra"; // Pode ser substituído por qualquer entrada
countA(inputString);
