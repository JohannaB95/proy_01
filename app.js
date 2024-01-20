/*Se declara una varibale de tipo constante que se llama functions y que almacena los datos que con require 
se están importando desde otro módulo, entre paréntesis se indica el id del módulo.*/
const functions = require('./functions.js') 

//Se imprime en la consola el listado de funciones que se van a ejecutar.
console.log(functions); 

//Se imprime en la consola el resultado de la suma entre 5 y 3
console.log(functions.add(5,3)); 
//Se imprime en la consola el resultado de la resta entre 2 y 8
console.log(functions.substract(2,8)); 
//Se imprime en la consola el resultado de la multiplicación entre 2 y 8
console.log(functions.multiply(2,8));
//Se imprime en la consola el resultado de la división entre 2 y 0.9
console.log(functions.divide(2,0.9)); 