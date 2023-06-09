let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let disco= qsToObject.get('id');

let nombredisco= document.querySelector(".nombre-disco")
let titulo= document.querySelector(".titulo-detalle-d")
let contenedorDisco= document.querySelector(".contenedor-detalle-disco");

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${disco}`
let urlCanciones= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${disco}/tracks`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let discoDatos = `<article class= "detalle-disco">
                             <a class="nombre-disco" href="./detalledisco.html?id=${data.id}">${data.title}</a> <img src="${data.cover}" alt="${data.title}">
                             <a href="./detallesartista.html?id=${data.artist.id}">sfs${data.artist.name}</a>
                             adfsfsdfsdfsdfs
                             sdfsdf
                             sdfsdf
                             sdfsdfsd
                             <a href="./detail-genres.html?id=${data.genres.data[0].id}>${data.genres.data[0].name}</a>
                             <p>Fecha de publicacion del disco:${data.release_date}</p>
                            </article>`
        contenedorDisco.innerHTML= discoDatos 
        titulo.innerText= `Detalles del album: ${data.title}`
        
    })
.catch(function(e){
    console.log(e);
})




// fetch (urlCanciones)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data)
//     let arrayCanciones= data.data;
//     console.log(arrayCanciones); 
//     let canciones=""
//     for(let i=0; i< 5; i++){
//         canciones += `<ul class="lista-detalle-disco"> <li> <a class="detalle-cancion" href="./detallecancion.html?id=${arrayCanciones[i].data.id}">${arrayCanciones[i].data.title}</a> </li> </ul> 
//         </article>`
//     }
//     contenedorDisco.innerHTML += canciones
    
// })
// .catch(function(error){
//     console.log( "Error: " + error);
// })
