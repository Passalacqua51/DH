let electrodomesticos = ["refrigerador", "lavadora", "microondas", "licuadora", "aspiradora", "cafetera"]

let random1 = electrodomesticos[Math.floor(Math.random() * electrodomesticos.length)]
let random2 = electrodomesticos[Math.floor(Math.random() * electrodomesticos.length)]
console.log("Acceso aleatorio:")
console.log(random1)
console.log(random2)

let primerElemento = electrodomesticos.shift()
electrodomesticos.push(primerElemento)
console.log("Primer elemento extraído y agregado al final:")
console.log(electrodomesticos)

electrodomesticos.push("television", "tostadora")
console.log("Se agregaron dos productos al final: ")
console.log(electrodomesticos)

console.log(electrodomesticos.length)

let productoBuscado = ("lavadora")
if (electrodomesticos.includes(productoBuscado)){
    console.log("El producto " + productoBuscado + " se encuentra en la lista")
} else {
    console.log("El producto " + productoBuscado + " no existe")
}

let productosJuntos = electrodomesticos.join(" ")

console.log("Array de productos: " + productosJuntos)

console.log(productosJuntos.length)

let cambioProducto = productosJuntos.replace("lavadora", "hervidor")
console.log(cambioProducto)

let electrodomesticosArrayNuevo = cambioProducto.split(" ");
console.log("Nueva array a partir de la cadena de texto, separado por comas:");
console.log(electrodomesticosArrayNuevo.join(", "));
