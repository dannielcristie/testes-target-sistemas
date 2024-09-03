// Função para descobrir o próximo elemento da sequência a)
function proximoA(termos) {
    // A lógica é que os números são ímpares consecutivos
    const ultimoTermo = termos[termos.length - 1];
    return ultimoTermo + 2;
}

// Função para descobrir o próximo elemento da sequência b)
function proximoB(termos) {
    // A lógica é que cada termo é o dobro do anterior
    const ultimoTermo = termos[termos.length - 1];
    return ultimoTermo * 2;
}

// Função para descobrir o próximo elemento da sequência c)
function proximoC(termos) {
    // A lógica é que os números são quadrados perfeitos: 0^2, 1^2, 2^2, 3^2, ...
    const ultimoIndice = termos.length;
    return ultimoIndice ** 2;
}

// Função para descobrir o próximo elemento da sequência d)
function proximoD(termos) {
    // A lógica é que os números são quadrados de números pares: 2^2, 4^2, 6^2, 8^2, ...
    const proximoIndicePar = (termos.length + 1) * 2;
    return proximoIndicePar ** 2;
}

// Função para descobrir o próximo elemento da sequência e)
function proximoE(termos) {
    // A lógica é que os números seguem a sequência de Fibonacci
    return termos[termos.length - 1] + termos[termos.length - 2];
}

// Função para descobrir o próximo elemento da sequência f)
function proximoF(termos) {
    // A lógica é que os números contêm o dígito '2' ou '0'
    for (let i = termos[termos.length - 1] + 1; i < 100; i++) {  // 100 é arbitrário, apenas para evitar loops infinitos
        if (i.toString().includes('2') || i.toString().includes('0')) {
            return i;
        }
    }
}

// Dados iniciais
const sequenciaA = [1, 3, 5, 7];
const sequenciaB = [2, 4, 8, 16, 32, 64];
const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
const sequenciaD = [4, 16, 36, 64];
const sequenciaE = [1, 1, 2, 3, 5, 8];
const sequenciaF = [2, 10, 12, 16, 17, 18, 19];

// Calculando o próximo termo para cada sequência
console.log("a) Próximo termo:", proximoA(sequenciaA));  // 9
console.log("b) Próximo termo:", proximoB(sequenciaB));  // 128
console.log("c) Próximo termo:", proximoC(sequenciaC));  // 49
console.log("d) Próximo termo:", proximoD(sequenciaD));  // 100
console.log("e) Próximo termo:", proximoE(sequenciaE));  // 13
console.log("f) Próximo termo:", proximoF(sequenciaF));  // 20
