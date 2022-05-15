/* * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Materia: Desarrollo de Aplicaciones Web con *
 * Software Interpretado en el Cliente *
 * Archivo: CalculoDias.js *
 * Uso: Calcular el número de días transcurridos *
 * desde la fecha de nacimiento hasta la *
 * fecha actual del calendario. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * */
let year,
    diasdelmes,
    bisiesto = false;
const mes = prompt("Ingrese el mes: ", "");
const dias = document.getElementById("info");
//validación para que solo se ingresen números
while (isNaN(year)) {
    year = prompt("Ingrese el año: ", "");
}

if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    bisiesto = true;
}

switch (mes) {
    case "Enero":
    case "enero":
    case "Marzo":
    case "marzo":
    case "Mayo":
    case "mayo":
    case "Julio":
    case "julio":
    case "Agosto":
    case "agosto":
    case "Octubre":
    case "octubre":
    case "Diciembre":
    case "diciembre":
        diasdelmes = 31;
        break;
    case "Abril":
    case "abril":
    case "Junio":
    case "junio":
    case "Septiembre":
    case "septiembre":
    case "Noviembre":
    case "noviembre":
        diasdelmes = 30;
        break;
    case "Febrero":
    case "febrero":
        if (!bisiesto) diasdelmes = 28;
        else diasdelmes = 29;
        break;
    default:
        alert("El mes " + mes + " no existe");
        diasdelmes = 0;
}

if (bisiesto == true) {
    document.write(`<header><h1>EL año ${year} es bisiesto</h1></header>`);
    document.write(
        `<header><h1>El mes de ${mes} tiene ${diasdelmes} días</h1></header>`
    );
} else {
    document.write(`<header><h1>EL año ${year} no es bisiesto</h1></header>`);
    document.write(
        `<header><h1>El mes de ${mes} tiene ${diasdelmes} días</h1></header>`
    );
}
