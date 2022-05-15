"use strict";

var nombres = document.getElementById("nombre");
var apellidos = document.getElementById("apellido");
var apellidos2 = document.getElementById("apellido2");
var correos = document.getElementById("correo");
var contraseñas = document.getElementById("contraseña");
var contraseñas2 = document.getElementById("contraseña2");
var nacimientos = document.getElementById("nacimiento");
var resultado = document.getElementById("resultado");
var formulario = document.querySelector("div.form");
var contenido = "";
var aleatorio = Math.floor(Math.random() * 9999) + 1000;

function datos(nombre, apellido, apellido2, correo, contraseña, contraseña2, nacimiento) {
  this.nombre = nombre.value;
  this.apellido = apellido.value;
  this.apellido2 = apellido2.value;
  this.correo = correo.value;
  this.contraseña = contraseña.value;
  this.contraseña2 = contraseña2;
  this.nacimiento = nacimiento;

  this.pasar = function () {
    if (this.nombre === "" || this.apellido2 === "" || this.correo === "" || this.contraseña === "" || this.contraseña2 === "" || this.nacimiento === "") {
      alert("Rellene todos los campos correctamente");
    } else {
      if (apellido === "") {
        this.mostrarResult = function () {
          contenido += "<table class=\"bookinfo\">";
          contenido += "<thead>\n\t<tr>\n\t\t";
          contenido += "<th>Nombre</th>\n\t\t";
          contenido += "<th>Primer apellido</th>\n\t\t";
          contenido += "<th>Segundo apellido</th>\n\t\t";
          contenido += "<th>correo</th>\n\t\t";
          contenido += "<th>Id de usuario</th>\n\t\t";
          contenido += "</tr>\n\t</thead>\n";
          contenido += "<tbody>\n\t";
          contenido += "<tr>\n\t\t";
          contenido += "<td>" + this.nombre + "</td>\n\t\t";
          contenido += "<td>" + this.apellido2 + "</td>\n\t\t";
          contenido += "<td></td>\n\t\t";
          contenido += "<td>" + this.correo + "</td>\n\t\t";
          contenido += "<td>" + this.apellido2.substr(0, 1) + this.apellido2.substr(0, 1) + 2020 + aleatorio + "</td>\n\t\t";
          contenido += "</tr></tbody>\n";
          contenido += "</table>\n";
          formulario.style.display = "none";
          resultado.innerHTML = contenido;
        };
      } else {
        this.mostrarResult = function () {
          contenido += "<table class=\"bookinfo\">";
          contenido += "<thead>\n\t<tr>\n\t\t";
          contenido += "<th>Nombre</th>\n\t\t";
          contenido += "<th>Primer apellido</th>\n\t\t";
          contenido += "<th>Segundo apellido</th>\n\t\t";
          contenido += "<th>correo</th>\n\t\t";
          contenido += "<th>Id de usuario</th>\n\t\t";
          contenido += "</tr>\n\t</thead>\n";
          contenido += "<tbody>\n\t";
          contenido += "<tr>\n\t\t";
          contenido += "<td>" + this.nombre + "</td>\n\t\t";
          contenido += "<td>" + this.apellido2 + "</td>\n\t\t";
          contenido += "<td>" + this.apellido + "</td>\n\t\t";
          contenido += "<td>" + this.correo + "</td>\n\t\t";
          contenido += "<td>" + this.apellido2.substr(0, 1) + this.apellido.substr(0, 1) + 2020 + aleatorio + "</td>\n\t\t";
          contenido += "</tr></tbody>\n";
          contenido += "</table>\n";
          formulario.style.display = "none";
          resultado.innerHTML = contenido;
        };
      }
    }
  };
}

btnBoton.addEventListener("click", function () {
  var r1 = new datos(nombres, apellidos, apellidos2, correos, contraseñas, contraseñas2, nacimientos);
  r1.pasar();
  r1.mostrarResult();
});