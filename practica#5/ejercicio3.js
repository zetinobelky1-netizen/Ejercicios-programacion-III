const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('--- TIPOS DE VEHÍCULO ---');
console.log('1 = Moto\n2 = Auto\n3 = Camioneta\n4 = Bus');

rl.question('Seleccione el tipo de vehículo (1-4): ', (opcion) => {
  rl.question('Ingrese la cantidad de horas estacionado: ', (inputHoras) => {
    
    const tipoVehiculo = parseInt(opcion);
    const horas = parseFloat(inputHoras);

    let tarifaPorHora = 0;
    let nombreVehiculo = '';
    let opcionValida = true;

    // Asignación de tarifa según vehículo mediante Switch
    switch (tipoVehiculo) {
      case 1:
        nombreVehiculo = 'Moto';
        tarifaPorHora = 1.00;
        break;
      case 2:
        nombreVehiculo = 'Auto';
        tarifaPorHora = 2.00;
        break;
      case 3:
        nombreVehiculo = 'Camioneta';
        tarifaPorHora = 3.00;
        break;
      case 4:
        nombreVehiculo = 'Bus';
        tarifaPorHora = 5.00;
        break;
      default:
        opcionValida = false;
        break;
    }

    if (!opcionValida) {
      console.log('\nError: El tipo de vehículo ingresado no es válido.');
    } else {
      const subtotal = tarifaPorHora * horas;
      let descuento = 0;

      // Descuento del 20% si estuvo más de 5 horas
      if (horas > 5) {
        descuento = subtotal * 0.20;
      }

      const total = subtotal - descuento;

      console.log('\n--- FACTURA DE ESTACIONAMIENTO ---');
      console.log(`Tipo de vehículo: ${nombreVehiculo}`);
      console.log(`Horas estacionado: ${horas}`);
      console.log(`Tarifa por hora: $${tarifaPorHora.toFixed(2)}`);
      console.log(`Subtotal: $${subtotal.toFixed(2)}`);
      console.log(`Descuento (20%): $${descuento.toFixed(2)}`);
      console.log(`Total a pagar: $${total.toFixed(2)}`);
    }

    rl.close();
  });
});