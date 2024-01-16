// Lista de exercícios: https://fit.faccat.br/~fpereira/apostilas/exerc_resp_alg_mar2007.pdf

const prompt = require('prompt-sync')();

// Exercício 01
/* Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B.
A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o
valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados
nas variáveis.  */

let A = 10
let B = 20

A = B;
B = 10;
console.log(A, B);

