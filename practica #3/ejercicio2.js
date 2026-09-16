const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la primera calificación (0-100): ', (inputCal1) => {
    let calificacion1 = parseFloat(inputCal1);

    rl.question('Ingrese la segunda calificación (0-100): ', (inputCal2) => {
        let calificacion2 = parseFloat(inputCal2);

        // Comparar las calificaciones utilizando operadores de comparación (> y ==)
        if (calificacion1 > calificacion2) {
            console.log(`La calificación más alta es la primera con un valor de: ${calificacion1}`);
        } else if (calificacion2 > calificacion1) {
            console.log(`La calificación más alta es la segunda con un valor de: ${calificacion2}`);
        } else if (calificacion1 == calificacion2) {
            console.log("Ambas calificaciones son iguales.");
        } else {
            console.log("Los valores ingresados no son válidos.");
        }

        rl.close();
    });
});