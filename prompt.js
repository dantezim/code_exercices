const prompt = require('prompt-sync')();

let nota1, nota2;

nota1 = prompt("Digite sua nota da P1: ");
nota1 = parseFloat(nota1);

nota2 = prompt("Digite sua nota da P2: ");
nota2 = parseFloat(nota2);

let total = (nota1 + nota2) / 2;

console.log("Sua média é: " + " " + total);