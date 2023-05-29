let input = document.getElementById("cajadetexto");
let botones = document.querySelectorAll("button");

let string = " ";
let array = Array.from(botones);

array.forEach(boton => {
    boton.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
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


