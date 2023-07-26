function calcularTotalHamburguesa(tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let precioBase;
    switch (tipo) {
      case 'Carne a la parrilla':
        precioBase = 1800;
        break;
      case 'Pollo':
        precioBase = 1500;
        break;
      case 'Vegetariana':
        precioBase = 1200;
        break;
      default:
        return 'Tipo de hamburguesa no válido';
    }
    
    let total = precioBase;
    
    if (jamon) {
      total += 30;
    }
    if (queso) {
      total += 25;
    }
    if (salsa) {
      total += 5;
    }
    if (mayonesa) {
      total += 5;
    }
    if (mostaza) {
      total += 5;
    }
    if (tomate) {
      total += 15;
    }
    if (lechuga) {
      total += 10;
    }
    if (cebolla) {
      total += 10;
    }
    
    return total;
  }  

  function mostrarMensaje(nombre, apellido, tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla) {
    const total = calcularTotalHamburguesa(tipo, jamon, queso, salsa, mayonesa, mostaza, tomate, lechuga, cebolla);
    const mensaje = `Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${total}`;
    console.log(mensaje);
  }