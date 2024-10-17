/*
Tu objetivo es crear un código JavaScript para que cuando el usuario presione el
botón con id texto-informatica aparezca una frase aleatoria (de un array dentro del código
JS) al que llamaremos frasesFrikisInformatica, el cual contiene frases frikis o graciosas de
informática
*/

const boton = document.getElementById('ver-mas-boton');

const frasesFrikisInformática = [
    "La tecnología es mejor cuando une a la gente.",
    "La tecnología es un recurso limitado. Sólo puede haber tantas mejoras significativas en un plazo dado.",
    "Un buen programador es alguien que siempre busca la forma de trabajar menos."
];

boton.addEventListener("click", function (){
    let fraseAleatoria = parseInt(Math.random() * frasesFrikisInformática.length);
    document.getElementById('texto-informatica').textContent = frasesFrikisInformática[fraseAleatoria];

    // Ejercicio 2: añadir color aleatorio
    document.getElementById('texto-informatica').style.color = colores[Math.floor(Math.random() * colores.length)];
});

/*
EJERCICIO 2
Modifica el código del ejercicio anterior para que además de salir una frase de forma
aleatoria, cambie de color el texto y el botón de forma aleatoria, según un array de colores
definidos por ti. Por ejemplo, puedes usar el siguiente array de colores:
*/
var colores = [
    "#ff0000", // Rojo
    "#00ff00", // Verde
    "#0000ff", // Azul
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ff8000", // Naranja
    "#8000ff", // Morado
    "#00ff80", // Verde claro
    "#ff0080", // Rosa
    "#80ff00", // Verde lima
    "#0080ff", // Azul claro
    "#ffbf00", // Amarillo oscuro
    "#bf00ff", // Violeta oscuro
    "#00ffbf", // Turquesa
    "#bf00ff", // Púrpura
    "#00bfff", // Azul claro
    "#ff00bf", // Magenta oscuro
    "#80ff80", // Verde claro pastel
    "#ff80ff", // Rosa pastel
    "#80ffff" // Cian claro
    ];