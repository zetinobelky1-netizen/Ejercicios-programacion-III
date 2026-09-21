const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un número del 1 al 7: ', (inputNumero) => {
  const dia = parseInt(inputNumero);

  console.log('\n--- RESULTADO ---');
  switch (dia) {
    case 1:
      console.log('Día: Lunes');
      break;
    case 2:
      console.log('Día: Martes');
      break;
    case 3:
      console.log('Día: Miércoles');
      break;
    case 4:
      console.log('Día: Jueves');
      break;
    case 5:
      console.log('Día: Viernes');
      break;
    case 6:
      console.log('Día: Sábado');
      break;
    case 7:
      console.log('Día: Domingo');
      break;
    default:
      console.log('Día no válido');
      break;
  }

  rl.close();
});