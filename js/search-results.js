let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let busqueda= qsToObject.get("resultadosbusqueda");

let endpointDeBusqueda="https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${busqueda}"

fetch(endpointDeBusqueda)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
    })
    .catch(function(e){
        console.log(e);
    })