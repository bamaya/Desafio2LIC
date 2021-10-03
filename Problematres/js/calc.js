function getimputvalue(){
    let input = event.target.innerText;
    console.log(input)
    printvalue(input);
}
// Imprimimos en pantalla los valores de los botones
function printvalue(val){
    let out = document.querySelector('#result');
    let current = out.innerHTML;

    if(out.innerHTML == "0")
    {
        if(val !="C" && val !="DEL"){
            out.innerHTML ="";
            out.innerHTML += val;
        }
    }else{
        if(val == "DEL"){
            out.innerHTML = current.slice(0,-1);
            if(out.innerHTML.length <=1){
                out.innerHTML ="0";
            }
        }

        if(val != "C" && val != "DEL" && val != "="){
            out.innerHTML += val;
        }

        if(val == "C"){
            out.innerHTML = "0";
        }

        if(val == "="){
            let resul = out.innerHTML;
            out.innerHTML = eval(resul)
        }
    }
}

let botones = document.getElementsByTagName('button');
for(var i=0; i<botones.length;i++){
    botones[i].setAttribute('onclick','getimputvalue()'); // Agregamos con un clic los botones
}