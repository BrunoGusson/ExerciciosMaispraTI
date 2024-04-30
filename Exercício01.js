//Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.


const prompt = require('prompt-sync')();
let celsius = parseFloat(prompt("Insira a temperatura em °C: "));
let test = 1.8;
let fahrenheit = 32;
    console.log("A temperatura em Fahrenheit é de ",celsius * test + fahrenheit);
