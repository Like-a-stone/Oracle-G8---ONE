//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
console.log("contador que começa em 1 e vá até 10 \n");
let contador = 1;

while (contador < 11){
    console.log(contador)
    contador++;
};

console.log("\n contador que começa em 10 e vá até 0 \n");
//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

contador = 10;
while (contador > 0){
    console.log(contador)
    contador--;
};

// Peça um número e conte deste número até 0, usando um loop while no console do navegador.
console.log("\n Peça um número e conte deste número até 0, usando um loop while no console do navegador. \n");

numero = parseInt(prompt("Digite o numero!"));

while (numero >= 0){
    console.log(numero);
    numero--;
}

// Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
contador = 0;
console.log("\n Peça um número e conte deste número até 0, usando um loop while no console do navegador. \n");

numero = parseInt(prompt("Digite o numero!"));

while (numero <= contador){
    console.log(contador);
    contador++;
}