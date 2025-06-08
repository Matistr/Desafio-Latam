const precio = 400000

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

// mostrar 0 como el total inicial al cargar la página
calcularTotal();

//function para aumentar la cantidad
function aumentarCantidadProducto(button) {
    const cantidadSpan = button.parentElement.querySelector(".cantidad");
    let cantidad = parseInt(cantidadSpan.textContent);
    cantidadSpan.textContent = cantidad + 1;
    calcularTotal();
}

//function para disminuir la cantidad
function disminuirCantidadProducto(button) {
    const cantidadSpan = button.parentElement.querySelector(".cantidad");
    let cantidad = parseInt(cantidadSpan.textContent);
    if (cantidad > 0) {
        cantidadSpan.textContent = cantidad - 1;
        calcularTotal();
    }
}

//function para calcular el total
function calcularTotal() {
    const cantidad = parseInt(document.querySelector(".cantidad").textContent);
    const total = cantidad * precio;
    document.querySelector(".valor-total").innerHTML = total;
}
