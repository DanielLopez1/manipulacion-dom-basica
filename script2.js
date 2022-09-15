const h1 = document.querySelector('h1');
const  form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    //console.log(Number(input1.value) + Number(input2.value)); 
    //console.log(input1.value + input2.value); 
    const inputSum = input1.value + input2.value;
    pResult.innerHTML = "Rwsultado: " + inputSum;
}

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    const inputSum = input1.value + input2.value;
    pResult.innerHTML = "Rwsultado: " + inputSum;
}