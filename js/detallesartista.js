let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let artista= qsToObject.get('id');
let nombreArtista= document.querySelector(".nombre-artista")
let titulo= document.querySelector(".titulo-detalle-a")
let contenedorArtista= document.querySelector(".contenedor-detalle-artistas");

let tituloResultados = document.querySelector("h1")
tituloResultados.innerText += `${artista.name}` 



let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artista}`

let urlAlbums =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artista}/albums`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let artista = `<article class= "detalle-artista"> <h3> <a class="nombre-artista" href="./detallesartista.html?id=${data.id}">${data.name}</a></h3>
                <img src="${data.picture}" alt="${data.name}"> 
        </article>`
        contenedorArtista.innerHTML=  artista 
        titulo.innerText= `Detalles del artista: ${data.name}`

    })
.catch(function(e){
    console.log(e);
})


fetch(urlAlbums)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let albums = ""
        let arrayAlbums= data.data
        for(i=0; i<5; i++){
            albums += `<li> ${arrayAlbums[i].title} </li>`
        }
        contenedorArtista.innerHTML +=  albums
    })
.catch(function(e){
    console.log(e);
})

