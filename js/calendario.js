var lunes1 = document.querySelector(".lunes")
var martes1 = document.querySelector(".martes")
var miercoles1 = document.querySelector(".miercoles")
var jueves1 = document.querySelector(".jueves")
var viernes1 = document.querySelector(".viernes")
var sabado1 = document.querySelector(".sabado")
var domingo1 = document.querySelector(".domingo")

var dia1 = 1
const diasmeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","octubre","Noviembre","Diciembre"]
const diasemanacomienzo = [5,1,1,3,6,2,4,0,3,5,1,3]
var numero_dia = [0,0,0,0,0,0,0]

var mes_actual= 3
var mostrar_mes = document.querySelector(".mostrarmes")
mostrar_mes.innerHTML = `<h2>${meses[mes_actual]} 2022</h2>`

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        lunes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        lunes1.innerHTML += `
    <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"()">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}


for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +1 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        martes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        martes1.innerHTML += `
        <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +2 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        miercoles1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        miercoles1.innerHTML += `
        <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +3 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        jueves1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        jueves1.innerHTML += `
        <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +4 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        viernes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        viernes1.innerHTML += `
        <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +5 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        sabado1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        sabado1.innerHTML += `
        <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +6 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        domingo1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        domingo1.innerHTML += `
    <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}


function adelante(){
    if (mes_actual < 11) {
        var lunes1 = document.querySelector(".lunes")
        var martes1 = document.querySelector(".martes")
        var miercoles1 = document.querySelector(".miercoles")
        var jueves1 = document.querySelector(".jueves")
        var viernes1 = document.querySelector(".viernes")
        var sabado1 = document.querySelector(".sabado")
        var domingo1 = document.querySelector(".domingo")
        lunes1.innerHTML = ``
        martes1.innerHTML = ``
        miercoles1.innerHTML = ``
        jueves1.innerHTML = ``
        viernes1.innerHTML = ``
        sabado1.innerHTML = ``
        domingo1.innerHTML = ``
        mes_actual = mes_actual + 1
        lunes1.innerHTML += `<p>Lu</p>`
        martes1.innerHTML += `<p>Ma</p>`
        miercoles1.innerHTML += `<p>Mi</p>`
        jueves1.innerHTML += `<p>Ju</p>`
        viernes1.innerHTML += `<p>Vi</p>`
        sabado1.innerHTML += `<p>Sa</p>`
        domingo1.innerHTML += `<p>Do</p>`
        var mostrar_mes = document.querySelector(".mostrarmes")
        mostrar_mes.innerHTML = `<h2>${meses[mes_actual]} 2022</h2>`
        for (let index = 0; index < 6; index++) {
            numero_dia[0] = dia1 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[0] <= 0 || numero_dia[0]>diasmeses[0]) {
                lunes1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                lunes1.innerHTML += `
            <div class="dd${numero_dia[0]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" >
                <h4>${numero_dia[0]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +1 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                martes1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                martes1.innerHTML += `
                <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
                <h4>${numero_dia[1]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +2 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                miercoles1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                miercoles1.innerHTML += `
                <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
                <h4>${numero_dia[1]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +3 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                jueves1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                jueves1.innerHTML += `
                <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
                <h4>${numero_dia[1]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +4 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                viernes1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                viernes1.innerHTML += `
            <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()""><h4>${numero_dia[1]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +5 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                sabado1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                sabado1.innerHTML += `
            <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()""><h4>${numero_dia[1]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +6 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                domingo1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                domingo1.innerHTML += `
            <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()""><h4>${numero_dia[1]}</h4>
            </div> `
            }
        } 
    }
    switch (mes_actual) {
        case 0:
            var actvidad1= document.querySelector(".dd10_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">4</h4> `

            var actvidad1= document.querySelector(".dd19_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">13</h4> `

            var actvidad1= document.querySelector(".dd17_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">25</h4> `

            var actvidad1= document.querySelector(".dd28_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">30</h4> `
            break;
        case 1:
            var actvidad1= document.querySelector(".dd10_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">4</h4> `

            var actvidad1= document.querySelector(".dd19_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">13</h4> `

            var actvidad1= document.querySelector(".dd17_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">25</h4> `

            var actvidad1= document.querySelector(".dd25_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">30</h4> `    


            break;
        case 2:
            var actvidad1= document.querySelector(".dd15_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd4_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">4</h4> `

            var actvidad1= document.querySelector(".dd13_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">13</h4> `

            var actvidad1= document.querySelector(".dd25_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">25</h4> `

            var actvidad1= document.querySelector(".dd30_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">30</h4> `

            break;
        case 3:
            var actvidad1= document.querySelector(".dd10_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 4:
            var actvidad1= document.querySelector(".dd10_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 5:
            var actvidad1= document.querySelector(".dd10_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 6:
            var actvidad1= document.querySelector(".dd10_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 7:
            var actvidad1= document.querySelector(".dd10_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 8:
            var actvidad1= document.querySelector(".dd10_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 9:
            var actvidad1= document.querySelector(".dd10_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 10:
            
            break;
        case 11:
            
            break;

    } 
    
}

function atras(){
    if (mes_actual >= 1) {
        var lunes1 = document.querySelector(".lunes")
        var martes1 = document.querySelector(".martes")
        var miercoles1 = document.querySelector(".miercoles")
        var jueves1 = document.querySelector(".jueves")
        var viernes1 = document.querySelector(".viernes")
        var sabado1 = document.querySelector(".sabado")
        var domingo1 = document.querySelector(".domingo")
        lunes1.innerHTML = ``
        martes1.innerHTML = ``
        miercoles1.innerHTML = ``
        jueves1.innerHTML = ``
        viernes1.innerHTML = ``
        sabado1.innerHTML = ``
        domingo1.innerHTML = ``
        mes_actual = mes_actual - 1
        lunes1.innerHTML += `<p>Lu</p>`
        martes1.innerHTML += `<p>Ma</p>`
        miercoles1.innerHTML += `<p>Mi</p>`
        jueves1.innerHTML += `<p>Ju</p>`
        viernes1.innerHTML += `<p>Vi</p>`
        sabado1.innerHTML += `<p>Sa</p>`
        domingo1.innerHTML += `<p>Do</p>`
        var mostrar_mes = document.querySelector(".mostrarmes")
        mostrar_mes.innerHTML = `<h2>${meses[mes_actual]} 2022</h2>`
        for (let index = 0; index < 6; index++) {
            numero_dia[0] = dia1 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[0] <= 0 || numero_dia[0]>diasmeses[0]) {
                lunes1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                lunes1.innerHTML += `
                <div class="dd${numero_dia[0]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" >
                <h4>${numero_dia[0]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +1 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                martes1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                martes1.innerHTML += `
                <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
                <h4>${numero_dia[1]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +2 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                miercoles1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                miercoles1.innerHTML += `
            <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
            <h4>${numero_dia[1]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +3 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                jueves1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                jueves1.innerHTML += `
            <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
            <h4>${numero_dia[1]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +4 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                viernes1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                viernes1.innerHTML += `
            <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
            <h4>${numero_dia[1]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +5 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                sabado1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                sabado1.innerHTML += `
            <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
            <h4>${numero_dia[1]}</h4>
            </div> `
            }
        }
        
        for (let index = 0; index < 6; index++) {
            numero_dia[1] = dia1 +6 - diasemanacomienzo[mes_actual] + (7 * index)
            if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
                domingo1.innerHTML += `
            <div class=" container-fluid cuadro 8 p-0 my-1">
                
            </div> `
            } else {
                domingo1.innerHTML += `
            <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
            <h4>${numero_dia[1]}</h4>
            </div> `
            }
        } 
    }
    
    switch (mes_actual) {
        case 0:
            var actvidad1= document.querySelector(".dd10_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">4</h4> `

            var actvidad1= document.querySelector(".dd19_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">13</h4> `

            var actvidad1= document.querySelector(".dd17_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">25</h4> `

            var actvidad1= document.querySelector(".dd28_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">30</h4> `
            break;
        case 1:
            var actvidad1= document.querySelector(".dd10_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">4</h4> `

            var actvidad1= document.querySelector(".dd19_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">13</h4> `

            var actvidad1= document.querySelector(".dd17_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">25</h4> `

            var actvidad1= document.querySelector(".dd25_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">30</h4> `    


            break;
        case 2:
            var actvidad1= document.querySelector(".dd15_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd4_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">4</h4> `

            var actvidad1= document.querySelector(".dd13_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">13</h4> `

            var actvidad1= document.querySelector(".dd25_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">25</h4> `

            var actvidad1= document.querySelector(".dd30_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">30</h4> `

            break;
        case 3:
            var actvidad1= document.querySelector(".dd10_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 4:
            var actvidad1= document.querySelector(".dd10_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 5:
            var actvidad1= document.querySelector(".dd10_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 6:
            var actvidad1= document.querySelector(".dd10_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 7:
            var actvidad1= document.querySelector(".dd10_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 8:
            var actvidad1= document.querySelector(".dd10_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 9:
            var actvidad1= document.querySelector(".dd10_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 10:
            
            break;
        case 11:
            
            break;

    }   

}

function today() {
var lunes1 = document.querySelector(".lunes")
var martes1 = document.querySelector(".martes")
var miercoles1 = document.querySelector(".miercoles")
var jueves1 = document.querySelector(".jueves")
var viernes1 = document.querySelector(".viernes")
var sabado1 = document.querySelector(".sabado")
var domingo1 = document.querySelector(".domingo")
lunes1.innerHTML = ``
        martes1.innerHTML = ``
        miercoles1.innerHTML = ``
        jueves1.innerHTML = ``
        viernes1.innerHTML = ``
        sabado1.innerHTML = ``
        domingo1.innerHTML = ``

        lunes1.innerHTML += `<p>Lu</p>`
        martes1.innerHTML += `<p>Ma</p>`
        miercoles1.innerHTML += `<p>Mi</p>`
        jueves1.innerHTML += `<p>Ju</p>`
        viernes1.innerHTML += `<p>Vi</p>`
        sabado1.innerHTML += `<p>Sa</p>`
        domingo1.innerHTML += `<p>Do</p>`
var dia1 = 1
const diasmeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","octubre","Noviembre","Diciembre"]
const diasemanacomienzo = [5,1,1,3,6,2,4,0,3,5,1,3]
var numero_dia = [0,0,0,0,0,0,0]

mes_actual= 3
var mostrar_mes = document.querySelector(".mostrarmes")
mostrar_mes.innerHTML = `<h2>${meses[mes_actual]} 2022</h2>`

for (let index = 0; index < 6; index++) {
    numero_dia[0] = dia1 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[0] <= 0 || numero_dia[0]>diasmeses[0]) {
        lunes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        lunes1.innerHTML += `
        <div class="dd${numero_dia[0]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" >
        <h4>${numero_dia[0]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +1 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        martes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        martes1.innerHTML += `
        <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
        <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +2 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        miercoles1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        miercoles1.innerHTML += `
    <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
    <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +3 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        jueves1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        jueves1.innerHTML += `
    <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
    <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +4 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        viernes1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        viernes1.innerHTML += `
    <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
    <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +5 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        sabado1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        sabado1.innerHTML += `
    <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
    <h4>${numero_dia[1]}</h4>
    </div> `
    }
}

for (let index = 0; index < 6; index++) {
    numero_dia[1] = dia1 +6 - diasemanacomienzo[mes_actual] + (7 * index)
    if (numero_dia[1] <= 0 || numero_dia[1]>diasmeses[0]) {
        domingo1.innerHTML += `
    <div class=" container-fluid cuadro 8 p-0 my-1">
        
    </div> `
    } else {
        domingo1.innerHTML += `
    <div class="dd${numero_dia[1]}_${mes_actual} container-fluid cuadro 8 p-0 my-1" onclick="nada()"">
    <h4>${numero_dia[1]}</h4>
    </div> `
    }
}
switch (mes_actual) {
    case 0:
        var actvidad1= document.querySelector(".dd10_0")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_0")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

        var actvidad1= document.querySelector(".dd19_0")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

        var actvidad1= document.querySelector(".dd17_0")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

        var actvidad1= document.querySelector(".dd28_0")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> `
        break;
    case 1:
        var actvidad1= document.querySelector(".dd10_1")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_1")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

        var actvidad1= document.querySelector(".dd19_1")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

        var actvidad1= document.querySelector(".dd17_1")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

        var actvidad1= document.querySelector(".dd25_1")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> `    


        break;
    case 2:
        var actvidad1= document.querySelector(".dd15_2")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
        
        var actvidad1= document.querySelector(".dd4_2")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

        var actvidad1= document.querySelector(".dd13_2")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

        var actvidad1= document.querySelector(".dd25_2")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

        var actvidad1= document.querySelector(".dd30_2")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> `

        break;
    case 3:
        var actvidad1= document.querySelector(".dd10_3")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_3")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

        var actvidad1= document.querySelector(".dd19_3")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

        var actvidad1= document.querySelector(".dd17_3")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

        var actvidad1= document.querySelector(".dd28_3")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
        break;
    case 4:
        var actvidad1= document.querySelector(".dd10_4")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_4")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

        var actvidad1= document.querySelector(".dd19_4")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

        var actvidad1= document.querySelector(".dd17_4")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

        var actvidad1= document.querySelector(".dd28_4")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
        break;
    case 5:
        var actvidad1= document.querySelector(".dd10_5")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_5")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

        var actvidad1= document.querySelector(".dd19_5")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

        var actvidad1= document.querySelector(".dd17_5")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

        var actvidad1= document.querySelector(".dd28_5")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
        break;
    case 6:
        var actvidad1= document.querySelector(".dd10_6")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_6")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

        var actvidad1= document.querySelector(".dd19_6")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

        var actvidad1= document.querySelector(".dd17_6")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

        var actvidad1= document.querySelector(".dd28_6")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
        break;
    case 7:
        var actvidad1= document.querySelector(".dd10_7")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_7")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

        var actvidad1= document.querySelector(".dd19_7")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

        var actvidad1= document.querySelector(".dd17_7")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

        var actvidad1= document.querySelector(".dd28_7")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
        break;
    case 8:
        var actvidad1= document.querySelector(".dd10_8")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_8")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

        var actvidad1= document.querySelector(".dd19_8")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

        var actvidad1= document.querySelector(".dd17_8")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

        var actvidad1= document.querySelector(".dd28_8")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
        break;
    case 9:
        var actvidad1= document.querySelector(".dd10_9")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_9")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

        var actvidad1= document.querySelector(".dd19_9")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

        var actvidad1= document.querySelector(".dd17_9")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

        var actvidad1= document.querySelector(".dd28_9")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
        break;
    case 10:
        
        break;
    case 11:
        
        break;

}
}

    switch (mes_actual) {
        case 0:
            var actvidad1= document.querySelector(".dd10_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">4</h4> `

            var actvidad1= document.querySelector(".dd19_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">13</h4> `

            var actvidad1= document.querySelector(".dd17_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">25</h4> `

            var actvidad1= document.querySelector(".dd28_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">30</h4> `
            break;
        case 1:
            var actvidad1= document.querySelector(".dd10_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">4</h4> `

            var actvidad1= document.querySelector(".dd19_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">13</h4> `

            var actvidad1= document.querySelector(".dd17_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">25</h4> `

            var actvidad1= document.querySelector(".dd25_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">30</h4> `    


            break;
        case 2:
            var actvidad1= document.querySelector(".dd15_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd4_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">4</h4> `

            var actvidad1= document.querySelector(".dd13_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">13</h4> `

            var actvidad1= document.querySelector(".dd25_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">25</h4> `

            var actvidad1= document.querySelector(".dd30_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">30</h4> `

            break;
        case 3:
            var actvidad1= document.querySelector(".dd10_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 4:
            var actvidad1= document.querySelector(".dd10_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 5:
            var actvidad1= document.querySelector(".dd10_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 6:
            var actvidad1= document.querySelector(".dd10_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 7:
            var actvidad1= document.querySelector(".dd10_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 8:
            var actvidad1= document.querySelector(".dd10_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 9:
            var actvidad1= document.querySelector(".dd10_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">15</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">4</h4> `

            var actvidad1= document.querySelector(".dd19_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">13</h4> `

            var actvidad1= document.querySelector(".dd17_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">25</h4> `

            var actvidad1= document.querySelector(".dd28_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">30</h4> ` 
            break;
        case 10:
            
            break;
        case 11:
            
            break;

    }



function actividad1() {
    console.log(1);
}

function actividad2(){
    console.log(2);
}

function actividad3(){
    console.log(3);
}
function actividad4(){
    console.log(4);
}
function actividad5(){
    console.log(5);
}

function actividadv(){
    console.log("esta actividad ya pasò");
}

function nada(){
}












