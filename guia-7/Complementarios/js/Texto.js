var opciones = document.getElementById("opcion");
var eliminar = document.getElementById("quitarEstilo");

opciones.addEventListener("change", function () {
    if (opciones.value == "Estilo1") {
        document.getElementById("parrafo").className = "estilo1";
    } else if (opciones.value == "Estilo2") {
        document.getElementById("parrafo").className = "estilo2";
    } else if (opciones.value == "Estilo3") {
        document.getElementById("parrafo").className = "estilo3";
    } else if (opciones.value == "Nada") {
        document.getElementById("parrafo").className = "";
    }
});

eliminar.addEventListener("click", function () {
    document.getElementById("parrafo").className = "";
});
