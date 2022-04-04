const descripcion =["","Binoculares senderismo con ajuste - mh b560 - adulto - aumento x12 negro",
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

const articulos =["","Binoculares",
"Casco",
"Protecciones",
"Chaqueta",
"Tablasurf",
"Bialetas",
"Aletas",
"Botas",
"Cordones",
"Pies de gato",
"Arnés",
"Guante escal"]

var precios = [0,248000,87000,87000,137000,1106000,165000,82000,184000,17000,26000,193000,138000]
var cantidadcomprar = [0,0,0,0,0,0,0,0,0,0,0,0,0]
var elementos_tienda = document.querySelector(".elementos")

for (let xx = 1; xx <= 12; xx++) {
    elementos_tienda.innerHTML += `<div class=" col-lg-3 col-md-4 col-sm-6 col-8 offset-lg-0 offset-sm-0 offset-md-0 offset-2 border border-1 border-dark">
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

    
{
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


function restar9() {
    var cantidad99 = document.querySelector(".cantidad9")
    if (cantidadcomprar[9]<=0) {
        
    }else{
        cantidadcomprar[9]=cantidadcomprar[9]-1
        cantidad99.innerHTML =  `${cantidadcomprar[9]}`
    }
}
function sumar9() {
    var cantidad99 = document.querySelector(".cantidad9")
        cantidadcomprar[9]=cantidadcomprar[9]+1
        cantidad99.innerHTML =  `${cantidadcomprar[9]}`
}

function restar10() {
    var cantidad1010 = document.querySelector(".cantidad10")
    if (cantidadcomprar[10]<=0) {
        
    }else{
        cantidadcomprar[10]=cantidadcomprar[10]-1
        cantidad1010.innerHTML =  `${cantidadcomprar[10]}`
    }
}
function sumar10() {
    var cantidad1010 = document.querySelector(".cantidad10")
        cantidadcomprar[10]=cantidadcomprar[10]+1
        cantidad1010.innerHTML =  `${cantidadcomprar[10]}`
}

function restar11() {
    var cantidad1111 = document.querySelector(".cantidad11")
    if (cantidadcomprar[11]<=0) {
        
    }else{
        cantidadcomprar[11]=cantidadcomprar[11]-1
        cantidad1111.innerHTML =  `${cantidadcomprar[11]}`
    }
}
function sumar11() {
    var cantidad1111 = document.querySelector(".cantidad11")
        cantidadcomprar[11]=cantidadcomprar[11]+1
        cantidad1111.innerHTML =  `${cantidadcomprar[11]}`
}


function restar12() {
    var cantidad1212 = document.querySelector(".cantidad12")
    if (cantidadcomprar[12]<=0) {
        
    }else{
        cantidadcomprar[12]=cantidadcomprar[12]-1
        cantidad1212.innerHTML =  `${cantidadcomprar[12]}`
    }
}
function sumar12() {
    var cantidad1212 = document.querySelector(".cantidad12")
        cantidadcomprar[12]=cantidadcomprar[12]+1
        cantidad1212.innerHTML =  `${cantidadcomprar[12]}`
}



}

function login() {

    var usuario1 = "administrador"
    var contrasena1 ="1234"

    Swal.fire({
        html:
            '<p>Ingrese Usuario</p>'+
            '<input type="text" class="form-control" id="usuario">'+
            '<p>Ingrese Contraseña</p>'+
            '<input type="password" class="form-control" id="contrasena">',
        confirmButtonText: 'Ingresar',
        background: '#00000085',
        color: '#fff',
        confirmButtonColor: '#000',
        backdrop: `
        rgba(0,0,123,0.4)
        `,
    }).then((result) => {
        
        var usuarioingresado = document.querySelector("#usuario").value
        var contrasenaingresada = document.querySelector("#contrasena").value
        
        

        if (usuarioingresado == usuario1 && contrasenaingresada == contrasena1) {
            Swal.fire({
                
                text:'Ha ingresado a modo administrador',
                background: '#00000085',
        color: '#fff',
        confirmButtonColor: '#000',
        backdrop: `
        rgba(0,0,123,0.4)
        `,
            })
        
           
            elementos_tienda.innerHTML = ``
            var logout1 =  document.querySelector(".logout")
            var login1 = document.querySelector(".login11")
            login1.innerHTML = ``
            logout1.innerHTML = `
            <i class="fa-solid fa-arrow-right-to-bracket d-flex logout1 position-fixed fa-4x" onclick="logout()"></i>
            `

            for (let xx = 1; xx <= 12; xx++) {
                
            
                
                elementos_tienda.innerHTML += `<div class="col-3 border border-1 border-dark">
                <img class="w-100 p-5" src="img/tienda/${xx}.jpg" alt="">
                <input type="number" class="text-center form-control" id="nuevovalor${xx}" placeholder="$ ${precios[xx]} ">
                <p class="precio1 text-center fs-3 fw-bold" value="${precios[xx]}" > ${precios[xx]} $</p>
                <p class="descripcion${xx} text-center mt-4"> ${descripcion[xx]}</p>
                </div> ` 
              
            }

        }else {
            Swal.fire({
                
                text:'Los datos ingresados son errones',
                background: '#00000085',
        color: '#fff',
        confirmButtonColor: '#000',
        backdrop: `
        rgba(0,0,123,0.4)
        `,
            })
        }


      })
    
    
    
}


function logout() {
    Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Los datos han sido actualizados',
            showConfirmButton: false,
            timer: 2500,
            background: '#00000085',
            color: '#fff',
            backdrop: `
            rgba(0,0,123,0.4)
            `,

    })
    var logout1 =  document.querySelector(".logout")
    var login1 = document.querySelector(".login11")
    login1.innerHTML = `<i class="d-flex  icono_compra position-fixed fa-bounce  fa-solid fa-cart-shopping fa-4x" onclick="botoncompra()"></i>
    <i class="fa-solid fa-user d-flex login position-fixed fa-4x" onclick="login()"></i>
    <img class="logo_whatsapp position-absolute position-fixed" onclick="whatsapp()" src="img/logoWhatsapp.png" alt="">
    <img class="logo_contactanos position-absolute position-fixed" onclick="contactanos()" src="img/logoContactanos.png"alt="">
`
    logout1.innerHTML = ``
    var nuevo_precio1= document.querySelector("#nuevovalor1").value
    var nuevo_precio2= document.querySelector("#nuevovalor2").value
    var nuevo_precio3= document.querySelector("#nuevovalor3").value
    var nuevo_precio4= document.querySelector("#nuevovalor4").value
    var nuevo_precio5= document.querySelector("#nuevovalor5").value
    var nuevo_precio6= document.querySelector("#nuevovalor6").value
    var nuevo_precio7= document.querySelector("#nuevovalor7").value
    var nuevo_precio8= document.querySelector("#nuevovalor8").value
    var nuevo_precio9= document.querySelector("#nuevovalor9").value
    var nuevo_precio10= document.querySelector("#nuevovalor10").value
    var nuevo_precio11= document.querySelector("#nuevovalor11").value
    var nuevo_precio12= document.querySelector("#nuevovalor12").value
   
    var nuevos_precios=[0,nuevo_precio1,nuevo_precio2,nuevo_precio3,nuevo_precio4,nuevo_precio5,nuevo_precio6,nuevo_precio7,nuevo_precio8,nuevo_precio9,nuevo_precio10,nuevo_precio11,nuevo_precio12]

    for (let index1 = 1; index1 <=12; index1++) {
        if (nuevos_precios[index1]==0) {
            precios[index1]=precios[index1]
        }else{
            precios[index1]=nuevos_precios[index1]
        }
    }


    var elementos_tienda = document.querySelector(".elementos")
    elementos_tienda.innerHTML = ``
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
}


function botoncompra() {
    console.log(precios)
    var totalcompra = 0
    var totalelementox = 0
    for (let yy = 1; yy <= 12; yy++) {
        totalelementox = cantidadcomprar[yy] * precios[yy]
        totalcompra = totalcompra + totalelementox
        
    }
    Swal.fire({
        
        html:

        '<h1 class=" text-center">Detalles de la compra</h1>'+ 
        '<div class=" container-fluid">'+
        '    <div class="row">'+
            '   <div class="col-4 p-0 m-0">'+
            '       <p class=" fw-bold border border-danger p-2 fs-6 m-0">Articulo</p>'+
            '       <div class="tipoarticulo fs-6"></div>'+
            '   </div>'+
            '   <div class="col-2 p-0 m-0">'+
            '       <p class=" text-end fw-bold border border-danger fs-6 p-2 m-0">Cant</p>'+
            '       <div class="cantidadarticulo fs-6"></div>'+
            '   </div>'+
            '   <div class="col-3 p-0 m-0">'+
            '       <p class=" text-end fw-bold border border-danger fs-6 p-2 m-0">Valor Uni</p>'+
            '       <div class="valoruniarticulo fs-6"></div>'+
            '   </div>'+
            '   <div class="col-3 p-0 m-0">'+
            '       <p class=" text-end fw-bold border border-danger fs-6 p-2 m-0">Valor Total</p>'+
            '       <div class="valortotalarticulo fs-6"></div>'+
            '    </div>'+
            '</div>'+
            '<h3>El valor total de su compra es ' + totalcompra +'$ </h3>'


            ,


        confirmButtonText: 'Enviar Datos',
        background: '#00000085',
        color: '#fff',
        confirmButtonColor: '#000',

        confirmButtonText: 'Finalizar Compra',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su reserva ha sido realizada',
                showConfirmButton: false,
                timer: 3000,
                background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000'
            })
        }
    })


    var tipoarticulo1 = document.querySelector(".tipoarticulo")
    var cantidadarticulo1 = document.querySelector(".cantidadarticulo")
    var valoruniarticulo1 = document.querySelector(".valoruniarticulo")
    var valortotalarticulo1 = document.querySelector(".valortotalarticulo")
    for (let jj = 1; jj <= 12; jj++) {
        if (cantidadcomprar[jj]>0) {
            tipoarticulo1.innerHTML +=`<p class=" text-end border border-danger p-2 m-0">`+articulos[jj] +`</p>`
            cantidadarticulo1.innerHTML  +=`<p class=" text-end border border-danger p-2 m-0">`+cantidadcomprar[jj] +`</p>`
            valoruniarticulo1.innerHTML  +=`<p class=" text-end border border-danger p-2 m-0">`+precios[jj] +`</p>`
            valortotalarticulo1.innerHTML  +=`<p class=" text-end border border-danger p-2 m-0">`+precios[jj]*cantidadcomprar[jj] +`</p>`
        }        
    }
}









