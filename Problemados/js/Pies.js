//Función pies Variables constantes
const pies = 3.28084;
//Obteniendo datos y declarando variables
var metros = prompt('Introduzca la cantidad en metros que desea convertir:','');
var cpies;
if (metros != null) {
    if (metros != "" && !isNaN(Number(metros)) && Number(metros) > 0) {
        //Calculando
        cpies = Math.round((metros * pies) * 100) / 100;
        //Imprimiendo el resultado
        document.write(
            `<header>
                     <h2>La conversión de ${metros} metros a pies es igual a :</h2>
                     <h2>${cpies} pies.</h2>
                     </header`
        );
    } else {
        alert('Ingrese valores validos');
    }

}
