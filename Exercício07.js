// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem 
// compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. 

const prompt = require ('prompt-sync')();
const varejo = 0.30
const atacado = 0.25
let maçacomprada = parseInt(prompt("Insira o número de maças compradas:"))

let totalcompra
if (maçacomprada <= 11 )  { totalcompra = (maçacomprada * varejo) 
    console.log("O valor total da compra é de", totalcompra , " reais" )
  } else if (maçacomprada >= 12) { totalcompra = (maçacomprada * atacado) 
     console.log("O valor total da compra é de ", totalcompra , "reais")
  }
