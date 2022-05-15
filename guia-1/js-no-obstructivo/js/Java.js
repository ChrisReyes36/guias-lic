/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Materia: Desarrollo de Aplicaciones Web con *
 * Software Interpretado en el Cliente *
 * Archivo: java.js *
 * Uso: Mostrar ejemplo de JavaScript No Obstructivo. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */
document.getElementById("btn").addEventListener("click", function () {
    while (true) {
        const num = prompt("Por favor ingrese un número:");
        /*
        !isNaN(num) = si es diferente de un string osea true
        hasta que sea insertado un numero terminará el ciclo o hasta que se escriba fin
        */
        if (!isNaN(num) && num != null && num != "") {
            alert("Ha digitado correctamente un número");
            break;
        } else {
            alert("No ha digitado un número");
            continue;
        }
    }
});
