//Micro desafío 1

const datosSocio = {
  nombre : "Adrian",
  apellido : "Clavario",
  edad : 47,
  telefono : 1531450597,
  socio : true,
  fechaPartido : new Date(2024, 12, 3, 18),
  numeroSilla : 11,
  precioBoleto : 18.75
}
console.log(`Nombre: ${datosSocio.nombre}, Tipo de dato: ${typeof(datosSocio.nombre)}`);
console.log(`Apellido: ${datosSocio.apellido}, Tipo de dato: ${typeof(datosSocio.apellido)}`);
console.log(`Edad: ${datosSocio.edad}, Tipo de dato: ${typeof(datosSocio.edad)}`);
console.log(`Telefono: ${datosSocio.telefono}, Tipo de dato: ${typeof(datosSocio.telefono)}`);
console.log(`¿Es socio?: ${datosSocio.socio}, Tipo de dato: ${typeof(datosSocio.socio)}`);
console.log(`Fecha y hora: ${datosSocio.fechaPartido}, Tipo de dato: ${typeof(datosSocio.fechaPartido)}`);
console.log(`Numero de silla: ${datosSocio.numeroSilla}, Tipo de dato: ${typeof(datosSocio.numeroSilla)}`);
console.log(`Precio del boleto: ${datosSocio.precioBoleto}, Tipo de dato: ${typeof(datosSocio.precioBoleto)}`);

