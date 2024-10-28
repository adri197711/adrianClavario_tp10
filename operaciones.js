const numero1 = parseInt(20);
const numero2 = parseInt(23);

console.log('suma: ' + (numero1 + numero2));
console.log('resta: ' + (numero1 - numero2));
console.log('multiplicación: ' + numero1 * numero2);
console.log('división: ' + numero1 / numero2);
console.log('módulo: ' + numero1 % numero2);

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