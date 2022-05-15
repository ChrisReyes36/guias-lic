"use strict";

var num1 = document.getElementById("base");
var num2 = document.getElementById("potencia");
var btnBoton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var contenido = "";
var formulario = document.querySelector("div.form");

function Numero(base, potencia) {
  this.base = base.value;
  this.potencia = potencia.value;
  this.total;

  this.calcular = function () {
    this.total = Math.pow(this.base, this.potencia);
  };

  this.mostrarResult = function () {
    contenido += "<table class=\"bookinfo\">";
    contenido += "<thead>\n\t<tr>\n\t\t";
    contenido += "<th>Base</th>\n\t\t";
    contenido += "<th>Potencia</th>\n\t\t";
    contenido += "<th>Resultado</th>\n\t\t";
    contenido += "</tr>\n\t</thead>\n";
    contenido += "<tbody>\n\t";
    contenido += "<tr>\n\t\t";
    contenido += "<td>" + this.base + "</td>\n\t\t";
    contenido += "<td>" + this.potencia + "</td>\n\t\t";
    contenido += "<td>" + this.total + "</td>\n\t\t";
    contenido += "</tr></tbody>\n";
    contenido += "</table>\n";
    formulario.style.display = "none";
    resultado.innerHTML = contenido;
  };
}

btnBoton.addEventListener("click", function () {
  var r1 = new Numero(num1, num2);
  r1.calcular();
  r1.mostrarResult();
});