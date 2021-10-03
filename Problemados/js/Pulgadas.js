//Función pulgadas
    //Variables constantes
        const pulg = 39.3701;
    //Obteniendo datos y declarando variables
        var metros = prompt('Introduzca la cantidad en metros que desea convertir:', '');
        var cpulg;
    //Calculando
        cpulg = Math.round((metros*pulg)*100)/100;
//Imprimiendo el resultado
            document.write(
            `<header>
             <h2>La conversión de ${metros} metros a pulgadas es igual a :</h2>
             <h2>${cpulg} pulgadas.</h2>
             </header`);