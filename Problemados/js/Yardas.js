//Función pies
    //Variables constantes
        const yrd = 1.09361;
    //Obteniendo datos y declarando variables
        var metros = prompt('Introduzca la cantidad en metros que desea convertir:', '');
        var cyrd;
        if(metros != null ){
            if(metros != "" && metros != null && !isNaN( Number(metros) ) && Number(metros) > 0){
            //Calculando
             cyrd = Math.round((metros*yrd)*100)/100;
            //Imprimiendo el resultado
            document.write(
            `<header>
             <h2>La conversión de ${metros} metros a yardas es igual a :</h2>
             <h2>${cyrd} yardas.</h2>
             </header`);
        
            }
            else{
                alert('Ingrese valores validos');
            }
        }