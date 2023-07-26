function calcularValorHora(salarioMensual, diasTrabajados, horasDiarias) {
    let horasMensuales = diasTrabajados * horasDiarias;
    let valorHora = salarioMensual / horasMensuales;
    return valorHora.toFixed(2);
  }  
  
let valorHora = calcularValorHora(2000, 22, 8);
console.log("El valor de una hora de trabajo es:", valorHora);