// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido 
// escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será 
// encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.  


const prompt = require("prompt-sync")(); 

function verificarParOuImpar(num) {
    if (num % 2 === 0) {
        return "PAR";
    } else {
        return "ÍMPAR";
    }
}

console.log("Digite os valores inteiros (digite um valor nulo ou negativo para sair): ");

while (true) {
    
    let valor = parseInt(prompt("Digite um valor inteiro: "));

    if (valor <= 0 || isNaN(valor)) {
        console.log("Programa encerrado.");
        break;
    }

    console.log(`${valor} é ${verificarParOuImpar(valor)}.`);
}
