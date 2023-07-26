// array

let series = ["Fresh Prince", "Good Doctor", "Simpsons" ]
let edades = [19, 20, 21, 22, 23, 24]
let valoresDeVerdad = [true, false, true, false, true, false]
let variados = ["Nicolás", 21, true, edades]

// dato concreto dentro de un array

console.log(edades)

// array dentro de un array

console.log(variados[3][1])

// array.push() Agrega elementos al fianl del array

let notas = [10, 8, 7, 6, 8, 3]

notas.push(1)
notas.push(10)


// array.pop() Quita el ultimo elemento del array

let elUltimo = notas.pop()

console.log(elUltimo)

// array.shift() Quita el primer elemento del array

notas.shift()

// array.unshift() Agrega elementos al inicio del array

notas.unshift(1)

// indexOf() Muestra la posición del elemento en el array

let posicionDelOcho = notas.indexOf(8)

console.log(posicionDelOcho)

// lastIndexOf() Muestra la posición del ultimo elemento del array

let UltimaOcho = notas.lastIndexOf(8)

console.log(UltimaOcho)

// array.join(, - _) Junta los elementos del array en una cadena

let resultadoJunto = notas.join(", ")

console.log(resultadoJunto)

// replace() Reemplaza los elementos de un array con un nuevo valor

//notas.replace(8, 10)

// map()

let notas1 = [10, 4, 5, 8, 9, 7]

let notasHastaEl100 = notas1.map(function(numero){
    return numero * 10
})

// filter()

let notasAprobadas = notas1.filter(function(numero){
    return numero >= 7
})

console.log(notasAprobadas)

// reduce()

let sumaNotas = notas1.reduce(function(estado, numero){
    return estado + numero
})

// forEach()

notas1.forEach(function(valor, indice){
    console.log("En la posicion " + indice + " tengo que valor " + valor)
})