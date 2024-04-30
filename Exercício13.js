// 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a
// tabuada de 1 até N. Mostre a tabuada na forma: 
// 1 x N = N 
// 2 x N = 2N 
// 3 x N = 3N 




const prompt = require('prompt-sync')();
let multiplicando = parseInt(prompt("Insira o primeiro número e veja sua tabuada até ele mesmo: "))

for (contador = 1; contador <= multiplicando; contador++){
    console.log(`${multiplicando} x ${contador} =`, multiplicando * contador); 
 }
