const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el primer número: ', (inputNum1) => {
  rl.question('Ingrese el segundo número: ', (inputNum2) => {
    rl.question('Ingrese el operador (+, -, *, /): ', (operador) => {
      
      const num1 = parseFloat(inputNum1);
      const num2 = parseFloat(inputNum2);
      let resultado;
      let valido = true;

      switch (operador.trim()) {
        case '+':
          resultado = num1 + num2;
          break;
        case '-':
          resultado = num1 - num2;
          break;
        case '*':
          resultado = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            console.log('\nError: No se puede dividir entre cero.');
            valido = false;
          } else {
            resultado = num1 / num2;
          }
          break;
        default:
          console.log('\nError: Operador no válido.');
          valido = false;
          break;
      }

      if (valido) {
        console.log(`\n--- RESULTADO ---`);
        console.log(`${num1} ${operador} ${num2} = ${resultado}`);
      }

      rl.close();
    });
  });
});