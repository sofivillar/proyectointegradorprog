
let recuperoStorage= localStorage.getItem("playlist");
let storageToArray= JSON.parse(recuperoStorage); 
let favoritos= storageToArray

let contenedorFavs= document.querySelector(".contenedor-canciones-playlist");
let miPlaylist="";

if(recuperoStorage !== undefined|| favoritos.length !==0){
    for (let i=0; i<favoritos.length; i++){
        console.log(favoritos[i]);

        let urlFavs=  `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritos[i]}`
        fetch(urlFavs)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
             miPlaylist += `<article class= "bloque-cancion"> <h3> <a class="nombre-cancion" href="./detallecancion.html?id=${data.id}">${data.title}</a></h3>
                        <a class="nombre-cancion" href="./detallecancion.html?id=${data.id}"><img src="${data.album.cover}" alt="${data.title}"></a> 
                        <article class="bloque-cancion-datos">
                        <a href="./detalledisco.html?id=${data.album.id}">${data.album.title}</a>
                        <a href="./detallesartista.html?id=${data.artist.id}">${data.artist.name}</a> 
                    </article>
            </article>`
            contenedorFavs.innerHTML = miPlaylist
    
        })
        .catch(function (e) {
            console.log(e);
        })
    }
}

if(favoritos.length ==0){
    contenedorFavs.innerHTML= "<h2> No se encontraron favoritos</h2>" 
}
    

