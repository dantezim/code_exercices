// Lista de exercícios: https://fit.faccat.br/~fpereira/apostilas/exerc_resp_alg_mar2007.pdf

const prompt = require('prompt-sync')();

// Exercício 01
/* Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B.
A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o
valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados
nas variáveis.  */

/* 
let A = 10
let B = 20

A = B;
B = 10;
console.log(A, B); */

// Exercício 02

/*
    a) Serão impressos os valores 10 e 5;
    b) Serão impressos os valores 30, 10 e 40;
    c) a = 10, b = 20, c = a (10)
    b = c (10)
    a = b (10)
    Será impresso 10, 10 e 10

    d) a = 10, b = a + 1 (11), a = b + 1 (12), b = a + 1 (13)
    a = b + 1 (14)
    Serão impressos os valores 14 e 13

    e) a = 10, b = 5, c = a + b (15)
    b = 20, a = 10
    Serão impressos os valores 10, 20 e 15

    f) x = 1, y = 2, z = y - x (1)
    y = x + z (2)
    Serão impressos os valores 1, 2, 1


*/

// Exercício 03

/* 

a)  let a = (4/2) + (2/4);
    console.log(a);
    // Valor de a = 2.5

    let a = 4/2 + 2/4;
    console.log(a);
    // Valor de a = 2.5

    Produzem o mesmo resultado
b)
    let b = 4/(2+2)/4;
    console.log(b);
    // Valor de b = 0.25

    
    let b = 4/2+2/4;
    console.log(b);
    // Valor de b = 2.5 

    Não produzem o mesmo resultado

c)

    let c = (4+2)*2-4;
    console.log(c);
    // Valor de c = 8

    let c = 4+2*2-4;
    console.log(c); 
    // Valor de c = 4

    Não produzem o mesmo resultado

 */

// Exercício 05

// Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor. 

/* let val;

val = prompt("Digite um valor qualquer:");
val = parseFloat(val);

console.log(val - 1); */

// Exercício 11

/* 
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor. 
*/

/* let carrosVendidos, salarioAtualFixo, salarioTotal, valorCarroVendido, valorVendaTotal, totalComissao;

do
{
salarioAtualFixo = prompt("Digite o seu salário atual:");
salarioAtualFixo = parseFloat(salarioAtualFixo);
} while (salarioAtualFixo < 0);

do
{
carrosVendidos = prompt("Digite a quantidade de carros vendidos:");
carrosVendidos = parseInt(carrosVendidos);
} while (carrosVendidos < 0);

do
{
valorCarroVendido = prompt("Digite o valor do carro:");
valorCarroVendido = parseFloat(valorCarroVendido);
} while (valorCarroVendido < 0)

valorVendaTotal = valorCarroVendido * carrosVendidos;

console.log("O valor total das suas vendas foi:" + ' ' + valorVendaTotal);

totalComissao = valorVendaTotal * 0.05;

salarioTotal = salarioAtualFixo + totalComissao;

console.log("Seu salário final total ficou:" + ' ' + salarioTotal);

 */

// Exercício 13

/* Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é: nota1 * 2 + nota2 * 3 + nota3 * 5 / 10; 
*/

/* function calculaMedia(alunoNota1, alunoNota2, alunoNota3)
{
    return (alunoNota1 * 2) + (alunoNota2 * 3) + (alunoNota3 * 5) / 10;
}

let alunoNota1, alunoNota2, alunoNota3;


alunoNota1 = prompt("Digite a nota da sua primeira prova:");
alunoNota1 = parseFloat(alunoNota1);

if (alunoNota1 < 0 || alunoNota1 > 10)
{
    alunoNota1 = prompt("Notas acima de 10 ou abaixo de 0 não existem! Por favor digite novamente a nota da sua primeira prova:");
    alunoNota1 = parseFloat(alunoNota1);
}

alunoNota2 = prompt("Digite a nota da sua segunda prova:");
alunoNota2 = parseFloat(alunoNota2);

if (alunoNota2 < 0 || alunoNota2 > 10)
{
    alunoNota2 = prompt("Notas acima de 10 ou abaixo de 0 não existem! Por favor digite novamente a nota da sua segunda prova:");
    alunoNota2 = parseFloat(alunoNota2);
}

alunoNota3 = prompt("Digite a nota da sua terceira prova:");
alunoNota3 = parseFloat(alunoNota3);

if (alunoNota3 < 0 || alunoNota3 > 10)
{
    alunoNota3 = prompt("Notas acima de 10 ou abaixo de 0 não existem! Por favor digite novamente a nota da sua terceira prova:");
    alunoNota3 = parseFloat(alunoNota3);
}

const resultadoMediaFinal = calculaMedia(alunoNota1, alunoNota2, alunoNota3);

console.log("Sua média final é:" + ' ' + resultadoMediaFinal); */

// Exercício 14

/*  Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso
contrário escrever NÃO É MAIOR QUE 10!  
*/

/* 
let valor;

valor = prompt("Digite um valor:");
valor = parseFloat(valor);

if (valor > 10)
{
    console.log("MAIOR QUE 10");
}
else
{
    console.log("MENOR QUE 10");
}
 */

// Exercício 50

/* 
Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem
crescente. 
*/

/* let val = 1;
let i = 0;

for(i; i < 10; i++)
{
    const soma = val + i;
    console.log(soma);
} */
