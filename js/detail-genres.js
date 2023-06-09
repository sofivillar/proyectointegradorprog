let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let generos= qsToObject.get('id');

let tituloResultados = document.querySelector("h1")
let contenedorGeneros= document.querySelector(".contenedor-detalle-generos");

let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${generos}`
let urlArtistasGeneros= `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${generos}/artists`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        tituloResultados.innerText = `Detalles del genero: ${data.name}` 
        let generosDatos = `<h2 class="nombre-genero">${data.name}</h2> <article class= "bloque-detalle-generos"> <ul class="lista-detalle-generos"> <li> <p class="detalle-generos"></p> </li> </ul> 
        </article>`
        contenedorGeneros.innerHTML= generosDatos
    })
    .catch(function(error){
        console.log( "Error: " + error);
    })

    



    fetch (urlArtistasGeneros)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let arrayArtistas= data.data;
        console.log(arrayArtistas); 
        let artistas=""
        for(let i=0; i< 5; i++){
            artistas += `<article class= "bloque-detalle-generos"> <ul class="lista-detalle-generos"> <li> <a class="detalle-generos" href="./detallesartista.html?id=${arrayArtistas[i].id}">${arrayArtistas[i].name}</a> <img class="imagen-artista-generos" src="${arrayArtistas[i].picture}" alt="${arrayArtistas[i].name}"> </li> </ul> 
            </article>`
        }
        contenedorGeneros.innerHTML += artistas
        
    })
    .catch(function(error){
        console.log( "Error: " + error);
    })
