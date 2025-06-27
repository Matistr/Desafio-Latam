const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false
  },
  {
    nombre: "Estudio céntrico moderno",
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    descripcion: "Estudio moderno en el centro, ideal para profesionales.",
    ubicacion: "456 Downtown Ave, City, CA 67890",
    habitaciones: 1,
    baños: 1,
    costo: 1100,
    smoke: false,
    pets: true
  },
  {
    nombre: "Casa en barrio tranquilo",
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    descripcion: "Casa espaciosa en un barrio muy tranquilo y seguro.",
    ubicacion: "789 Quiet St, Peaceful Town, CA 98765",
    habitaciones: 4,
    baños: 2,
    costo: 1800,
    smoke: true,
    pets: false
  }
];

function renderPropiedades(propiedades) {
  const contenedor = document.getElementById('contenedor-propiedades');
  contenedor.innerHTML = '';
  propiedades.forEach(prop => {
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
  renderPropiedades(propiedadesAlquiler);
});