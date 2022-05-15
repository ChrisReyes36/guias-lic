/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Materia: Desarrollo de Aplicaciones Web con *
 * Software Interpretado en el Cliente *
 * Archivo: Circulo.js *
 * Uso: Calcular el área de un círculo. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */
const PI = 3.1415926535;
let area, radio;

while (isNaN(radio)) {
    radio = prompt("Introduzca el radio del círculo:", "");
}

area = (PI * Math.pow(radio, 2)).toFixed(2);

document.write(`<header><h1>El área del círculo es: ${area}</h1></header>`);
