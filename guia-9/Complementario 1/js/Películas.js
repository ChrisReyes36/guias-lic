var movie1 = document.getElementById("Hobbs&Shaw");
var movie2 = document.getElementById("Avengers");
var movie3 = document.getElementById("Lunes");
var movie4 = document.getElementById("Aqua");
var movie5 = document.getElementById("Mega");
var movie6 = document.getElementById("Crepu");
var descripcion = document.getElementById("descripcion");
function init() {
    function ajaxRequest() {
        var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
        if (window.ActiveXObject) {
            for (var i = 0; i < activexmodes.length; i++) {
                try {
                    return new ActiveXObject(activexmodes[i]);
                } catch (e) {
                    return false;
                }
            }
        } else if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else {
            return false;
        }
    }
    var request = new ajaxRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (
                request.status == 200 ||
                window.location.href.indexOf("http") == -1
            ) {
                if (movie1.addEventListener) {
                    movie1.addEventListener(
                        "click",
                        function () {
                            var jsondata = JSON.parse(request.responseText);
                            var rssentries = jsondata.cartelera;
                            var output = "<ul>";
                            var i = 0;
                            output +=
                                "<h3>" + rssentries[i].nombreMovie1 + "</h3>";
                            output +=
                                "<p>Protagonistas: " +
                                rssentries[i].protagonistaMovie1 +
                                "</p>";
                            output +=
                                "<p>Sinopsis: " +
                                rssentries[i].sinopsisMovie1 +
                                "</p>";
                            output +=
                                "<p>Director: " +
                                rssentries[i].directorMovie1 +
                                "</p>";
                            output += "</ul>";
                            descripcion.innerHTML = output;
                            return false;
                        },
                        false
                    );
                }
                if (movie2.addEventListener) {
                    movie2.addEventListener(
                        "click",
                        function () {
                            var jsondata = JSON.parse(request.responseText);
                            var rssentries = jsondata.cartelera;
                            var output = "<ul>";
                            var i = 1;
                            output +=
                                "<h3>" + rssentries[i].nombreMovie2 + "</h3>";
                            output +=
                                "<p>Protagonistas: " +
                                rssentries[i].protagonistaMovie2 +
                                "</p>";
                            output +=
                                "<p>Sinopsis: " +
                                rssentries[i].sinopsisMovie2 +
                                "</p>";
                            output +=
                                "<p>Directores: " +
                                rssentries[i].directorMovie2 +
                                "</p>";
                            output += "</ul>";
                            descripcion.innerHTML = output;
                            return false;
                        },
                        false
                    );
                }
                if (movie3.addEventListener) {
                    movie3.addEventListener(
                        "click",
                        function () {
                            var jsondata = JSON.parse(request.responseText);
                            var rssentries = jsondata.cartelera;
                            var output = "<ul>";
                            var i = 2;
                            output +=
                                "<h3>" + rssentries[i].nombreMovie3 + "</h3>";
                            output +=
                                "<p>Protagonistas: " +
                                rssentries[i].protagonistaMovie3 +
                                "</p>";
                            output +=
                                "<p>Sinopsis: " +
                                rssentries[i].sinopsisMovie3 +
                                "</p>";
                            output +=
                                "<p>Director: " +
                                rssentries[i].directorMovie3 +
                                "</p>";
                            output += "</ul>";
                            descripcion.innerHTML = output;
                            return false;
                        },
                        false
                    );
                }
                if (movie4.addEventListener) {
                    movie4.addEventListener(
                        "click",
                        function () {
                            var jsondata = JSON.parse(request.responseText);
                            var rssentries = jsondata.cartelera;
                            var output = "<ul>";
                            var i = 3;
                            output +=
                                "<h3>" + rssentries[i].nombreMovie4 + "</h3>";
                            output +=
                                "<p>Protagonistas: " +
                                rssentries[i].protagonistaMovie4 +
                                "</p>";
                            output +=
                                "<p>Sinopsis: " +
                                rssentries[i].sinopsisMovie4 +
                                "</p>";
                            output +=
                                "<p>Director: " +
                                rssentries[i].directorMovie4 +
                                "</p>";
                            output += "</ul>";
                            descripcion.innerHTML = output;
                            return false;
                        },
                        false
                    );
                }
                if (movie5.addEventListener) {
                    movie5.addEventListener(
                        "click",
                        function () {
                            var jsondata = JSON.parse(request.responseText);
                            var rssentries = jsondata.cartelera;
                            var output = "<ul>";
                            var i = 4;
                            output +=
                                "<h3>" + rssentries[i].nombreMovie5 + "</h3>";
                            output +=
                                "<p>Protagonistas: " +
                                rssentries[i].protagonistaMovie5 +
                                "</p>";
                            output +=
                                "<p>Sinopsis: " +
                                rssentries[i].sinopsisMovie5 +
                                "</p>";
                            output +=
                                "<p>Director: " +
                                rssentries[i].directorMovie5 +
                                "</p>";
                            output += "</ul>";
                            descripcion.innerHTML = output;
                            return false;
                        },
                        false
                    );
                }
                if (movie6.addEventListener) {
                    movie6.addEventListener(
                        "click",
                        function () {
                            var jsondata = JSON.parse(request.responseText);
                            var rssentries = jsondata.cartelera;
                            var output = "<ul >";
                            var i = 5;
                            output +=
                                "<h3>" + rssentries[i].nombreMovie6 + "</h3>";
                            output +=
                                "<p>Protagonistas: " +
                                rssentries[i].protagonistaMovie6 +
                                "</p>";
                            output +=
                                "<p>Sinopsis: " +
                                rssentries[i].sinopsisMovie6 +
                                "</p>";
                            output +=
                                "<p>Directora: " +
                                rssentries[i].directorMovie6 +
                                "</p>";
                            output += "</ul>";
                            descripcion.innerHTML = output;
                            return false;
                        },
                        false
                    );
                }
            }
        }
    };
    request.open("GET", "json/Info.json", true);
    request.send(null);
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("load", init);
}
