document.querySelector('#verificar').addEventListener('click', function() {
    const s1 = parseInt(document.querySelector('#sticker1').value) || 0;
    const s2 = parseInt(document.querySelector('#sticker2').value) || 0;
    const s3 = parseInt(document.querySelector('#sticker3').value) || 0;
    const total = s1 + s2 + s3;
    const resultado = document.querySelector('#resultado');
    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
    } else {
        resultado.textContent = "Llevas demasiados stickers";
    }
});