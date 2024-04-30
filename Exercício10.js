// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. 

const prompt = require('prompt-sync')();
let número = parseInt(prompt("Insira o número:"))
let contador = 0 
for (contador = 0; contador <= 10; contador++){
    console.log(número); 
 }
