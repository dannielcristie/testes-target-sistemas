// O programa deve calcular a sequência de Fibonacci e verificar se um número informado pertence a essa sequência.

function isFibonacci(num) {
    let a = 0;
    let b = 1;

    // Verifica os dois primeiros números da sequência
    if (num === a || num === b) {
        return true;
    }

    let c = a + b;

    // Continua somando até que o número seja encontrado ou ultrapassado
    while (c <= num) {
        if (c === num) {
            return true; // O número pertence à sequência
        }
        a = b;
        b = c;
        c = a + b; // Calcula o próximo número da sequência
    }

    return false; // O número não pertence à sequência
}


const numero1 = 21;
const pertence1 = isFibonacci(numero1);
console.log(`O número ${numero1} ${pertence1 ? "pertence" : "não pertence"} à sequência de Fibonacci.`);


const numero2 = 4;
const pertence2 = isFibonacci(numero2);
console.log(`O número ${numero2} ${pertence2 ? "pertence" : "não pertence"} à sequência de Fibonacci.`);
