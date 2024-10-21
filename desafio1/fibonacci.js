function fibonacciCheck(number) {
    let fib = [0, 1];
    let i = 2;
    
    while (fib[i - 1] < number) {
        fib[i] = fib[i - 1] + fib[i - 2];
        i++;
    }
    
    if (fib.includes(number)) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
}

// Exemplo de uso
const inputNumber = 21; // Pode ser substituído por qualquer entrada
fibonacciCheck(inputNumber);

