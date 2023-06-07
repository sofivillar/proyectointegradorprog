let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let busqueda= qsToObject.get("resultadosbusqueda");

let tituloResultados = document.querySelector("h1")
tituloResultados.innerText += ` ${busqueda}` 

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=${busqueda}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let arrayCanciones = data.data

        let listaCanciones= document.querySelector(".contenedor-canciones");
        let canciones=""
        for(let i=0; i< 5; i++){
            canciones += `<article class= "bloque-cancion"> <h3> <a class="nombre-cancion" href="./detallecancion.html?id=${arrayCanciones[i].id}">${arrayCanciones[i].title}</a></h3>
                <img src="${arrayCanciones[i].album.cover}" alt="${arrayCanciones[i].title}"> 
                <article class="bloque-cancion-datos">
                    <a href="./detalledisco.html?">${arrayCanciones[i].album.title}</a>
                    <a href="./detallesartista.html?id=${arrayCanciones[i].artist.name}">${arrayCanciones[i].artist.name}</a>  
                </article>
        </article>`
        }
        listaCanciones.innerHTML= canciones
    })
    .catch(function(e){
        console.log(e);
    })