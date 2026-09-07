let producto = prompt("Ingrese el nombre del producto:");
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario:"));
let cantidad = parseInt(prompt("Ingrese la cantidad:"));

let productoMayus = producto.toUpperCase();
let primeras3 = productoMayus.slice(0, 3);
let total = (precioUnitario * cantidad).toFixed(2);

console.log("Producto en mayúsculas: " + productoMayus);
console.log("Primeras 3 letras: " + primeras3);
console.log("Precio total: $" + total);