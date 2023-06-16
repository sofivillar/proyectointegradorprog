const url= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";
/* let params= new URLSearchParams (urlHome.search);
console.log(params); */
 
fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      
        let arrayGeneros= data.data;
        console.log(arrayGeneros); 
        
        let listaGeneros= document.querySelector(".contenedor-generos");
        let generos=""
        for(let i=1; i< 11; i++){
            generos += `<article class= "bloque-generos"> <ul class="lista-generos"> <li> <h2> <a class="genero" href="./detail-genres.html?id=${arrayGeneros[i].id}">${arrayGeneros[i].name}</a> </h2> </li> </ul>
            <a class="genero" href="./detail-genres.html?id=${arrayGeneros[i].id}"><img src="${arrayGeneros[i].picture}" alt="${arrayGeneros[i].name}"></a>
            </article>`
        }
        listaGeneros.innerHTML= generos
        
    })
    .catch(function(error){
        console.log( "Error: " + error);
    })
