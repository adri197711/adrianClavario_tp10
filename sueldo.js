//Micro desafío 2

const trabajador = {
  nombre: 'Adrian',
  apellido: 'Clavario',
  sueldoActual: 20000,
  porcentajeAumento:25
}

const calculoAumento = (trabajador.sueldoActual * trabajador.porcentajeAumento)/100;

 const nuevoSueldo = trabajador.sueldoActual + calculoAumento;

console.log(
  `  Hola, estimad@ ${trabajador.nombre} ${trabajador.apellido}
  En base a su sueldo actual: $${trabajador.sueldoActual}
  Ha recibido un aumento del ${trabajador.porcentajeAumento}%: $${calculoAumento}
  y su nuevo sueldo es de: $${nuevoSueldo}`);