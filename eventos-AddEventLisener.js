
//SELECTORES 
const h1= document.querySelector('h1');
const form= document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#boton');
const pResultado = document.querySelector('#resultado');

const copiartexto=document.querySelector("#texto")

//Escuchador "copy"

btn.addEventListener('click', btnOnclick );

function btnOnclick () {
    console.log("Esto escucha el evento del boton - addeventLisener");
    console.log(input1.value + input2.value);
    //esto imprimir en html la operación del 
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText= "Resultado es " + sumaInputs;
}

copiartexto.addEventListener('copy', textoAlerta)

function textoAlerta () {
    alert("Copiaste el texto sin permiso");
}

//Escuchador "mouseover"

const cambColor = document.querySelector('#color');

cambColor.addEventListener('mouseover', function(event) {
  // Cambiar el color de fondo cuando el mouse se mueve sobre el elemento
  cambColor.style.backgroundColor = 'red';
});

cambColor.addEventListener('mouseout', function(event) {
  // Restaurar el color de fondo cuando el mouse sale del elemento
  cambColor.style.backgroundColor = '#f0ed4f';
});