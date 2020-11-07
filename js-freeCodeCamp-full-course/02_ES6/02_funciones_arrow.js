/* Utilice funciones arrow para escribir funciones anónimas concisas:
- En JavaScript, a menudo no necesitamos nombrar nuestras funciones, especialmente cuando pasamos una función como argumento a otra función. En cambio, creamos funciones de una línea. No necesitamos nombrar estas funciones porque no las reutilizamos en ningún otro lugar.

Para lograrlo, generalmente usamos esta sintaxis: */

const myFunc = function() {
    const myVar = "value";
    return myVar;
  }

// ES6 (EcmaScript 6) nos proporciona la facilidad de no tener que escribir funciones anónimas de esta manera. En su lugar, puede utilizar la sintaxis de la arrow function:

const myFunc2 = () => {
    const myVar = "value";
    return myVar;
  }

// Cuando no hay un cuerpo de función y solo un valor de retorno, la sintaxis de la función de flecha le permite omitir el uso de la palabra return, así como los corchetes que rodean el código. Esto ayuda a simplificar funciones más pequeñas en declaraciones de una línea:

const myFunc3 = () => "value"; // This code will still return value by default.

/* Ejercicio: Vuelva a escribir la función asignada a la variable magic que devuelve una new Date() para usar la sintaxis de la función de flecha. Además, asegúrese de que no haya nada definido con la palabra clave var.

Pasamos de esto:
var magic = function() {
  "use strict";
  return new Date();
};

A esto: */

const magic = () => new Date();

/* Escribir Arrow Functions con parametros:
- Al igual que una función normal, puede pasar argumentos a una arrow. */

// multiplica el valor de entrada por 2 y lo retorna
const doubler = (item) => item * 2;

/*Si una función de flecha tiene un solo argumento, se pueden omitir los paréntesis que encierran el parametro.*/

// la misma función sin los parentesis
const doubler2 = item => item * 2;

/* es posible pasar más de un parametro a una funcion arrow. */

// multiplica el valor del primer input por el segundo y devuelve el resultado
const multiplier = (item, multi) => item * multi;


/*Ejercicio: reescribe la función myConcat que agrega el contenido de arr2 a arr1 para que la función use la sintaxis de función de flecha:

 var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
}; 

Respuesta: */ 

const myConcat = (arr1, arr2) => arr1.concat(arr2)
