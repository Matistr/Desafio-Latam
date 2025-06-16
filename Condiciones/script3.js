document.querySelector('#ingresar').addEventListener('click', function() {
    const d1 = document.querySelector('#digito1').value;
    const d2 = document.querySelector('#digito2').value;
    const d3 = document.querySelector('#digito3').value;
    const password = d1 + d2 + d3;
    const mensaje = document.querySelector('#mensaje');
    if (password === '911') {
        mensaje.textContent = 'password 1 correcto';
    } else if (password === '714') {
        mensaje.textContent = 'password 2 es correcto';
    } else {
        mensaje.textContent = 'password incorrecto';
    }
});