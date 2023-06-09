let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let disco= qsToObject.get('id');
let li= document.querySelector(".li");

let nombredisco= document.querySelector(".nombre-disco")
let titulo= document.querySelector(".titulo-detalle-d")
let contenedorDisco= document.querySelector(".contenedor-detalle-disco");

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${disco}`


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let canciones=""
        let arrayCanciones=data.tracks.data
        for(i=0; i<arrayCanciones.length; i++){
            //canciones+= arrayCanciones[i].title+" "
            canciones += "<li>" + arrayCanciones[i].title + "</li>"
        }
        console.log(canciones)
        let discoDatos = `<article class="detalle-disco">
                             <a class="nombre-disco" href="./detalledisco.html?id=${data.id}">${data.title}</a> <img src="${data.cover}" alt="${data.title}">
                             <a href="./detallesartista.html?id=${data.artist.id}">${data.artist.name}</a>
                             <a href="./detail-genres.html?id=${data.genres.data[0].id}">${data.genres.data[0].name}</a>
                             <p>Fecha de publicación del disco: ${data.release_date}</p>
                          </article>
                          <ul> ${canciones}</ul>
                          `

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
