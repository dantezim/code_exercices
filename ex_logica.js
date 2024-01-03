// Exercícios tirados do site: https://www.dio.me/articles/lista-de-exercicios-para-treinar-logica-de-programacao

// Exercício 01
// Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.
// Obter valores de A, B e C do usuário

/* let a, b, c;
let total;

a = prompt("Digite o valor de a:");
a = parseFloat(a);

b = prompt("Digite o valor de b:");
b = parseFloat(b);

c = prompt("Digite o valor de c:");
c = parseFloat(c);

total = a + b;

if (c > total)
{
    console.log("O valor da soma é menor que C.");
} */

// console.log("Total:" + total);

// Exercício 02
// Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

/* let a;

a = prompt("Digite um valor qualquer:");
a = parseFloat(a);

if (a < 0)
{
    console.log("Negativo");
}

if (a > 0)
{
    console.log("positivo");
}

if (a % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }

 */

// Exercício 03
/* Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, 
caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e
imprimir seu valor na tela. */

/* 
let a, b, total;

a = prompt("Digite o valor de A:");
a = parseFloat(a);

b = prompt("Digite o valor de B:");
b = parseFloat(b);

if (a == b)
{
    total = a + b;
    console.log("Somatória:", total);
}
else 
{
    total = a * b;
    console.log("Multiplicação: ", total);
} 
*/

// Exercício 04
// Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

/* let a;

a = prompt("Digite um valor inteiro:");
a = parseInt(a);

console.log("Sucessor:", (a + 1));
console.log("Antecessor:", (a - 1)); */

// Exercício 05
// Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse 
// usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).

// Exercício 06
// Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.

/* let valor;

valor = prompt("Digite um valor: ");
valor = parseInt(valor);

console.log("Valor com reajuste de 5%:", (0.05 * valor)); */

// Exercício 07
// Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.

/* let valor1 = prompt("Digite o primeiro valor booleano (true ou false):");
let valor2 = prompt("Digite o segundo valor booleano (true ou false):");

let booleano1 = (valor1.toLowerCase() === 'true');
let booleano2 = (valor2.toLowerCase() === 'true');

if (booleano1 && booleano2) {
    console.log("Ambos são VERDADEIROS");
} else if (!booleano1 && !booleano2) {
    console.log("Ambos são FALSOS");
} else {
    console.log("Um é VERDADEIRO e o outro é FALSO");
}
 */

// Exercício 08
//  Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.

// Exercício 09
/* Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e 
imprima na tela sua condição 
de acordo com a tabela abaixo:

Fórmula do IMC = peso / (altura) ²

Tabela Condições IMC

 Abaixo de 18,5   | Abaixo do peso          

 Entre 18,6 e 24,9 | Peso ideal (parabéns)  

 Entre 25,0 e 29,9 | Levemente acima do peso

 Entre 30,0 e 34,9 | Obesidade grau I 

 Entre 35,0 e 39,9 | Obesidade grau II (severa)

 Maior ou igual a 40 | Obesidade grau III (mórbida) */

 /* 
 let altura, peso, IMC;

peso = prompt("Digite seu peso:");
peso = parseFloat(peso);

altura = prompt("Digite sua altura:");
altura = parseFloat(altura);

IMC = peso / (altura * altura);

if (IMC < 18.5)
{
    console.log("Abaixo do peso");
}
else 
if (IMC > 18.6 && IMC < 24.9)
{
    console.log("Peso ideal (parabéns)");
}
else if (IMC > 25.0 && IMC < 29.9)
{
    console.log("Levemente acima do peso");
}
else if (IMC > 30 && IMC < 34.9)
{
    console.log("Obesidade grau I ")
}
else if (IMC > 35 && IMC < 39.9)
{
    console.log("Obesidade grau II (severa)");
}
else if (IMC > 40)
{
    console.log(" Obesidade grau III (mórbida)");
} 
*/

// Exercício 10 
/* 
 Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.

 */