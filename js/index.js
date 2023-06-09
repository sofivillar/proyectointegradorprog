const url= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart";

/* let params= new URLSearchParams (urlHome.search);
console.log(params); */
 
fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayCanciones= data.tracks.data;
        console.log(arrayCanciones); 
        
        let listaCanciones= document.querySelector(".contenedor-canciones");
        let canciones=""
        for(let i=0; i< 5; i++){
            canciones += `<article class= "bloque-cancion"> <h3> <a class="nombre-cancion" href="./detallecancion.html?id=${arrayCanciones[i].id}">${arrayCanciones[i].title}</a></h3>
                <img src="${arrayCanciones[i].artist.picture}" alt="${arrayCanciones[i].title}"> 
                <article class="bloque-cancion-datos">
                    <a href="./detalledisco.html?id=${arrayCanciones[i].album.id}">${arrayCanciones[i].album.title}</a>
                    <a href="./detallesartista.html?id=${arrayCanciones[i].artist.id}">${arrayCanciones[i].artist.name}</a>  
                </article>
        </article>`
        }
        listaCanciones.innerHTML= canciones
        
    })
    .catch(function(error){
        console.log( "Error: " + error);
    })

    fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayAlbumes= data.albums.data;
        console.log(arrayAlbumes); 
        
        let listaAlbumes= document.querySelector(".contenedor-album");
        let albumes=""
        for(let i=0; i< 5; i++){
            albumes += `<article class= "bloque-album"> <h3> <a class="nombre-album" href="./detalledisco.html?id=${arrayAlbumes[i].id}">${arrayAlbumes[i].title}</a></h3>
                <img src="${arrayAlbumes[i].cover}" alt="${arrayAlbumes[i].title}"> 
                <article class="bloque-album-datos">
                    <a href="./detallesartista.html?id=${arrayAlbumes[i].artist.id}">${arrayAlbumes[i].artist.name}</a>  
                </article>
        </article>`
        }
        listaAlbumes.innerHTML= albumes
        
    })
    .catch(function(error){
        console.log( "Error: " + error);
    })

    fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayArtistas= data.artists.data;
        console.log(arrayArtistas); 
        
        let listaArtistas= document.querySelector(".contenedor-artista");
        let artistas=""
        for(let i=0; i< 5; i++){
            artistas += `<article class= "bloque-artista"> <h3> <a class="nombre-artista" href="./detallesartista.html?id=${arrayArtistas[i].id}">${arrayArtistas[i].name}</a></h3>
                <img src="${arrayArtistas[i].picture}" alt="${arrayArtistas[i].name}"> 
                <article class="bloque-artista-datos">
                </article>
        </article>`
        }
        listaArtistas.innerHTML= artistas
        
    })
    .catch(function(error){
        console.log( "Error: " + error);
    })

 