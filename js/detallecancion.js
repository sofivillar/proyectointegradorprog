let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let id = qsToObject.get('id');
console.log(id)
let nombreCancion = document.querySelector(".nombre-cancion")
let titulo = document.querySelector(".titulo-detalle-c")

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let contenedorCancion = document.querySelector(".contenedor-detalle-canciones");
        let cancion = `<article class= "bloque-cancion"> <h3> <a class="nombre-cancion" href="./detallecancion.html?id=${data.id}">${data.title}</a></h3>
        <a class="nombre-cancion" href="./detallecancion.html?id=${data.id}"><img src="${data.album.cover}" alt="${data.title}"></a> 
                <article class="bloque-cancion-datos">
                   <a href="./detalledisco.html?id=${data.album.id}">${data.album.title}</a>
                   <a href="./detallesartista.html?id=${data.artist.id}">${data.artist.name}</a> 
                   <div class="mis-favs"><a href="./playlist.html">Ir a Favoritos</a></div>
                   <audio controls><source src="${data.preview}" type="audio/mpeg">Your browser does not support the audio element.</audio>
                </article>
        </article>`
        contenedorCancion.innerHTML += cancion
        titulo.innerText = `Detalles de la canción: ${data.title}`

    })
    .catch(function (e) {
        console.log(e);
    })

let botonFavs = document.querySelector('.favs');
let playlist = [];
let recuperoStorage = localStorage.getItem('playlist');
let storageToArray= JSON.parse(recuperoStorage)

if (recuperoStorage != null) {
    playlist = storageToArray;
}

if (playlist.includes(id)) {
    botonFavs.innerText = 'Quitar de Favoritos'
}

botonFavs.addEventListener("click", function () {
    if (playlist.includes(id)) {
        let indice = playlist.indexOf(id)
        playlist.splice(indice, 1);
        botonFavs.innerText = 'Agregar a favorito'
    } else {
        playlist.push(id);
        botonFavs.innerText = 'Quitar de favorito'
    }

    let favsToString = JSON.stringify(playlist);
    localStorage.setItem('playlist', favsToString)
})



