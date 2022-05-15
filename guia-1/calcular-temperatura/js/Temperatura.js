/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Materia: Desarrollo de Aplicaciones Web con *
 * Software Interpretado en el Cliente *
 * Archivo: Temperatura.js *
 * Uso: Mostrar ejemplo de JavaScript No Obstructivo. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */
let gradosCelcius, gradosFar;
const texto = document.getElementById("texto");

//Validación para que solo ingrese números
while (isNaN(gradosCelcius)) {
    gradosCelcius = prompt("Grados Celcius");
}

gradosFar = (gradosCelcius * 9) / 5 + 32;
texto.innerHTML = `La temperatura en grados Fahrenheit es: ${gradosFar}º F`;

if (gradosFar <= 10) {
    document.body.style.backgroundImage = "url('./img/frio.png')";
} else if (gradosFar > 20 && gradosFar <= 50) {
    document.body.style.backgroundImage = "url('./img/fresco.jpg')";
} else if (gradosFar > 50 && gradosFar <= 100) {
    document.body.style.backgroundImage = "url('./img/calido.jpg')";
} else if (gradosFar > 100) {
    document.body.style.backgroundImage = "url('./img/caliente.jpg')";
}
