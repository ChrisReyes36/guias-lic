var datos = [];
var chart = document.getElementById("chart");
var topChart = document.getElementById("topchart");
var form = document.getElementById("form");

function generar_chart() {
    var maxvalue = datos[0] * 1;
    for (var i = 0; i < datos.length; i++) {
        if (maxvalue < datos[i] * 1) {
            maxvalue = datos[i] * 1;
        }
    }
    maxvalue = Math.round(maxvalue * 1 + 1);
    topChart.innerHTML = "";
    for (var i = 0; i < maxvalue; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.innerHTML = i + 1;
        topChart.appendChild(cell);
    }
    chart.innerHTML = "";
    for (var i = 0; i < datos.length; i++) {
        let bar = document.createElement("div");
        bar.className = "bar";
        bar.style.width = (datos[i] / maxvalue) * 100 + "%";
        bar.innerHTML = datos[i] + "%";
        chart.appendChild(bar);
    }
}

function obtenerdatos(event) {
    event.preventDefault();
    datos.push(this.cantidad.value);
    generar_chart();
    document.getElementById("cantidad").value = "";
    document.getElementById("cantidad").focus();
}

form.addEventListener("submit", obtenerdatos);
