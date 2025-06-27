function renderPropiedadesIndex(propiedades, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = "";
  propiedades.slice(0, 3).forEach(prop => {
    contenedor.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top" alt="Imagen del departamento" />
          <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${prop.baños} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${prop.costo.toLocaleString()}</p>
            <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
              <i class="fas ${prop.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
              ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${prop.pets ? 'text-success' : 'text-danger'}">
              <i class="fas ${prop.pets ? 'fa-paw' : 'fa-ban'}"></i>
              ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>
    `;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPropiedadesIndex(propiedadesVenta, 'venta-propiedades');
  renderPropiedadesIndex(propiedadesAlquiler, 'alquiler-propiedades');
});