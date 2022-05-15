//Declaración de varibles
let pares = 0,
    impares = 0,
    cantidadPares = 0,
    cantidadImpares = 0,
    sumaTotal = 0,
    numMayor = 0,
    numMenor = 0;
const info1 = document.getElementById("texto1");
const info2 = document.getElementById("texto2");
const info3 = document.getElementById("texto3");
const info4 = document.getElementById("texto4");
const info5 = document.getElementById("texto5");
const info6 = document.getElementById("texto6");
const info7 = document.getElementById("texto7");
const info8 = document.getElementById("texto8");
const info9 = document.getElementById("texto9");
let numero;
//Entrada de numero
while (isNaN(numero)) {
    numero = prompt("Escriba un número:");
}
info1.innerHTML = "La cifra ingresada es: " + numero;
//Procesos
//Cantidad de cifras
info2.innerHTML = "Cantidad de cifras: " + numero.length;
//Tipo de cifras
for (let i = 0; i < numero.length; i++) {
    //Cifras pares e impares
    if (numero[i] == 0 || numero[i] % 2 == 0) {
        pares++;
        cantidadPares = cantidadPares + parseInt(numero[i]);
    } else if (numero[i] == 0 || numero[i] % 2 != 0) {
        impares++;
        cantidadImpares = cantidadImpares + parseInt(numero[i]);
    }
    //Suma de todas las cifras
    sumaTotal = sumaTotal + parseInt(numero[i]);
    //Cifra mayor
    if (numero[i] > numMayor) {
        numMayor = numero[i];
    }
    //Cifra menor
    if (numero[i] < numMenor) {
        numMenor = numero[i];
    }
}
info3.innerHTML = "Cantidad de cifras impares: " + impares;
info4.innerHTML = "Cantidad de cifras pares: " + pares;
info5.innerHTML = "Suma de cifras impares: " + cantidadImpares;
info6.innerHTML = "Suma de cifras pares: " + cantidadPares;
info7.innerHTML = "Suma de todas las cifras: " + sumaTotal;
info8.innerHTML = "Cifra mayor: " + numMayor;
info9.innerHTML = "Cifra menor: " + numMenor;
