// 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo: 


const prompt = require ('prompt-sync')();
let código = parseInt(prompt("Adicione o código do produto e veja de qual região ele vem:"))

if(código == 1 ){
    console.log("O produto vem do Sul do Brasil")
}
else if(código == 2){
    console.log("O produto vem do Norte do Brasil")
} 
else if(código == 3){
    console.log("O produto vem do Leste do Brasil")
} 
else if(código == 4){
    console.log("O produto vem do Oeste do Brasil")
}
else if(código == 5 || código == 6){
    console.log("O produto vem do Nordeste do Brasil")
}
else if(código >= 7 && código <= 9){
    console.log("O produto vem do Sudeste do Brasil")
}
else if(código >= 10 && código <= 20){
    console.log("O produto vem do Centro-Oeste")
}
else if(código >= 25 && código <= 50){
    console.log("O produto vem do Nordeste")
} else{(código <= 0 && código >= 21 && código <=24)
    console.log("O produto é importado")
}
