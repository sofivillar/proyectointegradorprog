let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let generos = qsToObject.get('id');

let tituloResultados = document.querySelector("h1")
let contenedorGeneros = document.querySelector(".contenedor-detalle-generos");
let nombreGenero = document.querySelector(".nombre-genero")
let artistas = ""

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${generos}`
let urlArtistasGeneros = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${generos}/artists`

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        tituloResultados.innerText = `Detalles del genero: ${data.name}`
        nombreGenero.innerText += data.name
        let generosDatos = `<article class= "bloque-detalle-generos"> <ul class="lista-detalle-generos"> <li> <p class="detalle-generos"></p> </li> </ul> 
        </article>`
        contenedorGeneros.innerHTML = generosDatos
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


fetch(urlArtistasGeneros)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let arrayArtistas = data.data;
        console.log(arrayArtistas);
        for (let i = 0; i < 5; i++) {
            artistas += `<article class= "bloque-detalle-generos"> <ul class="lista-detalle-generos"> <li> <h3> <a class="detalle-generos" href="./detallesartista.html?id=${arrayArtistas[i].id}">${arrayArtistas[i].name}</a> </h3> 
            <a class="detalle-generos" href="./detallesartista.html?id=${arrayArtistas[i].id}"><img class="imagen-artista-generos" src="${arrayArtistas[i].picture}" alt="${arrayArtistas[i].name}"></a>
            </li> </ul> 
            </article>`
        }
        contenedorGeneros.innerHTML = artistas

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })






let contenedorVerMasGeneros = document.querySelector(".contenedor-detalle-generos-mas")
let generosMas = ""

fetch(urlArtistasGeneros)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        let arrayArtistasMas = data.data;
        console.log(arrayArtistasMas);
        for (let i = 5; i < 11; i++) {
            generosMas += `<article class= "bloque-detalle-generos-mas"> <ul class="lista-detalle-generos-mas"> <li> <h3> <a class="detalle-generos-mas" href="./detallesartista.html?id=${arrayArtistasMas[i].id}">${arrayArtistasMas[i].name}</a> </h3> 
            <a class="detalle-generos-mas" href="./detallesartista.html?id=${arrayArtistasMas[i].id}"><img class="imagen-artista-generos-mas" src="${arrayArtistasMas[i].picture}" alt="${arrayArtistasMas[i].name}"></a>
            </li> </ul> 
            </article>`
        }
        contenedorVerMasGeneros.innerHTML = generosMas

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


let botonVerMasGeneros = document.querySelector(".boton-ver-mas-generos")

botonVerMasGeneros.addEventListener("click", function () {
    if (botonVerMasGeneros.innerText == "Ver mas") {
        botonVerMasGeneros.innerText = "Ver menos"
        contenedorVerMasGeneros.style.display = "flex"
    } else {
        botonVerMasGeneros.innerText = "Ver mas"
        contenedorVerMasGeneros.style.display = "none"
    }

})
