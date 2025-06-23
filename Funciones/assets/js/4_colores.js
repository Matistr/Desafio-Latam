document.querySelector('#azul').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.querySelector('#rojo').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.querySelector('#verde').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});
document.querySelector('#amarillo').addEventListener('click', function() {
    this.style.backgroundColor = 'black';
});

let color = '';

document.addEventListener('keydown', function(event) {
    const keyDiv = document.querySelector('#key');
    if (event.key === 'a') {
        color = 'pink';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 's') {
        color = 'orange';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = 'skyblue';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 'q') {
        crearDivNuevo('purple');
    } else if (event.key === 'w') {
        crearDivNuevo('gray');
    } else if (event.key === 'e') {
        crearDivNuevo('saddlebrown');
    }
});

function crearDivNuevo(colorNuevo) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = colorNuevo;
    nuevoDiv.style.border = '2px solid black';
    nuevoDiv.style.display = 'inline-block';
    nuevoDiv.style.margin = '10px';
    document.getElementById('contenedor-nuevos').appendChild(nuevoDiv);
}