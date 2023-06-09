let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let artista= qsToObject.get('id');
let nombreArtista= document.querySelector(".nombre-artista")
let titulo= document.querySelector(".titulo-detalle-a")

let tituloResultados = document.querySelector("h1")
tituloResultados.innerText += `${artista.name}` 



let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artista}`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let contenedorArtista= document.querySelector(".contenedor-detalle-artistas");
        let artista = `<article class= "detalle-artista"> <h3> <a class="nombre-artista" href="./detallesartista.html?id=${data.id}">${data.name}</a></h3>
                <img src="${data.picture}" alt="${data.name}"> 
        </article>`
        contenedorArtista.innerHTML=  `${artista}` 
        titulo.innerText= `Detalles del artista: ${data.name}`

    })
.catch(function(e){
    console.log(e);
})

/*en la linea 21 hay que hacer un for, y otro fetch para acceder a la url de los albumes?*/