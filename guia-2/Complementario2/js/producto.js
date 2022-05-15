let precio = [];
let nombre = [];
let i, j;
let producto = 0,
    nombrePro,
    montoPro,
    opc;
let totalPro = 0;
let info = document.getElementById("contenido");
do {
    producto++;
    nombrePro = prompt("Ingrese el nombre del producto:");
    montoPro = prompt("Ingrese el precio del producto:");
    opc = prompt("¿Desea ingresar otro producto? s/n");
    if (nombrePro != 0) {
        nombre.push(nombrePro);
    }
    if (montoPro != 0) {
        precio.push(montoPro);
    }
} while (opc != "n");
let inventario =
    '<table id="inventario">\n<tr>\n<th>\nProducto\n</th>\n<th class="ojo">Precio\n</th>\n</tr>\n';
for (i = 0; i < producto; i++) {
    if (i % 2 == 1) {
        inventario +=
            '<tr>\n<td class="alt">\n' +
            nombre[i] +
            '</td>\n<td class="alt nota">\n' +
            "$" +
            precio[i] +
            "\n</td>\n</tr>\n";
    } else {
        inventario +=
            '<tr>\n<td class="alt">\n' +
            nombre[i] +
            '</td>\n<td class="alt nota">\n' +
            "$" +
            precio[i] +
            "\n</td>\n</tr>\n";
    }
}
for (let i = 0; i < precio.length; i++) {
    totalPro += precio[i] * 1;
}
inventario +=
    '<tr>\n<th>\nEl total vendido\n</th>\n<th class="spec nota">\n' +
    "$" +
    totalPro +
    "</th></tr></table>";
info.innerHTML = inventario;
