const operacionesBancarias = [1000, -500, 600, -200, -100];

function calcularSaldo(operaciones) {
  let saldoDepositos = 0;
  let saldoRetiros = 0;

  operaciones.forEach((operacion) => {
    if (operacion > 0) {
      saldoDepositos += operacion;
    } else {
      saldoRetiros += operacion;
    }
  });

  const saldoActual = saldoDepositos + saldoRetiros;
  return [saldoDepositos, saldoRetiros, saldoActual];
}

function obtenerSaldoCliente(nombre, apellido, operaciones) {
  const [saldoDepositos, saldoRetiros, saldoActual] = calcularSaldo(operaciones);
  return `Sr./Sra. ${nombre} ${apellido}, su saldo total de depósitos es de ${saldoDepositos}, su saldo actual de retiros es de ${saldoRetiros} y su saldo actual es de ${saldoActual}.`;
}

console.log(obtenerSaldoCliente("Juan", "Pérez", operacionesBancarias));