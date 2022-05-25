'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let suma = 0; 


for(let i = 0; i < num.length; i++){
  suma += num[i]*2**(num.length - 1 - i);
}
  return suma
}

function DecimalABinario(num) {
  // tu codigo aca
return num.toString(2);

/*

let str = "";
while(num > 0) {
  let resto = num % 2;
  str = resto + str;
  num = Math.floor(num/2)
}
return str;
*/
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}

