var lunes1 = document.querySelector(".lunes")
var martes1 = document.querySelector(".martes")
var miercoles1 = document.querySelector(".miercoles")
var jueves1 = document.querySelector(".jueves")
var viernes1 = document.querySelector(".viernes")
var sabado1 = document.querySelector(".sabado")
var domingo1 = document.querySelector(".domingo")
var dia1 = 1
var diasmeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto"]
var diasemanacomienzo = 1
var numero_dia = [0,0,0,0,0,0,0]


for (let index = 0; index < 6; index++) {
    numero_dia[0] = dia1 - diasemanacomienzo + (7 * index)
    if (numero_dia[0] <= 0 || numero_dia[0]>diasmeses[0]) {
        lunes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        lunes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        <h4>${numero_dia[0]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +1 - diasemanacomienzo + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        martes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        martes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +2 - diasemanacomienzo + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        miercoles1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        miercoles1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +3 - diasemanacomienzo + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        jueves1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        jueves1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +4 - diasemanacomienzo + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        viernes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        viernes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +5 - diasemanacomienzo + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        sabado1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        sabado1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +6 - diasemanacomienzo + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        domingo1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        domingo1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}