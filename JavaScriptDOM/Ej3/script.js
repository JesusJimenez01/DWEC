// Escribe el código JavaScript necesario para que el formulario funcione correctamente.

const newItemInput = document.getElementById('newItemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemsList = document.getElementById('itemsList');

function añadirItem() {

    // Item para añadir
    let item = newItemInput.value.trim();

    // Si intentas añadir un item vacio te salta una alerta
    if (item === '') {
        alert('Cadena vacía, por favor ingrese un item');
        return;
    }

    //Crear nuevo item
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = item;

    //Crear boton completar
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔️';
    completeBtn.classList.add('completeBtn');

    //Crear boton delete
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.id = 'deleteBtn';

    // Marcar como completado
    completeBtn.addEventListener('click', function(){
        nuevoItem.classList.toggle('completed');
    });

    //Eliminar item
    deleteBtn.addEventListener('click', function(){
        itemsList.removeChild(nuevoItem);
    });

    // Añadir los botones completar y delete al nuevo item
    nuevoItem.append(completeBtn, deleteBtn);

    // Añadir el item a la lista
    itemsList.append(nuevoItem);

    // Limpiar el campo de entrada para el item
    newItemInput.value = '';
}

// Añadir el evento para agregar items
addItemBtn.addEventListener('click', añadirItem)