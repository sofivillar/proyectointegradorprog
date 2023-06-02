let urlHome= ("https://api.allorigins.win/raw?url=https://api.deezer.com/chart");
/* let params= new URLSearchParams (urlHome.search);
console.log(params); */
 
fetch (urlHome)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let arrayCanciones= data.tracks.data
        console.log(arrayCanciones);
        let listaCanciones= document.querySelector(".nombre-canciones");
        let canciones=""

        for(let i=0; i<arrayCanciones.length; i++){
            canciones += `<article class= "bloque-cancion"> <h3> <a class="nombre-cancion" href="./detallecancion.html?COMPLETARQS">Nombre de la cancion</a></h3>
                <img src="${arrayCanciones[i].link}" alt="${arrayCanciones[i].title}"> 
                <article class="bloque-cancion-datos">
                    <a href="./detalledisco.html?COMPLETARQS">Nombre del album</a>
                    <a href="./detallesartista.html?COMPLETARQS">Nombre del artista</a>  
                </article>
        </article>`
        }
        listaCanciones.innerHTML= canciones
        
    })
    .catch(function(error){
        console.log( "Error:" + error);
    })

 