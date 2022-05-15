/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Materia: Desarrollo de Aplicaciones Web con *
 * Software Interpretado en el Cliente *
 * Archivo: Triangulo.js *
 * Uso: Calcular el área de un triángulo. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//Validación para el ingreso de solo datos numéricos
let area, base, altura;

while (isNaN(base)) {
    base = prompt("Introduzca la base del triángulo", "");
}

while (isNaN(altura)) {
    altura = prompt("Introduzca la altura del triángulo", "");
}

area = ((base * altura) / 2).toFixed(2);

document.write(`<header><h1>El área del triángulo es: ${area}</h1></header>`);
