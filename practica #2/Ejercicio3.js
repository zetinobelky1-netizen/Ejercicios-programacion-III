let fecha = new Date();
let nacimiento = prompt("Ingrese su año de nacimiento:");
let anio = fecha.getFullYear();

let edad = anio - nacimiento;

console.log("Tu edad aproximada es: " + edad + " años.");