const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre del empleado: ', (nombre) => {
    rl.question('Ingrese la edad del empleado: ', (inputEdad) => {
        let edad = parseInt(inputEdad);

        rl.question('Ingrese los años de experiencia: ', (inputExperiencia) => {
            let experiencia = parseInt(inputExperiencia);

            // Validar requisitos combinando condiciones con el operador lógico AND (&&)
            if (edad > 18 && experiencia > 0) {
                console.log("Candidato válido");
            } else {
                console.log("No cumple con los requisitos");
            }

            rl.close();
        });
    });
});