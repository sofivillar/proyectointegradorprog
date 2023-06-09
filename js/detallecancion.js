let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let cancion= qsToObject.get('id');

let tituloResultados = document.querySelector("h1")
tituloResultados.innerText += ` ${cancion}`

let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/?id=${cancion}`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
       
    })
.catch(function(e){
    console.log(e);
})