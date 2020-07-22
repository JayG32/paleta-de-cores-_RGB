window.addEventListener('load', start);

var sliderVermelho = document.querySelector('#sliderVermelho');
var sliderVede = document.querySelector('#sliderVerde');
var sliderAzul = document.querySelector('#sliderAzul');

var inputVermelho = document.querySelector('#inputVermelho');
var inputVerde = document.querySelector('#inputVerde');
var inputAzul = document.querySelector('#inputAzul'); 

var cxCores = document.querySelector('.cxCores');

sliderVermelho.addEventListener('input', setColor);
sliderVerde.addEventListener('input', setColor);
sliderAzul.addEventListener('input', setColor);

function start() {
    console.log('página carregada')
    setColor();
    
}

function setColor() {
     inputVermelho.value = sliderVermelho.value;
     inputVerde.value = sliderVerde.value;
     inputAzul.value = sliderAzul.value;

     cxCores.style.backgroundColor = `rgb(${sliderVermelho.value}, ${sliderVerde.value}, ${sliderAzul.value})`
}

start()