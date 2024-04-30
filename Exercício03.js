// Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações: 
// Some 25 ao primeiro inteiro; 
// Triplique o valor do segundo inteiro; 
// Modifique o valor do terceiro inteiro para 12% do valor original; 
// Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros. 



const prompt = require ('prompt-sync')();
let soma = parseInt(prompt("Insira um nùmero:" ))
let vezes = parseInt(prompt("Insira um número:"))
let porcentagem = parseInt(prompt("Insira um nùmero:"))
    
console.log("A soma de 25 ao primeiro número inteiro é", soma+25)
console.log("O valor do segundo número triplicado é ", vezes*3)
console.log("O valor reajustado é de", (12/100)*porcentagem + porcentagem)
console.log("O total dos números inteiros é" , soma + vezes + porcentagem)  
