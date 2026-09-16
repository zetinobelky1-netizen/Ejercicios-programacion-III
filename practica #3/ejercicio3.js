const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el monto de compra: $', (inputMonto) => {
    // Declarar variables necesarias
    let montoOriginal = parseFloat(inputMonto);
    let descuentoPorcentaje = 0;

    // Aplicar descuento según el monto usando IF y ELSE IF
    if (montoOriginal > 100) {
        descuentoPorcentaje = 0.15; // 15% de descuento
    } else if (montoOriginal > 50) {
        descuentoPorcentaje = 0.10; // 10% de descuento
    } else {
        descuentoPorcentaje = 0.0;  // Sin descuento
    }

    // Calcular montos finales
    let montoDescuento = montoOriginal * descuentoPorcentaje;
    let totalPagar = montoOriginal - montoDescuento;

    // Mostrar resultados claros con 2 decimales
    console.log(`Monto original: $${montoOriginal.toFixed(2)}`);
    console.log(`Descuento aplicado: $${montoDescuento.toFixed(2)}`);
    console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);

    rl.close();
});