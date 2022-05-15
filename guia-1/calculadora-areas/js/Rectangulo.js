/* * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Materia: Desarrollo de Aplicaciones Web con *
 * Software Interpretado en el Cliente *
 * Archivo: Rectangulo.js *
 * Uso: Calcular el área de un rectángulo. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * */
//Validación para el ingreso de solo datos numéricos
let area, base, altura;

while (isNaN(base)) {
    base = prompt("Introduzca la base del rectángulo", "");
}

while (isNaN(altura)) {
    altura = prompt("Introduzca la altura del rectángulo", "");
}

area = base * altura;

document.write(`<header><h1>El área del rectángulo es: ${area}</h1></header>`);
