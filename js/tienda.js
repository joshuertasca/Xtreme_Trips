var descripcion =["","Binoculares senderismo con ajuste - mh b560 - adulto - aumento x12 negro",
"Casco roller skateboard patinete mf500 azul",
"Protecciones patinaje adulto kit 3 fit500 negro gris",
"Chaqueta vela sailing 100 hombre azul azul impermeable",
"Tabla surf espuma 900 6 3 alerones",
"Bialetas leash bodyboard 500 negro amarillo",
"Aletas kit careta snorkel snk 500 niños turquesa",
"Botas impermeables mujer senderismo - nh150 mid wp - caqui",
"Cordones para zapatos de senderismo redondos negro y naranja",
"Pies de gato de escalada - rock+ gris",
"Arnés para escalar - easy 3 azul",
"Guante escalada adulto aseguramiento simond cuero"]

var precios = [0,248000,87000,87000,137000,1106000,165000,82000,184000,17000,26000,193000,138000]
var cantidadcomprar = [0,0,0,0,0,0,0,0,0,0,0,0,0]
var elementos_tienda = document.querySelector(".elementos")

for (let xx = 1; xx <= 12; xx++) {
    elementos_tienda.innerHTML += `<div class="col-3 border border-1 border-dark">
    <img class="w-100 p-5" src="img/tienda/${xx}.jpg" alt="">
    <p class="precio1 text-center fs-3 fw-bold" value="${precios[xx]}" > ${precios[xx]} $</p>
    <div class=" d-flex flex-row">
        <button type="button" class="btn btn-success w-25" onclick="restar${xx}()">-</button> 
        
        <h3 class="cantidad${xx} text-center w-50 value="${cantidadcomprar[xx]}" ">${cantidadcomprar[xx]}</h3> 
        <button type="button" class="btn btn-success w-25" onclick="sumar${xx}()">+</button>
    </div>
    <p class="descripcion${xx} text-center mt-4"> ${descripcion[xx]}</p>
</div> `
}

function restar1() {
    var cantidad11 = document.querySelector(".cantidad1")
    if (cantidadcomprar[1]<=0) {
        
    }else{
        cantidadcomprar[1]=cantidadcomprar[1]-1
        cantidad11.innerHTML =  `${cantidadcomprar[1]}`
    }
}
function sumar1() {
    var cantidad11 = document.querySelector(".cantidad1")
        cantidadcomprar[1]=cantidadcomprar[1]+1
        cantidad11.innerHTML =  `${cantidadcomprar[1]}`
}




function restar2() {
    var cantidad22 = document.querySelector(".cantidad2")
    if (cantidadcomprar[2]<=0) {
        
    }else{
        cantidadcomprar[2]=cantidadcomprar[2]-1
        cantidad22.innerHTML =  `${cantidadcomprar[2]}`
    }
}
function sumar2() {
    var cantidad22 = document.querySelector(".cantidad2")
        cantidadcomprar[2]=cantidadcomprar[2]+1
        cantidad22.innerHTML =  `${cantidadcomprar[2]}`
}



function restar3() {
    var cantidad33 = document.querySelector(".cantidad3")
    if (cantidadcomprar[3]<=0) {
        
    }else{
        cantidadcomprar[3]=cantidadcomprar[3]-1
        cantidad33.innerHTML =  `${cantidadcomprar[3]}`
    }
}
function sumar3() {
    var cantidad33 = document.querySelector(".cantidad3")
        cantidadcomprar[3]=cantidadcomprar[3]+1
        cantidad33.innerHTML =  `${cantidadcomprar[3]}`
}



function restar4() {
    var cantidad44 = document.querySelector(".cantidad4")
    if (cantidadcomprar[4]<=0) {
        
    }else{
        cantidadcomprar[4]=cantidadcomprar[4]-1
        cantidad44.innerHTML =  `${cantidadcomprar[4]}`
    }
}
function sumar4() {
    var cantidad44 = document.querySelector(".cantidad4")
        cantidadcomprar[4]=cantidadcomprar[4]+1
        cantidad44.innerHTML =  `${cantidadcomprar[4]}`
}



function restar5() {
    var cantidad55 = document.querySelector(".cantidad5")
    if (cantidadcomprar[5]<=0) {
        
    }else{
        cantidadcomprar[5]=cantidadcomprar[5]-1
        cantidad55.innerHTML =  `${cantidadcomprar[5]}`
    }
}
function sumar5() {
    var cantidad55 = document.querySelector(".cantidad5")
        cantidadcomprar[5]=cantidadcomprar[5]+1
        cantidad55.innerHTML =  `${cantidadcomprar[5]}`
}


function restar6() {
    var cantidad66 = document.querySelector(".cantidad6")
    if (cantidadcomprar[6]<=0) {
        
    }else{
        cantidadcomprar[6]=cantidadcomprar[6]-1
        cantidad66.innerHTML =  `${cantidadcomprar[6]}`
    }
}
function sumar6() {
    var cantidad66 = document.querySelector(".cantidad6")
        cantidadcomprar[6]=cantidadcomprar[6]+1
        cantidad66.innerHTML =  `${cantidadcomprar[6]}`
}


function restar7() {
    var cantidad77 = document.querySelector(".cantidad7")
    if (cantidadcomprar[7]<=0) {
        
    }else{
        cantidadcomprar[7]=cantidadcomprar[7]-1
        cantidad77.innerHTML =  `${cantidadcomprar[7]}`
    }
}
function sumar7() {
    var cantidad77= document.querySelector(".cantidad7")
        cantidadcomprar[7]=cantidadcomprar[7]+1
        cantidad77.innerHTML =  `${cantidadcomprar[7]}`
}


function restar8() {
    var cantidad88 = document.querySelector(".cantidad8")
    if (cantidadcomprar[8]<=0) {
        
    }else{
        cantidadcomprar[8]=cantidadcomprar[8]-1
        cantidad88.innerHTML =  `${cantidadcomprar[8]}`
    }
}
function sumar8() {
    var cantidad88 = document.querySelector(".cantidad8")
        cantidadcomprar[8]=cantidadcomprar[8]+1
        cantidad88.innerHTML =  `${cantidadcomprar[8]}`
}


function botoncompra() {

    var totalcompra = 0
    var totalelementox = 0
    for (let yy = 1; yy <= 8; yy++) {
        totalelementox = cantidadcomprar[yy] * precios[yy]
        totalcompra = totalcompra + totalelementox
        
    }
    Swal.fire('el total de la compra es '+ totalcompra)
}