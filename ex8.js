/**
 * En CSS, si un color es puro como rgb(255, 0, 0), podemos substituirlo por la palabra "red".
 * 
 * Implementa una función para detectar si un color en notación RGB es puro.
 * La función recibe un objeto con propiedades "r", "g" y "b" (valores entre 0 y 255).
 * Si alguno de los valores es 255, devuelve "red", "green" o "blue" según corresponda, indicando que es un color puro.
 * Si ninguno es 255, devuelve "" (un string vacío).
 */

function detectPureColor(rgb) {
    let { r, g, b } = rgb;
    if( (r === 255 && g === 255) || (r === 255 && b === 255) || (g === 255 && b === 255)){return "no es puro"};
    if( r === 255){return "red"};
    if( g === 255){return "green"};
    if(b === 255) {return "blue"}
    
    else {return ""}}


console.log(detectPureColor({ r: 255, g: 0, b: 0 })); // "red"
console.log(detectPureColor({ r: 0, g: 255, b: 0 })); // "green"
console.log(detectPureColor({ r: 0, g: 0, b: 255 })); // "blue"
console.log(detectPureColor({ r: 255, g: 255, b: 0 })); // "" (no hay un color puro, porque red es 255, pero green también es 255)
console.log(detectPureColor({ r: 100, g: 200, b: 50 })); // "" (ningún color tiene el valor máximo de 255)
