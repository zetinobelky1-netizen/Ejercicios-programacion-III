// Importar readline para la entrada por consola
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número: ', (inputNumero) => {
    // Declarar la variable y convertir el valor ingresado a número flotante
    let numero = parseFloat(inputNumero);

    // Verificar si es positivo, negativo o cero usando IF, ELSE IF y ELSE
    if (numero > 0) {
        console.log("El número es positivo");
    } else if (numero < 0) {
        console.log("El número es negativo");
    } else {
        console.log("El número es cero");
    }

    // Cerrar la interfaz de lectura
    rl.close();
});