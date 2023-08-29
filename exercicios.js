


/*
6. Uma empresa contrata um encanador a R$ 30,00 por dia. 
Crie um programa que solicite o número de dias trabalhados pelo encanador e 
imprima a quantia líquida que deverá ser paga, 
sabendo-se que são descontados 8% para pagamento de impostos e taxas devidas.

const input = require("readline-sync");

let numeroDiasTrabalhados = input.questionInt("Informe a quantidade de dias Trabalhados: ");
let totalBruto = numeroDiasTrabalhados * 30;
let totalLiquido = totalBruto - (totalBruto * 0.08);

console.log(`A quantia líquida a pagar é R$ ${totalLiquido}`);
*/


/*
5. Faça um programa em Javascript que receba do usuário um número N e 
depois imprima os N primeiros números naturais ímpares.

const input = require("readline-sync");

let n = input.questionInt("Digite um número: ");

for (let i = 0; i <= n; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

/*
4. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares. 
Faça três versões desse programa, cada uma usando uma estrutura de repetição diferente (for, while, do-while). 
Qual das três estruturas é a mais adequada para este programa? Por que?



// Loop FOR

let somaPares = 0;

for (let i = 0; i <= 100; i++) {

    if (i % 2 == 0) {
        console.log(i);
        somaPares = somaPares + i;
    }
}

console.log(`Soma dos números pares é ${somaPares}`);



// While

let somaPares = 0;

let i = 0;
while (i <= 100) {
    if (i % 2 == 0) {
        console.log(i);
        somaPares = somaPares + i;
    }
    i++;
}
console.log(`Soma dos números pares é ${somaPares}`);



// Do While


let somaPares = 0;

let i = 0;
do {
    if (i % 2 == 0) {
        console.log(i);
        somaPares = somaPares + i;
    }
    i++;
} while (i <= 100);
console.log(`Soma dos números pares é ${somaPares}`);
*/


/*3. Uma determinada empresa vende seus produtos em quatro diferentes estados. 
Cada estado possui uma taxação de imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ: 15%; MS: 8%). 
Faça um programa em Javascript, que o usuário entre com o valor e o estado destino do produto e o programa 
retorne o preço final do produto acrescido do imposto correspondente ao estado onde será vendido. 
O programa deve mostrar uma mensagem de erro caso o estado fornecido não esteja na lista de estados válidos.*/

/*
const input = require("readline-sync");

let valor = input.questionInt(`Digite o valor: `);
let estado = input.question(`Digite o Estado: `);
switch (estado) {
    case "MG":
        valor += valor * 0.07;
        break;
    case "SP":
        valor += valor * 0.12;
        break;
    case "RJ":
        valor += valor * 0.15;
        break;
    case "MS":
        valor += valor * 0.08;
        break;
    default:
        console.log("Estado inválido");

}
console.log(`O preço final do produto para o estado ${estado} é R$ ${valor}`);
*/



/*
2. Faça um programa com Javascript para verificar se um determinado ano, fornecido pelo usuário, é bissexto. 
Um ano é bissexto se for divisível por 400 ou se for divisível por 4 e não for divisível por 100.
Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é bissexto.

const input = require("readline-sync");

let num = input.questionInt('Digite um ano: ');

if ((num % 400 == 0) || (num % 4 == 0 && num % 100 != 0)) {
    console.log(`${num} é um ano bissexto`);
} else {
    console.log(`${num} não é bissexto`);
}
*/


/*
Exercicio 1:

const input = require("readline-sync");

function notas() {    
    let somaNotas = 0; 
    for (let i = 0; i < 3; i++) {
        // let nota = input.questionFloat('Digite a nota ' + (i+1) + ':');
        let nota = input.questionFloat(`Digite a nota ${i+1}: `);
        somaNotas += nota;
        
    }
    let media = somaNotas / 3;
    return media;    
}   

let nome = input.question('Digite o seu nome: ');
console.log('Média: ' + notas());*/