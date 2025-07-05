let tareas = [
  { descripcion: "Estudiar JavaScript", completada: false },
  { descripcion: "Hacer ejercicio", completada: false },
  { descripcion: "Leer un libro", completada: false }
];

function renderTareas() {
  const lista = document.getElementById('lista-tareas');
  lista.innerHTML = '';
  tareas.forEach((tarea, i) => {
    const li = document.createElement('li');
    li.className = tarea.completada ? 'completada' : '';
    li.innerHTML = `
      <input type="checkbox" ${tarea.completada ? 'checked' : ''} onclick="cambiarEstado(${i})">
      ${tarea.descripcion}
      <button onclick="borrarTarea(${i})">Borrar</button>
    `;
    lista.appendChild(li);
  });
  document.getElementById('total-tareas').textContent = tareas.length;
  document.getElementById('tareas-completadas').textContent = tareas.filter(t => t.completada).length;
}

document.getElementById('btn-agregar').addEventListener('click', () => {
  const input = document.getElementById('input-tarea');
  const desc = input.value.trim();
  if (desc) {
    tareas.push({ descripcion: desc, completada: false });
    input.value = '';
    renderTareas();
  }
});

function borrarTarea(idx) {
  tareas.splice(idx, 1);
  renderTareas();
}

function cambiarEstado(idx) {
  tareas[idx].completada = !tareas[idx].completada;
  renderTareas();
}

// Permite usar las funciones desde el HTML
window.borrarTarea = borrarTarea;
window.cambiarEstado = cambiarEstado;

renderTareas();