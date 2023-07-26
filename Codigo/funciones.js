// Función expresada

let sumar = function (a, b) {
    return a + b
}

console.log(sumar(1, 2))

// Función declarada

function restar (numeroC, numeroD) {
    return numeroC - numeroD
}

console.log(restar(10, 5))

// Scope

let mensaje = "Hola mundo"

function saludar () {
    let mensaje = "Chao mundo"
    return mensaje
}

console.log(saludar())

// arrow

let sumar1 = (a, b) => a + b

console.log( sumar(2, 4) )

let tengoQueTrabajar = dia => {
    if (dia == "Sábado" || dia == "Domingo") {
        return "No tienes que trabajar"
    } else {
        return "Sí, tienes que trabajar"
    }
}


// callback

let sumar2 = (numero1, numero2) => numero1 + numero2
let restar2 = (numero1, numero2) => numero1 - numero2
let multiplicar2 = (numero1, numero2) => numero1 * numero2
let dividir2 = (numero1, numero2) => numero1 / numero2

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2)

console.log(calculadora(2, 4, sumar2))