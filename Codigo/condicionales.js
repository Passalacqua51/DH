// if

let clima = "Soleado"
let dia = "Viernes"

if (clima == "Soleado" && dia == "Domingo"){
    console.log("lindo dia para pasear")
}

//  else o else if

if (clima == "Soleado" && dia == "Domingo"){
    console.log("lindo dia para pasear de todas formas")
}else if (clima == "Soleado" && dia == "Lunes"){
    console.log("lindo dia para pasear de todas formas")
}else{
    console.log("Mejor me quedo en casa practicando JS")
}

// if ternario

let fruta = "Pera"

let resultado = fruta == "Manzana"? "Buena fruta": "Quería manzana"
console.log(resultado)

// switch

let semaforo = "Verde"

switch(semaforo){
    case "Verde":
        console.log("Puedo cruzar")
        break;
    case "Amarillo":
        console.log("Precaución")
        break;
    case "Rojo":
        console.log("No puedo cruzar")
        break;
    default:
        console.log("No funciona el semaforo")
}