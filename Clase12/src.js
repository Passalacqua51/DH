function asientosDisponibles(asientosDisponibles, asientoSolicitado) {
  if (asientosDisponibles.includes(asientoSolicitado)) {
    return `Felicitaciones, el asiento número ${asientoSolicitado} está disponible.`;
  } else {
    const asientosDisponiblesCount = asientosDisponibles.length;
    return `Lo sentimos, el asiento número ${asientoSolicitado} está ocupado, pero aún quedan ${asientosDisponiblesCount} asientos disponibles.`;
  }
}
console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));

console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));