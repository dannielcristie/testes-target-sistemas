// O programa deve verificar a existência da letra 'a' (maiúscula ou minúscula) em uma string e contar quantas vezes ela ocorre

function contarLetra(str, letra) {
    let contador = 0;

    const letraMinuscula = letra.toLowerCase();
    const letraMaiuscula = letra.toUpperCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letraMinuscula || str[i] === letraMaiuscula) {
            contador++;
        }
    }

    if (contador === 0) {
        console.log(`A letra '${letra}' não foi encontrada na palavra "${str}".`);
    } else {
        console.log(`A letra '${letra}' aparece ${contador} vezes na palavra "${str}".`);
    }
}

const letraParaContar = 'a'; 

const texto1 = "Abacate";
const texto2 = "Kiwi"; 

contarLetra(texto1, letraParaContar);
contarLetra(texto2, letraParaContar);

