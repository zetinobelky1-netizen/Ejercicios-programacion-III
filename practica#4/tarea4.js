const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la calificación numérica (0-100): ', (inputCalificacion) => {
  const calificacion = parseFloat(inputCalificacion);

  if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
    console.log('\nError: La calificación debe ser un número entre 0 y 100.');
  } else {
    // Math.floor(calificacion / 10) reduce el rango a un entero de 0 a 10
    const rango = Math.floor(calificacion / 10);
    let letra = '';

    switch (rango) {
      case 10:
      case 9:
        letra = 'A';
        break;
      case 8:
        letra = 'B';
        break;
      case 7:
        letra = 'C';
        break;
      case 6:
        letra = 'D';
        break;
      default: // Cubre del 0 al 5 (rango 0 a 59)
        letra = 'F';
        break;
    }

    console.log('\n--- RESULTADO ---');
    console.log(`Calificación numérica: ${calificacion}`);
    console.log(`Calificación por letra: ${letra}`);
  }

  rl.close();
});