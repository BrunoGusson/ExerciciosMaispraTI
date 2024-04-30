// 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até que
// o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.


const prompt = require("prompt-sync")();
console.log("Digite números decimais e seus pesos. Digite 0 para encerrar.");

let somaProdutos = 0;
let somaPesos = 0;
let numero;
let peso;

while (true) {
    numdecimal = parseFloat(prompt("Digite um número decimal: "));

    if (numdecimal === 0) {
        break;
    }
    peso = parseFloat(prompt("Digite o peso deste número: "));
    somaProdutos += numdecimal * peso;
    somaPesos += peso;
}

if (somaPesos === 0) {
    console.log("Nenhum número foi inserido.");
} else {
    let mediaPonderada = somaProdutos / somaPesos;
    console.log("A média ponderada dos números inseridos é:", mediaPonderada.toFixed(2));
}

