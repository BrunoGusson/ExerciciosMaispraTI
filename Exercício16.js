// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos 
// maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.


function numeroprimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Os 50 primeiros números primos maiores que 100 são:");

let contador = 0;
let num = 101; 

while (contador < 50) {
    if (numeroprimo(num)) {
        console.log(num);
        contador++;
    }
    num++;
}
