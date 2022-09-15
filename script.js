/*Contamos con funciones y metodos que nos permiten seleccionar los elementos html("Selectores") a nuestro codigo JavaScript
y poder manipularlos a nuestro gusto, existen varias funciones, por mencionar algunas document.querySelectorAll(Permite hacer
un arrelgo con todas las etiquetas p), document.getElementsByClassName (Permite selecionar los elementos que tengan esa misma clase),
 document.getElementById (Permite selecionar los elementos que tengan el mismo id)*/
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');


console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//Con el metodo innerHTML conviertes todo texto en html5 (esto es una practica insegura ya que pueden inyectar codigo malisioso)
h1.innerHTML="Mala <br> practica";
/**Con el metodo innertext cambias el texto que contiene la etiqueta h1 
 * (esto es una practica menos insegura pero sigue existiendo el peligro) */
 h1.innerText="Mala <br> practica";
/**Con este metodo podemos obtener el valor del atributo  */
h1.getAttribute('class');
/**Con este metodo podemos modificar el valor del atributo  */
h1.setAttribute('class', 'red');

/**Con la funcion classList podemos agregar(add), eliminar(remove), agregar y elminar(toggle), regresa un true o false 
 * dependiendo si tiene la clase que estamos buscando(contains)
 */

h1.classList.add('red');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value=" 5432";

/**Crear un elemento  html desde cero */

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png', );

img.setAttribute('height', '50px');

pid.innerHTML="";
pid.append(img);