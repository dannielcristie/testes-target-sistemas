# Testes Estagio Target Sistemas

[## Teste 1](./teste1.js): Sequência de Fibonacci 

**Descrição:** Dado um número, verifique se ele pertence à sequência de Fibonacci.

**Solução:** Para determinar se um número pertence à sequência de Fibonacci, é necessário gerar a sequência até que o número informado seja alcançado ou ultrapassado. Se o número estiver na sequência gerada, ele pertence à sequência de Fibonacci; caso contrário, não pertence.

[## Teste 2](./teste2.js): Contagem de Letras em uma String

**Descrição:** Escreva um programa que conte quantas vezes uma letra específica (maiúscula ou minúscula) aparece em uma string.

**Solução:** O programa percorre a string e conta quantas vezes a letra especificada aparece, sem considerar se a letra é maiúscula ou minúscula. Caso a letra não seja encontrada, o programa informa que a letra não está presente na string.

[## Teste 3](./teste3.js): Soma de Números

**Descrição:** Dado o código que realiza uma soma com uma variável, determine o valor final da variável `SOMA` após a execução.

**Solução:** O valor final da variável `SOMA` é 77. Isso ocorre porque a soma é realizada de 2 a 12, acumulando os valores.

[## Teste 4](./teste4.js): Sequências Numéricas

**Descrição:** Complete o próximo elemento das seguintes sequências:

- **a) 1, 3, 5, 7, ___**  
  **Próximo número:** 9 (sequência de números ímpares consecutivos).

- **b) 2, 4, 8, 16, 32, 64, ____**  
  **Próximo número:** 128 (cada número é o dobro do anterior).

- **c) 0, 1, 4, 9, 16, 25, 36, ____**  
  **Próximo número:** 49 (sequência de quadrados perfeitos: 0^2, 1^2, 2^2, ...).

- **d) 4, 16, 36, 64, ____**  
  **Próximo número:** 100 (sequência de quadrados de números pares: 2^2, 4^2, 6^2, ...).

- **e) 1, 1, 2, 3, 5, 8, ____**  
  **Próximo número:** 13 (sequência de Fibonacci, onde cada número é a soma dos dois anteriores).

- **f) 2, 10, 12, 16, 17, 18, 19, ____**  
  **Próximo número:** 20 (sequência de números que contêm o dígito '2' ou '0').

## Teste 5: Identificação de Interruptores

**Descrição:** Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada usando apenas duas idas até uma das salas das lâmpadas.

**Solução:** 
1. Ligue o primeiro interruptor e espere por alguns minutos para que a lâmpada aqueça.
2. Desligue o primeiro interruptor e ligue o segundo interruptor.
3. Vá até as salas das lâmpadas:
   - A lâmpada que está acesa e quente é controlada pelo primeiro interruptor.
   - A lâmpada que está acesa é controlada pelo segundo interruptor.
   - A lâmpada que está apagada e fria é controlada pelo terceiro interruptor.

---

