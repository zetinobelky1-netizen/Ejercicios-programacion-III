const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la longitud del lado A: ', (ladoA) => {
  rl.question('Ingrese la longitud del lado B: ', (ladoB) => {
    rl.question('Ingrese la longitud del lado C: ', (ladoC) => {
      
      const a = parseFloat(ladoA);
      const b = parseFloat(ladoB);
      const c = parseFloat(ladoC);

      // Validación de la desigualdad triangular
      const esValido = (a + b > c) && (a + c > b) && (b + c > a);

      if (!esValido) {
        console.log('\nError: Las longitudes ingresadas no pueden formar un triángulo.');
      } else {
        // Determinamos un código para usar dentro del switch
        let codigoTipo = 0;

        if (a === b && b === c) {
          codigoTipo = 1; // Equilátero
        } else if (a === b || a === c || b === c) {
          codigoTipo = 2; // Isósceles
        } else {
          codigoTipo = 3; // Escaleno
        }

        let tipoTriangulo = '';

        switch (codigoTipo) {
          case 1:
            tipoTriangulo = 'Equilátero';
            break;
          case 2:
            tipoTriangulo = 'Isósceles';
            break;
          case 3:
            tipoTriangulo = 'Escaleno';
            break;
        }

        const perimetro = a + b + c;

        console.log('\n--- RESULTADOS ---');
        console.log(`Tipo de triángulo: ${tipoTriangulo}`);
        console.log(`Perímetro: ${perimetro}`);
      }

      rl.close();
    });
  });
});