const arreglo = ["Primer año", " Segundo año", " Tercer año"];
const btnPush = document.getElementById("pushProp");
const btnPop = document.getElementById("popProp");

arr.innerHTML = "Arreglo: " + arreglo;

btnPush.addEventListener("click", function () {
    const nuevo = prompt("Nuevo elemento del array usando POP: ");
    arreglo.push(nuevo);
    arr.innerHTML = "Arreglo: " + arreglo;
});

btnPop.addEventListener("click", function () {
    arreglo.pop();
    arr.innerHTML = "Arreglo: " + arreglo;
});
