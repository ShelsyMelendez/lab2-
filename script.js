// SALUDO CON VALIDACIÓN
const btnSaludar = document.getElementById("btnSaludar");
const nombre = document.getElementById("nombre");
const salida = document.getElementById("salida");

btnSaludar.addEventListener("click", function() {
    if (nombre.value === "") {
        salida.textContent = "Por favor escribe tu nombre.";
        salida.style.color = "red";
    } else {
        salida.textContent = "Hola, " + nombre.value;
        salida.style.color = "green";
    }
});

// AGREGAR TAREAS
const btnAgregar = document.querySelector("#btnAgregar");
const nuevaTarea = document.querySelector("#nuevaTarea");
const lista = document.querySelector("#lista");

btnAgregar.addEventListener("click", function() {
    if (nuevaTarea.value !== "") {
        const li = document.createElement("li");
        li.textContent = nuevaTarea.value;
        lista.appendChild(li);
        nuevaTarea.value = "";
    }
});

// CONTADOR
let numero = 0;
const contador = document.getElementById("contador");
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");

btnSumar.addEventListener("click", function() {
    numero++;
    contador.textContent = numero;
});

btnRestar.addEventListener("click", function() {
    numero--;
    contador.textContent = numero;
});

// MODO OSCURO
const btnModo = document.getElementById("btnModo");

btnModo.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");
});