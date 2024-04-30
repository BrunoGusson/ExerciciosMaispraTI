// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado
// o tipo de triângulo: Isósceles, escaleno ou eqüilátero. 
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) 
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) 
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)


const prompt= require ('prompt-sync')();
let ladoA = parseInt(prompt("Insira o valor do lado A:"))
let ladoB = parseInt(prompt("Insira o valor do lado B:"))
let ladoC = parseInt(prompt("Insira o valor do lado C:"))

if (ladoA >= ladoB + ladoC){
  console.log("Não forma nenhum dos três triângulos")
} else{

if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
  console.log("Este é um triângulo isósceles")

}
  else { (ladoA == ladoB &&  ladoB == ladoC)
    console.log("Este é um triângulo equilátero");
  }
   if (ladoA != ladoB && ladoB != ladoC) 
   {
   console.log("Este é um triângulo escaleno")
} }
