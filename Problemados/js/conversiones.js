function init() {
    //Elemento div donde se mostrará el menu de las operaciones
    const operaciones = document.getElementById('operaciones');

    //Creando el contenido de la pagina
    var contenido = "<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"pages/Pies.html\"><span>Convertir a Pies</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"pages/Pulgadas.html\"><span>Convertir a Pulgadas</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"pages/Yardas.html\"><span>Convertir a Yardas</span></a>\n";
    contenido += "</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";

    //Colocar el contenido del elemento div
    operaciones.innerHTML = contenido;

    //Preparando el manejo del evento click sobre los enlaces del menu
    var opciones = document.getElementsByTagName('a');

    //Recorrer todos los elementos de enlace y asignar el manejador del evento click
    for (var i = 0; i < opciones.length; i++) {
        switch (i) {
            case 0:

                break;
            case 1:

                break;
            case 2:

                break;
        }
    }
}

window.onload = init();