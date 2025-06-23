const ele = document.getElementById("ele1");

const pintar = (elemento, color = 'green') => {
    elemento.style.backgroundColor = color;
};

ele.addEventListener("click", function() {
    pintar(this, 'yellow');
});