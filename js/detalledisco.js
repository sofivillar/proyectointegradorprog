let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let disco= qsToObject.get('id');
let nombredisco= document.querySelector(".nombre-disco")
let titulo= document.querySelector(".titulo-detalle-d")

let tituloResultados = document.querySelector("h1")
tituloResultados.innerText += `${disco.title}` 

let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${disco}`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let contenedorDisco= document.querySelector(".contenedor-detalle-disco");
        let discoDatos = `<article class= "detalle-disco"> <h3> <a class="nombre-disco" href="./detalledisco.html?id=${data.id}">${data.title}</a></h3>
                <img src="${data.cover}" alt="${data.title}"> 
                <article class="bloque-disco-datos">
                    <a href="./detallesartista.html?id=${data.artist.name}">${data.artist.name}</a>  
                    <a href="./genres.html?id=${data}
                    <p> Fecha de publicacion del disco: ${data.release_date}</p>
                    <p> Lista de canciones del artista: ${data.artist.tracklist}</p>
                </article>
        </article>`
        contenedorDisco.innerHTML=  `${discoDatos}` 
        titulo.innerText= `Detalles de la canción: ${data.title}`

    })
.catch(function(e){
    console.log(e);
})