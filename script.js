let input = document.getElementById("cajadetexto");
let botones = document.querySelectorAll("button");
let eliminarHistorial = document.getElementById("eliminarHistorial");
let label = document.getElementById("historialtexto");

let string = " ";
let array = Array.from(botones);
let historialGeneral = [];


function guardarHistorial(historial, resultado){

    historialGeneral.push(historial + " = " + resultado);
    localStorage.setItem("historial", JSON.stringify(historialGeneral));

    lst = localStorage.getItem("historial");
    as = JSON.parse(lst);
   return as;
}   

eliminarHistorial.addEventListener('click', (e) => {
    localStorage.removeItem("historial");
    label.innerHTML = " ";
})

array.forEach(boton => {
    boton.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            
           label.innerHTML = " ";
           
            stringCalculado = eval(string);

            let historialGuardado = guardarHistorial(string, stringCalculado);
            string = stringCalculado;
           
            for(var i = 0 ; i < historialGuardado.length; i++){
                label.innerHTML += historialGuardado[i] + "<br>";
               }
            input.value = stringCalculado;
         
        }

        else if(e.target.innerHTML == 'AC'){
            string = " ";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DE'){
            string = string.substring(0, string.length - 1);
                        input.value = string; 
        }

        else{
            string += e.target.innerHTML;
            input.value = string; 
        }
    })

})


