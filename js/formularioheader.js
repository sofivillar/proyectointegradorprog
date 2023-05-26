// dcapturar form y ejecutar submmit adentro prevent defaault. capturo input (querySelector) . value IF y voy metiendo ifs git
let form= document.querySelector("#buscador")
let input = document.querySelector("#busqueda")
let valor= input.value
form.addEventListener("submit", function(e){
    e.preventDefault()
    if(valor == " "){
        alert ("El campo esta vacío, ingrese una búsqueda!")
    }else if(valor < 3){
        alert ("El campo debe contener al menos 3 caracteres")
    }else{
        window.location.href= "../search-results.html"
    }
    
})


// declaramos id de form e input y capturamos los valores. Hicimos el js del heather.