/*Imprime todos los números del 1 al 1000 por consola, con la salvedad de todos aquellos números que sean múltiplos 
de 3 que en vez de imprimir el número, se imprimirá Fizz, en los números que sean múltiplos de 5 se imprimirá Buzz, 
y además en los números que sean múltiplos de 3 y de 5 se imprimirá FizzBuzz.*/
console.log("Welcome");

let numero;
for (let numero = 0; numero <= 1000; numero++) {
    if (numero %3==0 && numero %5==0) {
        console.log("FizzBuzz")
    }else if (numero %5==0) {
        console.log("Buzz")
    }else if (numero %3==0) {
        console.log("Fizz")
    } else {
        console.log(numero);
    }
}
