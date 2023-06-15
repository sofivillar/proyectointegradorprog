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
            canciones += `<li> <a href="./detallecancion.html?id=${arrayCanciones[i].id}"> ${arrayCanciones[i].title} </a> </li>`
        }
        console.log(canciones)
        let discoDatos = `<article class="detalle-disco">
                             <a class="nombre-disco" href="./detalledisco.html?id=${data.id}">${data.title}</a> <a class="nombre-disco" href="./detalledisco.html?id=${data.id}"><img src="${data.cover}" alt="${data.title}"></a>
                             <a href="./detallesartista.html?id=${data.artist.id}">${data.artist.name}</a>
                             <a href="./detail-genres.html?id=${data.genres.data[0].id}">${data.genres.data[0].name}</a>
                             <p>Fecha de publicación del disco: ${data.release_date}</p>
                          </article>
                          <p>Canciones del album:</p>
                          <ul> ${canciones}</ul>
                          `

        contenedorDisco.innerHTML= discoDatos 
        titulo.innerText= `Detalles del album: ${data.title}`
        
    })
.catch(function(e){
    console.log(e);
})




