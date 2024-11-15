//6. Ejercicio JavaScript: Selección aleatoria de nombres

let inputName = document.getElementById("inputName");
let addBtn = document.getElementById("addBtn");
let nameList = document.getElementById("nameList");
let randomBtn = document.getElementById("randomBtn");
let namesArray = [];

function addName() {
    let name = inputName.value.trim();
    if (name) {
        namesArray.push(name);
        inputName.value = "";
        renderList();
    }
}

function renderList() {
    nameList.innerHTML = "";
    namesArray.forEach((name, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = name;
        listItem.setAttribute("data-index", index);
        nameList.appendChild(listItem);
    });
}

function selectRandomName() {
    if (namesArray.length === 0) return;

    let previouslySelected = document.querySelector(".selected");
    if (previouslySelected) {
        previouslySelected.classList.remove("selected");
    }

    let randomIndex = Math.floor(Math.random() * namesArray.length);
    let selectedItem = nameList.children[randomIndex];
    selectedItem.classList.add("selected");

    alert(`Nombre seleccionado: ${namesArray[randomIndex]}`);
}

addBtn.addEventListener("click", addName);
randomBtn.addEventListener("click", selectRandomName);