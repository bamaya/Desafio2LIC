//Declaracion de variables
const DIVtable = document.querySelector('#table');
var total = 0,
    nombreProducto = "",
    precio = 0;
var productos = [];

//Eventos
document.addEventListener('DOMContentLoaded', Init)

//Funciones Funcion al iniciar
function Init() {
    var continuar = true;
    while (continuar == true) {
        //obtener valores
        nombreProducto = prompt('Ingrese el nombre del producto');
        if (nombreProducto != "" && nombreProducto != null) {
            precio = prompt('Ingrese el precio del producto ($)');
            if (!isNaN(Number(precio)) && Number(precio) > 0) {
                let infoProducto = [nombreProducto, precio];

                //se agrega el producto al arreglo de productos
                productos.push(infoProducto);
                total = total + Number(precio);

                continuar = confirm('¿Quiere ingresar otro producto?');
            } else {
                alert('Ingrese valores validos de dinero');
            }
        } else {
            alert('Ingresar el nombre del producto');
        }
    }

    createTable(productos);
}

//Funcion para crear la tabla con los productos
function createTable(Aproductos) {
    var html = "";

    html += `
        <table class="table text-center">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Nombre de producto</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>
    `;
    Aproductos.forEach((producto) => {
        html += `
            <tr>
                <td scope="row">${producto[0]}</td>
                <td>$${producto[1]}</td>
            </tr>
        `;
    });

    html += `
                <tr>
                    <th scope="row">Total</th>
                    <td>$${ (
        total * 100
    ) / 100}</td>
                </tr>
            </tbody>
        </table>
    `;

    DIVtable.innerHTML = html;
}