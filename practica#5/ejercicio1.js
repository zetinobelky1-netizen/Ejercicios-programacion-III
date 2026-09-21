const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su nombre: ', (nombre) => {
  rl.question('Ingrese su calificación final (0-100): ', (inputNota) => {
    rl.question('¿Entregó todos los trabajos? (si/no): ', (inputTrabajos) => {
      
      const notaOriginal = parseFloat(inputNota);
      const entregoTrabajos = inputTrabajos.trim().toLowerCase() === 'si';
      let bonificacion = 0;

      // Cálculo de bonificación
      if (notaOriginal >= 90 && entregoTrabajos) {
        bonificacion = 5;
      } else if (notaOriginal >= 70 && notaOriginal < 90 && entregoTrabajos) {
        bonificacion = 3;
      } else {
        bonificacion = 0;
      }

      // Asegurar que la nota final no exceda 100
      let notaFinal = notaOriginal + bonificacion;
      if (notaFinal > 100) {
        notaFinal = 100;
      }

      // Mostrar resultados
      console.log('\n--- RESULTADOS ---');
      console.log(`Nombre: ${nombre}`);
      console.log(`Calificación original: ${notaOriginal}`);
      console.log(`Bonificación aplicada: +${bonificacion} puntos`);
      console.log(`Calificación final: ${notaFinal}`);

      rl.close();
    });
  });
});