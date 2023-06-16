let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let busqueda = qsToObject.get("resultadosbusqueda");

let canciones = ""
let albumes = ""
let artistas = ""
let tituloResultados = document.querySelector("h1")
let listaCanciones = document.querySelector(".contenedor-canciones");
let listaAlbumes = document.querySelector(".contenedor-album");
let listaArtistas = document.querySelector(".contenedor-artista");

tituloResultados.innerText += ` ${busqueda}`


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${busqueda}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let arrayCanciones = data.data
        if (arrayCanciones.length == 0) {
            canciones += "<p>No hay resultados para su búsqueda</p>"
            listaCanciones.innerHTML = canciones
        } else {
            for (let i = 0; i < 5; i++) {
                canciones += `<article class= "bloque-cancion"> 
                <h3> <a class="nombre-cancion" href="./detallecancion.html?id=${arrayCanciones[i].id}">${arrayCanciones[i].title}</a></h3>
                <a class="nombre-cancion" href="./detallecancion.html?id=${arrayCanciones[i].id}"><img src="${arrayCanciones[i].album.cover}" alt="${arrayCanciones[i].title}"></a> 
                <article class="bloque-cancion-datos">
                    <a href="./detalledisco.html?id=${arrayCanciones[i].album.id}">${arrayCanciones[i].album.title}</a>
                    <a href="./detallesartista.html?id=${arrayCanciones[i].artist.id}">${arrayCanciones[i].artist.name}</a>  
                </article>
                </article>`
                listaCanciones.innerHTML = canciones
            }
        }

    })
    .catch(function (e) {
        console.log(e);
    })


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${busqueda}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let arrayAlbumes = data.data
        console.log(arrayAlbumes);
        if (arrayAlbumes.length == 0) {
            albumes += "<p>No hay resultados para su búsqueda</p>"
            listaAlbumes.innerHTML = albumes
        } else {
            for (let i = 0; i < 5; i++) {
                albumes += `<article class= "bloque-album"> <h3> <a class="nombre-album" href="./detalledisco.html?id=${arrayAlbumes[i].id}">${arrayAlbumes[i].title}</a></h3>
                <a class="nombre-album" href="./detalledisco.html?id=${arrayAlbumes[i].id}"><img src="${arrayAlbumes[i].cover}" alt="${arrayAlbumes[i].title}"></a>
                            <article class="bloque-album-datos">
                                <a href="./detallesartista.html?id=${arrayAlbumes[i].artist.id}">${arrayAlbumes[i].artist.name}</a>  
                            </article>
                        </article>`
                listaAlbumes.innerHTML = albumes
            }
        }
    })
    .catch(function (e) {
        console.log(e);
    })


fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${busqueda}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let arrayArtistas = data.data
        console.log(arrayArtistas);
        if (arrayArtistas.length == 0) {
            artistas += "<p>No hay resultados para su búsqueda</p>"
            listaArtistas.innerHTML = albumes
        } else {
            for (let i = 0; i < 5; i++) {
                artistas += `<article class= "bloque-artista"> <h3> <a class="nombre-artista" href="./detallesartista.html?id=${arrayArtistas[i].id}">${arrayArtistas[i].name}</a></h3>
            <a class="nombre-artista" href="./detallesartista.html?id=${arrayArtistas[i].id}"><img src="${arrayArtistas[i].picture}" alt="${arrayArtistas[i].name}"></a>
                <article class="bloque-artista-datos">
                </article>
        </article>`
                listaArtistas.innerHTML = artistas
            }
        }
    })
    .catch(function (e) {
        console.log(e);
    })




let contenedorVerMasCanciones = document.querySelector(".ver-mas-canciones")
let cancionesMas = ""

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${busqueda}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let arrayCancionesMas = data.data
        if (arrayCancionesMas.length == 0) {
            cancionesMas += "<p>No hay resultados para su búsqueda</p>"
            contenedorVerMas.innerHTML = cancionesMas
        } else {
            for (let i = 5; i < 11; i++) {
                cancionesMas += `<article class= "bloque-cancion-mas"> 
                <h3> <a class="nombre-cancion-mas" href="./detallecancion.html?id=${arrayCancionesMas[i].id}">${arrayCancionesMas[i].title}</a></h3>
                <a class="nombre-cancion-mas" href="./detallecancion.html?id=${arrayCancionesMas[i].id}"><img src="${arrayCancionesMas[i].album.cover}" alt="${arrayCancionesMas[i].title}"></a> 
                <article class="bloque-cancion-datos-mas">
                    <a href="./detalledisco.html?id=${arrayCancionesMas[i].album.id}">${arrayCancionesMas[i].album.title}</a>
                    <a href="./detallesartista.html?id=${arrayCancionesMas[i].artist.id}">${arrayCancionesMas[i].artist.name}</a>  
                </article>
                </article>`
                contenedorVerMasCanciones.innerHTML = cancionesMas
            }
        }

    })
    .catch(function (e) {
        console.log(e);
    })

let botonVerMasCanciones = document.querySelector(".boton-ver-mas-canciones")

botonVerMasCanciones.addEventListener("click", function () {
    if (botonVerMasCanciones.innerText == "Ver mas") {
        botonVerMasCanciones.innerText = "Ver menos"
        contenedorVerMasCanciones.style.display = "flex"
    } else {
        botonVerMasCanciones.innerText = "Ver mas"
        contenedorVerMasCanciones.style.display = "none"
    }

})



let contenedorVerMasAlbumes = document.querySelector(".ver-mas-albumes")
let albumesMas = ""

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=${busqueda}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let arrayAlbumesMas = data.data
        console.log(arrayAlbumesMas);
        if (arrayAlbumesMas.length == 0) {
            albumesMas += "<p>No hay resultados para su búsqueda</p>"
            contenedorVerMasAlbumes.innerHTML = albumesMas
        } else {
            for (let i = 5; i < 11; i++) {
                albumesMas += `<article class= "bloque-album-mas"> <h3> <a class="nombre-album-mas" href="./detalledisco.html?id=${arrayAlbumesMas[i].id}">${arrayAlbumesMas[i].title}</a></h3>
                <a class="nombre-album" href="./detalledisco.html?id=${arrayAlbumesMas[i].id}"><img src="${arrayAlbumesMas[i].cover}" alt="${arrayAlbumesMas[i].title}"></a>
                            <article class="bloque-album-datos">
                                <a href="./detallesartista.html?id=${arrayAlbumesMas[i].artist.id}">${arrayAlbumesMas[i].artist.name}</a>  
                            </article>
                        </article>`
                contenedorVerMasAlbumes.innerHTML = albumesMas
            }
        }
    })
    .catch(function (e) {
        console.log(e);
    })


let botonVerMasAlbumes = document.querySelector(".boton-ver-mas-albumes")

botonVerMasAlbumes.addEventListener("click", function () {
    if (botonVerMasAlbumes.innerText == "Ver mas") {
        botonVerMasAlbumes.innerText = "Ver menos"
        contenedorVerMasAlbumes.style.display = "flex"
    } else {
        botonVerMasAlbumes.innerText = "Ver mas"
        contenedorVerMasAlbumes.style.display = "none"
    }

})



let contenedorVerMasArtistas = document.querySelector(".ver-mas-artistas")
let artistasMas = ""

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${busqueda}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let arrayArtistasMas = data.data
        console.log(arrayArtistasMas);
        if (arrayArtistasMas.length == 0) {
            artistasMas += "<p>No hay resultados para su búsqueda</p>"
            contenedorVerMasArtistas.innerHTML = artistasMas
        } else {
            for (let i = 5; i < 11; i++) {
                artistasMas += `<article class= "bloque-artista-mas"> <h3> <a class="nombre-artista-mas" href="./detallesartista.html?id=${arrayArtistasMas[i].id}">${arrayArtistasMas[i].name}</a></h3>
            <a class="nombre-artista-mas" href="./detallesartista.html?id=${arrayArtistasMas[i].id}"><img src="${arrayArtistasMas[i].picture}" alt="${arrayArtistasMas[i].name}"></a>
                <article class="bloque-artista-datos">
                </article>
        </article>`
                contenedorVerMasArtistas.innerHTML = artistasMas
            }
        }
    })
    .catch(function (e) {
        console.log(e);
    })


let botonVerMasArtistas = document.querySelector(".boton-ver-mas-artistas")

botonVerMasArtistas.addEventListener("click", function () {
    if (botonVerMasArtistas.innerText == "Ver mas") {
        botonVerMasArtistas.innerText = "Ver menos"
        contenedorVerMasArtistas.style.display = "flex"
    } else {
        botonVerMasArtistas.innerText = "Ver mas"
        contenedorVerMasArtistas.style.display = "none"
    }

})

