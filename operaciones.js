let numero1 = parseInt(20);
let numero2 = parseInt(23);

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;
const modulo = numero1 % numero2;

console.log('suma: ' + suma);
console.log('resta: ' + resta);
console.log('multiplicación: ' + multiplicacion);
console.log('división: ' + division);
console.log('módulo: ' + modulo);

function mayor(numero1, numero2){
  if(numero1 > numero2){
   console.log('Numero 1 es mayor: ' + true);
  }else{
    console.log('Numero 1 es mayor: ' + false);
  }
}

function menor(numero1, numero2){
  if(numero1 < numero2){
   console.log('Numero 1 es menor: ' + true);
  }else{
    console.log('Numero 1 es menor: ' + false);
  }
}

mayor(numero1, numero2);
menor(numero1, numero2);