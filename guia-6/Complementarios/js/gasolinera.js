const sub = document.getElementById("sub");
const gasolineraForm = document.getElementById("gasolineraForm");

setInterval(() => {
    //Redondeando el precio a mostrar a dos cifras decimales
    function formatDecimal(val, n) {
        n = n || 2;
        var str = "" + Math.round(parseFloat(val) * Math.pow(10, n));
        while (str.length <= n) {
            str = "0" + str;
        }
        var pt = str.length - n;
        return str.slice(0, pt) + "." + str.slice(pt);
    }
    function getRadioVal(form, name) {
        var radios = form.elements[name];
        var val;
        for (var i = 0, len = radios.length; i < len; i++) {
            if (radios[i].checked == true) {
                val = radios[i].value;
                break;
            }
        }
        return val;
    }
    //Obtiene el subtotal del valor a pagar de acuerdo al tipo de gasolina
    function getSizePrice(e) {
        this.form.elements["sz_tot"].value = parseFloat(this.value);
        updatePaymentTotal(this.form);
    }
    //Calcula el precio total a cancelar por la gasolina tomando en cuenta
    //los subtotales de acuerdo al tipo y la cantidad a comprar
    function updatePaymentTotal(form) {
        var sz_tot = parseFloat(form.elements["sz_tot"].value);
        var galones = parseFloat(form.elements["cantidad"].value);
        form.elements["total"].value = formatDecimal(sz_tot * galones);
    }
    (function () {
        var form = document.getElementById("gasolineraForm");
        var sz = form.elements["size"];
        for (var i = 0, len = sz.length; i < len; i++) {
            sz[i].onclick = getSizePrice;
        }
        // set sz_tot to value of selected
        form.elements["sz_tot"].value = formatDecimal(
            parseFloat(getRadioVal(form, "size"))
        );
        updatePaymentTotal(form);
    })();
}, 0);

sub.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Gracias por su compra");
    gasolineraForm.reset();
});