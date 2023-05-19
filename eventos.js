
//SELECTORES 
const h1= document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#boton');
const pResultado = document.querySelector('#resultado');

function btnOnclick () {
    console.log("Esto escucha el evento del boton");
    console.log(input1.value + input2.value);
    //esto imprimir en html la operación del 
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText= "Resultado es " + sumaInputs;
}