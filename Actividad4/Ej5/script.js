// Seleccionamos los elementos necesarios
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Función para agregar una nueva tarea
function addTask() {
  const taskValue = newTaskInput.value.trim();  // Obtenemos el valor del input y eliminamos espacios al inicio y fin

  // Verificamos que el campo no esté vacío
  if (taskValue !== "") {
    // Creamos un nuevo elemento de lista
    const newTask = document.createElement('li');
    newTask.textContent = taskValue;

    // Creamos un botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('deleteBtn');

    // Evento para eliminar la tarea cuando se haga clic en el botón
    deleteBtn.addEventListener('click', function () {
      taskList.removeChild(newTask);
    });

    // Agregamos el botón de eliminar al elemento de la tarea
    newTask.appendChild(deleteBtn);

    // Agregamos la tarea a la lista
    taskList.appendChild(newTask);

    // Limpiamos el campo de texto
    newTaskInput.value = "";
  } else {
    alert("Por favor, ingresa una tarea.");
  }
}

// Agregamos un evento al botón de agregar tarea
addTaskBtn.addEventListener('click', addTask);

// Opcional: Agregar la funcionalidad de presionar Enter para agregar tarea
newTaskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
