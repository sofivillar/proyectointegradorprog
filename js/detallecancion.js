let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let cancion= qsToObject.get('id');
let nombreCancion= document.querySelector(".nombre-cancion")
let titulo= document.querySelector(".titulo-detalle-c")

let tituloResultados = document.querySelector("h1")
tituloResultados.innerText += `${cancion.title}` 

let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let contenedorCancion= document.querySelector(".contenedor-detalle-canciones");
        let cancion = `<article class= "bloque-cancion"> <h3> <a class="nombre-cancion" href="./detallecancion.html?id=${data.id}">${data.title}</a></h3>
                <img src="${data.album.cover}" alt="${data.title}"> 
                <article class="bloque-cancion-datos">
                   <a href="./detalledisco.html?id=${data.album.id}">${data.album.title}</a>
                   <a href="./detallesartista.html?id=${data.artist.id}">${data.artist.name}</a> 
                </article>
                <form action="./playlist.html" method="GET">
                <button id="favs" type="submit">Añadir a favoritos</button>
                </form>
        </article>`
        contenedorCancion.innerHTML=  cancion 
        titulo.innerText= `Detalles de la canción: ${data.title}`

    })
.catch(function(e){
    console.log(e);
})