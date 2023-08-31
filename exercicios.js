/*
11. Fazer uma função que recebe um mês e um ano como parâmetros e retorna o número de dias daquele mês daquele ano. 
Dica: um ano é bissexto quando é múltiplo de 4 e não múltiplo de 100, ou também quando é múltiplo de 400.
*/

/*
let anoBisexto = true;
const input = require("readline-sync");
let consulta = true;

while (consulta) {
    //console.log("QUANTIDADE DE DIAS DO MÊS")
    let ano = input.questionInt("Digite o ano: ");
    let mes = input.questionInt("Digite o mes: ");
    
    if (ano % 2 == 0 && ano % 100 == 0) {
        anoBisexto = true;
    } else {
        anoBisexto = false;
    }

    if (anoBisexto && mes == 2) {
        console.log(`O número de dias do mês ${mes} do ano de ${ano} é 29 dias`);
    } else {
        switch (mes) {
            case 1:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 31 dias`);
                break;
            case 2:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 28 dias`);
                break;
            case 3:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 31 dias`);
                break;
            case 4:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 30 dias`);
                break;
            case 5:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 31 dias`);
                break;
            case 6:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 30 dias`);
                break;
            case 7:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 31 dias`);
                break;
            case 8:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 31 dias`);
                break;
            case 9:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 30 dias`);
                break;
            case 10:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 31 dias`);
                break;
            case 11:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 30 dias`);
                break;
            case 12:
                console.log(`O número de dias do mês ${mes} do ano de ${ano} é 31 dias`);
                break;
            default:
                console.log("Opção Inválida!");    
        }
   
    }
    let sair = input.question("Deseja fazer uma nova consulta: ").toUpperCase();
    if (sair == 'S'.toUpperCase()) {
        consulta = true;
    } else {
        consulta = false;
    }

}
*/

/*
10. Crie um programa de conversão entre as temperaturas Celsius, Farenheit e Kelvin usando funções para isso. 
O programa deve ler a opção escolhida pelo usuário, que escolhe uma determinada conversão entre escalas termométricas e, 
em seguida, o programa solicita a temperatura a ser convertida. 
As opções de conversão são as seguintes: utilize o switch case

1.	de Celsius para Fahrenheit.
2.	de Celsius para Kelvin.
3.	de Fahrenheit para Celsius.
4.	de Fahrenheit para Kelvin.
5.	de Kelvin para Celsius.
6.	de Kelvin para Fahrenheit
*/

const input = require("readline-sync");

let num = 0;
let temperaturaOrigem;
let valorTemperaturaOrigem = 0;
let celsius = 0;
let temperaturaConvertida = 0;
let temperaturaDestino;
let i = true;

function menu(){
    console.log("CONVERSOR DE TEMPERATURAS");
    console.log("--------------------------------------------");
    const menu = [' (1) Celsius para Fahrenheit,\n(2) Celsius para Kelvin,\n(3) Fahrenheit para Celsius,\n(4) Fahrenheit para Kelvin,\n(5) Kelvin para Celsius,\n(6) Kelvin para Fahrenheit'];
    console.log(menu);
    console.log("--------------------------------------------");
}

function conversorTemperatura(opcao, valorTemperaturaOrigem) {

    switch (opcao) {
        case 1:
            onsole.log("CONVERSOR DE CELSIUS PARA FAHRENHEIT:");
            temperaturaConvertida = 1.8 * valorTemperaturaOrigem + 32;
            temperaturaOrigem = "Celsius";
            temperaturaDestino = "Fahrenheit";
            break;
        case 2: 
            console.log("CONVERSOR DE CELSIUS PARA KELVIN");
            temperaturaConvertida = valorTemperaturaOrigem + 273; 
            temperaturaOrigem = "Celsius";
            temperaturaDestino = "Kelvin";
            break;
        case 3:
            console.log("CONVERSOR DE FAHRENHEIT PARA CELSIUS:");
            temperaturaConvertida = (valorTemperaturaOrigem - 32) / 1.8;
            emperaturaOrigem = "Fahrenheit";
            temperaturaDestino = "Celsius="; 
            break;
        case 4: 
            console.log("CONVERSOR DE FAHRENHEIT PARA KELVIN");
            temperaturaConvertida = (valorTemperaturaOrigem - 32) * (5/9) + 273;
            temperaturaOrigem = "Fahrenheit";
            temperaturaDestino = "Kelvin";
            break;
        case 5: 
            console.log("CONVERSOR DE KELVIN PARA CELSIUS:");
            temperaturaConvertida = (valorTemperaturaOrigem - 32) / 1.8;
            temperaturaOrigem = "Kelvin";
            temperaturaDestino = "Celsius";
            break;
        case 6: 
            console.log("CONVERSOR DE KELVIN PARA FAHRENHEIT");
            temperaturaConvertida = (valorTemperaturaOrigem - 273) * 1.8 + 32; 
            temperaturaOrigem = "Kelvin";
            temperaturaDestino = "Fahrenheit";
            break;
        default:
            console.log("Opção inválida");
    }

    console.log(`A conversão de ${valorTemperaturaOrigem} º de ${temperaturaOrigem} para  ${temperaturaDestino} é equivalente a ${temperaturaConvertida}º ${temperaturaDestino}`);    


}

menu();

while (i) {
    let conversor  = input.questionInt("Informe o número corresponente a conversão desejada: ")
    let temperatura = input.questionInt("Informe a temperatura: ");
    console.log(conversorTemperatura(conversor, temperatura));
    let sair = input.question("Deseja fazer uma  nova conversão (S ou N): ").toUpperCase();
    if (sair == 'S'.toUpperCase()) {
        i = true;
    } else {
        i = false;
    }
}



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