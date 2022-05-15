function generarTabla() {
    var col = document.getElementById("cols").value;
    var filas = document.getElementById("rows").value;
    var tabla = '<table border="0">';
    if (col > 20) {
        alert("Ha superado el máximo de 20 columnas");
        document.getElementById("cols").value = "";
        document.getElementById("cols").focus();
    } else if (filas > 20) {
        alert("Ha superado el máximo de 20 filas");
        document.getElementById("rows").value = "";
        document.getElementById("rows").focus();
    } else if (col < 0) {
        alert("Solo se permiten valores positivos");
        document.getElementById("cols").value = "";
        document.getElementById("cols").focus();
    } else if (filas < 0) {
        alert("Solo se permiten valores positivos");
        document.getElementById("rows").value = "";
        document.getElementById("rows").focus();
    } else if (col.length == 0) {
        alert("Debe llenar el campo de columnas");
        document.getElementById("cols").focus();
    } else if (filas.length == 0) {
        alert("Debe llenar el campo de filas");
        document.getElementById("rows").focus();
    } else {
        tabla += "<tr><td></td>";
        for (j = 0; j < col; j++) {
            tabla += "<td>" + (j + 1) + "</td>";
        }
        tabla += "</tr>";

        for (i = 0; i < filas; i++) {
            tabla += "<tr>";
            tabla += "<td>" + (i + 1) + "</td>";
            for (j = 0; j < col; j++) {
                tabla += "<td>" + '<input type="text" size="1" readonly>' + "</td>";
            }
            tabla += "</tr>";
        }
        tabla += "</table>";
        document.getElementById("resultado").innerHTML = tabla;
        document.getElementById("cols").value = "";
        document.getElementById("cols").focus();
        document.getElementById("rows").value = "";
    }
}

function limpiarTabla() {
    document.getElementById("resultado").innerHTML = "";
}
