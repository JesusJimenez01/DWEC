/*
Implemente la funcionalidad 
en JavaScript para alternar la visibilidad de la caja 
al hacer clic en el botón
*/

const caja = document.getElementById('box');
const boton = document.getElementById('toggleBtn');

function alternarVisibilidad() {
    
    if (caja.style.display === 'none') {

        caja.style.display = 'block';

    } else{

        caja.style.display = 'none';
        
    }
}

boton.addEventListener('click', alternarVisibilidad);
