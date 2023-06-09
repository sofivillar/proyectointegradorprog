const url= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";

/* let params= new URLSearchParams (urlHome.search);
console.log(params); */
 
fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayGeneros= data.genre.data;
        console.log(arrayCanciones); 
        
        let listaCanciones= document.querySelector(".contenedor-canciones");
        let canciones=""
        for(let i=0; i< 5; i++){
            canciones += `<article class= "bloque-cancion"> <h3> <a class="nombre-cancion" href="./detallecancion.html?id=${arrayCanciones[i].id}">${arrayCanciones[i].title}</a></h3>
                <img src="${arrayCanciones[i].artist.picture}" alt="${arrayCanciones[i].title}"> 
                <article class="bloque-cancion-datos">
                    <a href="./detalledisco.html?">${arrayCanciones[i].album.title}</a>
                    <a href="./detallesartista.html?id=${arrayCanciones[i].artist.name}">${arrayCanciones[i].artist.name}</a>  
                </article>
        </article>`
        }
        listaCanciones.innerHTML= canciones
        
    })
    .catch(function(error){
        console.log( "Error: " + error);
    })
