const nombre = "Gloria";
const apellido = "Medina";
const sueldoActual = 20000;
const porcentajeAumento = 25;

const calculoAumento = (sueldoActual * porcentajeAumento) / 100;
const nuevoSueldo = sueldoActual + calculoAumento;

console.log("Hola, estimad@ " + nombre + " " + apellido);
console.log("En base a su sueldo actual:");
console.log("$" + sueldoActual);
console.log("Ha recibido un aumento del " + porcentajeAumento + "%:");
console.log("$" + calculoAumento);
console.log("y su nuevo sueldo es de: $" + nuevoSueldo);