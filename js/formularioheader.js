let form = document.querySelector("#buscador")
let input = document.querySelector("#busqueda")
let urlBuscador = ("https://api.allorigins.win/raw?url=API")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valor= input.value.length
    if (valor == 0) {
        alert("El campo esta vacío, ingrese una búsqueda!")
    } else if (valor < 3) {
        alert("El campo debe contener al menos 3 caracteres")
    } else {
        this.submit(); //preguntar. pusimos esto porque window.location.href= "../search-results.html" no funcionaba
    }
});

