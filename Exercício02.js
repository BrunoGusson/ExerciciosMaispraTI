//Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. 
//Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 


const prompt = require('prompt-sync')();
let eleitores = parseFloat(prompt("Qual a quantidade de eleitores?"))
let votbranco = parseFloat(prompt("Qual a quantidade de votos brancos?"))
let votnulo = parseFloat(prompt("Qual a quantidade de votos nulos?"))
let votvalido = parseFloat(prompt("Qual a quantidade de votos válidos?"))

console.log("O percentual de votos brancos é", votbranco/eleitores*100);
console.log("O percentual de votos nulos é", votnulo/eleitores*100);
console.log("O percentual de votos válidos é", votvalido/eleitores*100 );

