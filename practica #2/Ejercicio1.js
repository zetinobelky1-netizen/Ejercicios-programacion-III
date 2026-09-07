let nombre = prompt("Ingrese su nombre completo:");

let nombreMayus = nombre.toUpperCase();
let primeras4 = nombreMayus.slice(0, 4);
let nombreMin = nombre.toLowerCase();

console.log("Nombre en mayúsculas: " + nombreMayus);
console.log("Primeras 4 letras: " + primeras4);
console.log("Nombre en minúsculas: " + nombreMin);