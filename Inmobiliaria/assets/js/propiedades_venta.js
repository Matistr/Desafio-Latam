const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true
  },
  {
    nombre: "Casa familiar con jardín",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    descripcion: "Casa ideal para familias, con amplio jardín y patio trasero.",
    ubicacion: "321 Family St, Suburbia, CA 12345",
    habitaciones: 5,
    baños: 3,
    costo: 3500,
    smoke: true,
    pets: false
  },
  {
    nombre: "Departamento céntrico moderno",
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    descripcion: "Moderno departamento en el centro de la ciudad, cerca de todo.",
    ubicacion: "100 Main St, Downtown, CA 54321",
    habitaciones: 2,
    baños: 2,
    costo: 3000,
    smoke: false,
    pets: true
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
  renderPropiedades(propiedadesVenta);
});