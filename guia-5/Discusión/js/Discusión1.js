var formulario = document.querySelector("div.formulario");
var numero = document.getElementById("num1");
var elevacion = document.getElementById("num2");
var btnCalcular = document.getElementById("calcular");
var resultado = document.getElementById("form");
var contenedor = "";

btnCalcular.addEventListener("click", function () {
    if (numero.value.length == 0 || elevacion.value.length == 0) {
        //Validación para que no queden los campos vacíos
        alert("Debe llenar el campo");
        return false;
    } else if (isNaN(numero.value) || isNaN(elevacion.value)) {
        //Validación para que solo se ingresen números
        alert("Debe ingresar un número");
        return false;
    } else {
        var nuevo = new CalcularPotencia(numero, elevacion); //Realización del cálculo
        nuevo.Elevacion(); //Llamado de la función
        nuevo.Obtener(); //Llamado de la función
        numero.value = ""; //Vaciar el input
        elevacion.value = ""; //Vaciar el input
    }
});

function CalcularPotencia(n, potencia) {
    this.n = n.value;
    this.potencia = potencia.value;
    this.total;
    this.Elevacion = function () {
        this.total = Math.pow(this.n, this.potencia); //Elevaciónn a la potencia
        this.Obtener = function () {
            //Demostración de los datos ingresados y el resultado obtenido
            contenedor += "<p>El número ingresado es:  " + this.n + "</p>";
            contenedor +=
                "<p>La potencia a elevar es: " + this.potencia + "</p>";
            contenedor += "<p>El total es: " + this.total + "</p>";
            contenedor += "<p>-------------------------------------</p>";
            resultado.innerHTML = contenedor;
        };
    };
}
