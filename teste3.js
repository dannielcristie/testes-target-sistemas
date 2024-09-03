//O código incrementa a variável K de 1 até 13, somando K a cada iteração. A resposta final é a soma de todos os valores de K.

let INDICE = 12, SOMA = 0, K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(`O valor de SOMA é ${SOMA}.`); 
