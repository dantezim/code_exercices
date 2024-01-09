const prompt = require('prompt-sync')();

let i = 0;
let input = prompt("Fale uma lista de coisas (separadas por vírgulas)"); // Mensagem dizendo para o usuário fornecer múltiplos valores.
let lista = input.split(', '); // Lista armazenando os inputs do usuário.

for(i; i < lista.length; i++) // Loop para exibir cada índice da lista.
{
console.log(lista[i]); // Variável contadora 'i' passada dentro do índice da lista, para exibir cada um dos itens
}