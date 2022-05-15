var input = document.getElementById("data");
var type = document.getElementById("op");
var outtype = document.getElementById("type");
var output = document.getElementById("out");

function validar() {
    var texto = input.value.trim();
    var tipo = type.value;
    var regex = "";
    switch (tipo) {
        case "1":
            regex =
                /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            outtype.innerHTML = " IPV4";
            break;
        case "2":
            regex =
                /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            outtype.innerHTML = " URL";
            break;
        case "3":
            regex =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            outtype.innerHTML = " Correo";
            break;
    }
    if (texto != "") {
        if (regex.test(texto)) {
            output.classList = "correct";
            output.innerHTML = "Correcto!";
        } else {
            output.classList = "error";
            output.innerHTML = "Incorrecto!";
        }
    } else {
        output.classList = "";
        output.innerHTML = "";
    }
}
input.addEventListener("keyup", validar);
type.addEventListener("change", validar);
