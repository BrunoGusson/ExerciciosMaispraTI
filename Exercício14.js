//14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. 

const prompt = require('prompt-sync')();

 console.log("Digite o número decimal e se digitar 0 encerra.")

 let soma = 0;
 let contador = 0;
 let numdecimal;

while(true){
    numdecimal= parseFloat(prompt("Digite aqui o número decimal:"))
   if (numdecimal === 0){
       break;
}
 
    soma += numdecimal
    contador++;
}
    let media = soma / contador;

    if (contador === 0) {
    console.log("Nenhum número foi inserido.");
} else {
    console.log("A média aritmética dos números inseridos é:", media.toFixed(2));
}
