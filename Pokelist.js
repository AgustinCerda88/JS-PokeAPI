const text$$ = document.querySelector(".text");
const list$$ = document.querySelector(".list");
const button$$ = document.querySelector(".button");

// Función para agregar una tarea a la lista
function agregarTarea() {
  const tarea = text$$.value;
  if (tarea) {
    const nuevoElemento = document.createElement("li");
    const contenido = document.createTextNode(tarea);
    nuevoElemento.className = "li";
    nuevoElemento.appendChild(contenido);
    const botonEliminar = document.createElement("button");
    botonEliminar.className = "eliminar";
    botonEliminar.innerHTML ="✓ Realizada";
    nuevoElemento.appendChild(botonEliminar);
    list$$.appendChild(nuevoElemento);
    text$$.value = "";
    botonEliminar.addEventListener("click", eliminarTarea);
  }
}

// Evento para agregar una tarea al presionar la tecla Enter
text$$.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    agregarTarea();
  }
});

const newList$$ = document.querySelector(".descartados");
function eliminarTarea() {
  const elemento = this.parentNode;
  list$$.removeChild(elemento);
  newList$$.appendChild(elemento);
}

// Evento para agregar una tarea al hacer clic en el botón
button$$.addEventListener("click", agregarTarea);

