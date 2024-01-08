// Exercícios tirados do site: https://www.dio.me/articles/lista-de-exercicios-para-treinar-logica-de-programacao

const prompt = require('prompt-sync')();

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


 let nota1, nota2, nota3, media;

 do
 {
 nota1 = prompt("Digite a nota da P1:");
 nota1 = parseFloat(nota1);
 } while (nota1 < 0 || nota1 > 10);

 do
 {
 nota2 = prompt("Digite a nota da P2:");
 nota2 = parseFloat(nota2);
 } while (nota2 < 0 || nota2 > 10);

 do
 {
nota3 = prompt("Digite a nota da P3:");
nota3 = parseFloat(nota3);
 } while (nota3 < 0 || nota3 > 10);

media = (nota1 + nota2 + nota3) / 3;

console.log("Sua média é:", media);
 */

// Exercício 11

/* Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e 
 se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7. */

 /* let nota1, nota2, nota3, nota4, media;
 let aluno;

aluno = prompt("Digite seu nome:");

 do 
 {
 nota1 = prompt("Digite a nota da P1: ");
 nota1 = parseFloat(nota1);
 } while (nota1 < 0 || nota1 > 10);

 do
 {
 nota2 = prompt("Digite a nota da P2: ");
 nota2 = parseFloat(nota2);
 } while (nota2 < 0 || nota2 > 10);

 do
 {
 nota3 = prompt("Digite a nota da P3: ");
 nota3 = parseFloat(nota3);
 } while (nota3 < 0 || nota3 > 10);

 do
 {
 nota4 = prompt("Digite a nota da P4: ");
 nota4 = parseFloat(nota4);
 } while (nota4 < 0 || nota4 > 10);

 media = (nota1 + nota2 + nota3 + nota4) / 4

 if (media >= 7 && media <= 10)
 {
    console.log("Parabéns" + aluno + "!" + "Você passou!");
    console.log("Media final: " + media);
 }

 if (media < 7 && media > 0)
 {
    console.log("Poxa" + aluno + "):");
    console.log("Deveria ter estudado um pouco mais");
 } */

// Exercício 12

/* 
Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento
 pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.
 Tabela de Código de Condições de Pagamento

 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

 2 - À Vista no cartão de crédito, recebe 10% de desconto

 3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

 4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%
*/

/* let valorProduto, metodoPagamento, valorTotal;

do
{
valorProduto = prompt("Digite o valor do produto: ");
valorProduto = parseFloat(valorProduto);
} while (valorProduto < 0);

console.log("Métodos de pagamento:");
console.log("Opção 1: Pix");
console.log("Opção 2: Cartão de crédito"); 
console.log("Opção 3: 2x parcelas");
console.log("Opção 4: 3x parcelas ou mais");

do
{
metodoPagamento = prompt("Digite o número da opção desejada:")
metodoPagamento = parseFloat(metodoPagamento);
} while(metodoPagamento < 0 || metodoPagamento > 4);

if (metodoPagamento == 1)
{
    total = (15/100) * valorProduto;
    console.log("Total do produto com 15% de desconto aplicado:" + " " + total);
}
else
if (metodoPagamento == 2)
{
    total = (10/100) * valorProduto;
    console.log("Total do produto com 10% de desconto aplicado:" + " " + total);
}
else
if (metodoPagamento == 3)
{
    total = valorProduto / 2;
    console.log("Total das parcelas:" + " " + total);
}
else
if (metodoPagamento == 4)
{
    total = (valorProduto / 3) * 0.10;
    console.log("Total das parcelas com juros:" + " " + total);
} */

// Exercício 13
/* 
    Faça algoritmo que leia o nome e a idade de uma pessoa e imprima na tela o nome da pessoa e se ela é maior ou menor de idade. 
*/

/* let nome, idade;

nome = prompt("Digite seu nome:");

do
{
idade = prompt("Digite sua idade:");
idade = parseInt(idade);
} while (idade < 0);

if (idade > 18)
{
    console.log(nome + ", você é maior de idade!");
}
else
{
    console.log(nome + ", você é um pimpolinho.");
} */

// Exercício 15

/* 
Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. 
Leve em consideração o ano com 365 dias e o mês com 30 dias.

(Ex: 5 anos, 2 meses e 15 dias de vida)
*/

/* function calculaIdadeDiasMeses(idade)
{
    const diasPorAno = 365.25;
    const diasTotais = idade * diasPorAno;

    const dias = Math.floor(idade / 30);
    const meses = Math.floor(idade % 30);

    return {meses, dias};
}

let idade;
idade = prompt("Digite sua idade:");
idade = parseInt(idade);

{
   const resultado = calculaIdadeDiasMeses(idade);
   console.log("Você viveu aproximadamente" + " " + resultado.meses + " " + "meses" + " " + "e" + " " + resultado.dias + " " + "dias!");
}
 */

// Exercício 16
/*
Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura correspondente em grau Celsius. Imprima na tela as duas temperaturas.

Fórmula: C = (5 * ( F-32) / 9) 
 */

/* function FparaCelsius(Fahrenheit)
{
    let C = (5 * (Fahrenheit-32) / 9);
    return C;      
}

let Fahrenheit;

Fahrenheit = prompt("Digite a temperatura em fahrenheit:");
Fahrenheit = parseFloat(Fahrenheit);

const converte = FparaCelsius(Fahrenheit);
console.log("A temperatura em Fahrenheite é:" + " " + Fahrenheit);
console.log("A temperatura em Celsius é:" + " " + converte); */

// Exercício 17
/*
Faça um algoritmo que imprima na tela a tabuada de 1 até 10.
 */

/* function calculoTabuada(tabuada)
{
    return tabuada * contador;
}

let tabuada;
let contador = 0;

tabuada = prompt("Digite o número da tabuada que você quer saber:");
tabuada = parseInt(tabuada);

for(contador; contador < 11; contador++)
{
    const resultado = calculoTabuada(tabuada);
    console.log(resultado);
}
 */

// Exercício 18

/*
 Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma viagem, sabendo que o carro faz 12km com um litro. 
 Deve-se fornecer ao usuário o tempo que será gasto na viagem a sua velocidade média, distância percorrida e a quantidade de litros utilizados 
 para fazer a viagem.

Fórmula: distância = tempo x velocidade.

    litros usados = distância / 12.
 */

    
