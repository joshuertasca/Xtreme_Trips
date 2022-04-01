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
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">8</h4> `

            var actvidad1= document.querySelector(".dd19_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">19</h4> `

            var actvidad1= document.querySelector(".dd17_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">17</h4> `

            var actvidad1= document.querySelector(".dd28_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">28</h4> `
            break;
        case 1:
            var actvidad1= document.querySelector(".dd10_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">8</h4> `

            var actvidad1= document.querySelector(".dd19_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">19</h4> `

            var actvidad1= document.querySelector(".dd17_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">17</h4> `

            var actvidad1= document.querySelector(".dd25_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">28</h4> `    


            break;
        case 2:
            var actvidad1= document.querySelector(".dd10_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">8</h4> `

            var actvidad1= document.querySelector(".dd19_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">19</h4> `

            var actvidad1= document.querySelector(".dd17_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">17</h4> `

            var actvidad1= document.querySelector(".dd28_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">28</h4> `

            break;
        case 3:
            var actvidad1= document.querySelector(".dd10_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 4:
            var actvidad1= document.querySelector(".dd10_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 5:
            var actvidad1= document.querySelector(".dd10_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 6:
            var actvidad1= document.querySelector(".dd10_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 7:
            var actvidad1= document.querySelector(".dd10_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 8:
            var actvidad1= document.querySelector(".dd10_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 9:
            var actvidad1= document.querySelector(".dd10_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
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
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">8</h4> `

            var actvidad1= document.querySelector(".dd19_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">19</h4> `

            var actvidad1= document.querySelector(".dd17_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">17</h4> `

            var actvidad1= document.querySelector(".dd28_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">28</h4> `
            break;
        case 1:
            var actvidad1= document.querySelector(".dd10_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">8</h4> `

            var actvidad1= document.querySelector(".dd19_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">19</h4> `

            var actvidad1= document.querySelector(".dd17_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">17</h4> `

            var actvidad1= document.querySelector(".dd25_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">28</h4> `    


            break;
        case 2:
            var actvidad1= document.querySelector(".dd10_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">8</h4> `

            var actvidad1= document.querySelector(".dd19_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">19</h4> `

            var actvidad1= document.querySelector(".dd17_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">17</h4> `

            var actvidad1= document.querySelector(".dd28_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">28</h4> `

            break;
        case 3:
            var actvidad1= document.querySelector(".dd10_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 4:
            var actvidad1= document.querySelector(".dd10_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 5:
            var actvidad1= document.querySelector(".dd10_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 6:
            var actvidad1= document.querySelector(".dd10_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 7:
            var actvidad1= document.querySelector(".dd10_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 8:
            var actvidad1= document.querySelector(".dd10_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 9:
            var actvidad1= document.querySelector(".dd10_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
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
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_0")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

        var actvidad1= document.querySelector(".dd19_0")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

        var actvidad1= document.querySelector(".dd17_0")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

        var actvidad1= document.querySelector(".dd28_0")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> `
        break;
    case 1:
        var actvidad1= document.querySelector(".dd10_1")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_1")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

        var actvidad1= document.querySelector(".dd19_1")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

        var actvidad1= document.querySelector(".dd17_1")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

        var actvidad1= document.querySelector(".dd25_1")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> `    


        break;
    case 2:
        var actvidad1= document.querySelector(".dd10_2")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_2")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

        var actvidad1= document.querySelector(".dd19_2")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

        var actvidad1= document.querySelector(".dd17_2")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

        var actvidad1= document.querySelector(".dd28_2")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> `

        break;
    case 3:
        var actvidad1= document.querySelector(".dd10_3")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_3")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

        var actvidad1= document.querySelector(".dd19_3")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

        var actvidad1= document.querySelector(".dd17_3")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

        var actvidad1= document.querySelector(".dd28_3")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
        break;
    case 4:
        var actvidad1= document.querySelector(".dd10_4")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_4")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

        var actvidad1= document.querySelector(".dd19_4")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

        var actvidad1= document.querySelector(".dd17_4")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

        var actvidad1= document.querySelector(".dd28_4")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
        break;
    case 5:
        var actvidad1= document.querySelector(".dd10_5")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_5")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

        var actvidad1= document.querySelector(".dd19_5")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

        var actvidad1= document.querySelector(".dd17_5")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

        var actvidad1= document.querySelector(".dd28_5")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
        break;
    case 6:
        var actvidad1= document.querySelector(".dd10_6")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_6")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

        var actvidad1= document.querySelector(".dd19_6")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

        var actvidad1= document.querySelector(".dd17_6")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

        var actvidad1= document.querySelector(".dd28_6")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
        break;
    case 7:
        var actvidad1= document.querySelector(".dd10_7")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_7")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

        var actvidad1= document.querySelector(".dd19_7")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

        var actvidad1= document.querySelector(".dd17_7")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

        var actvidad1= document.querySelector(".dd28_7")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
        break;
    case 8:
        var actvidad1= document.querySelector(".dd10_8")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_8")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

        var actvidad1= document.querySelector(".dd19_8")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

        var actvidad1= document.querySelector(".dd17_8")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

        var actvidad1= document.querySelector(".dd28_8")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
        break;
    case 9:
        var actvidad1= document.querySelector(".dd10_9")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
        
        var actvidad1= document.querySelector(".dd8_9")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

        var actvidad1= document.querySelector(".dd19_9")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

        var actvidad1= document.querySelector(".dd17_9")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

        var actvidad1= document.querySelector(".dd28_9")
        actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
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
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">8</h4> `

            var actvidad1= document.querySelector(".dd19_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">19</h4> `

            var actvidad1= document.querySelector(".dd17_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">17</h4> `

            var actvidad1= document.querySelector(".dd28_0")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">28</h4> `
            break;
        case 1:
            var actvidad1= document.querySelector(".dd10_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">8</h4> `

            var actvidad1= document.querySelector(".dd19_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">19</h4> `

            var actvidad1= document.querySelector(".dd17_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">17</h4> `

            var actvidad1= document.querySelector(".dd25_1")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">28</h4> `    


            break;
        case 2:
            var actvidad1= document.querySelector(".dd10_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">8</h4> `

            var actvidad1= document.querySelector(".dd19_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">19</h4> `

            var actvidad1= document.querySelector(".dd17_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">17</h4> `

            var actvidad1= document.querySelector(".dd28_2")
            actvidad1.innerHTML = `<h4 class="bg-danger" onclick="actividadv()">28</h4> `

            break;
        case 3:
            var actvidad1= document.querySelector(".dd10_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_3")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 4:
            var actvidad1= document.querySelector(".dd10_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_4")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 5:
            var actvidad1= document.querySelector(".dd10_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_5")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 6:
            var actvidad1= document.querySelector(".dd10_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_6")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 7:
            var actvidad1= document.querySelector(".dd10_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_7")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 8:
            var actvidad1= document.querySelector(".dd10_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_8")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 9:
            var actvidad1= document.querySelector(".dd10_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad1()">10</h4> ` 
            
            var actvidad1= document.querySelector(".dd8_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad2()">8</h4> `

            var actvidad1= document.querySelector(".dd19_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad3()">19</h4> `

            var actvidad1= document.querySelector(".dd17_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad4()">17</h4> `

            var actvidad1= document.querySelector(".dd28_9")
            actvidad1.innerHTML = `<h4 class="bg-primary" onclick="actividad5()">28</h4> ` 
            break;
        case 10:
            
            break;
        case 11:
            
            break;

    }



function actividad1() {
    Swal.fire({
        title: 'Buceo',
        text: '¿Desea reservar la actividad de buceo para esta fecha?',
        imageUrl: '../img/actividades/buceo.jpg',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: true,
        confirmButtonText: 'Reservar',
        cancelButtonText: 'Cancelar',
        background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
        
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html:
                    '<form>' +
                    '<div class="uno fw-bold mb-3">' +
                    '<label for="email1" class="form-label">Correo eléctronico</label>' +
                    '<input type="email" class="form-control" id="email1" aria-describedby="emailHelp"></div>' +
        
                    '<div class="dos fw-bold w-50 container d-flex flex-column text-center justify-content-center align-content-center mb-3 mb-3">' +
                    '<label for="city" class="form-label">Ciudad</label>' +
                    '<input type="text" class="form-control" id="city" aria-describedby="emailHelp">' +
                    '</div>' +
        
                    '<div class=" container d-flex flex-row">' +
                    '<div class="tres px-3 fw-bold mb-3">' +
                    '<label for="personasadultas" class="form-label">N° de adultos</label>' +
                    '<input type="number" class="form-control" id="personasadultas" aria-describedby="emailHelp"></div>' +
        
                    '<div class="cuatro fw-bold mb-3">' +
                    '<label for="reservaniños" class="form-label">N° de menores de edad</label>' +
                    '<input type="number" class="form-control" id="reservaniños" aria-describedby="emailHelp">' +
                    '</div>' +
                    '</div>' +
        
                    '<div class="cinco  fw-bold w-50 container d-flex flex-column text-center justify-content-center align-content-center mb-3">' +
                    '<label for="date" class=" form-label ">Selecciona la fecha</label>' +
                    '<select id="date" class=" fechas form-select">' +
                    '<option>10 '+ meses[mes_actual]+' 2022</option>' +
                    '<option>10 abril 2022</option>' +
                    '<option>17 abril 2022</option>' +
                    '<option>24 abril 2022</option>' +
                    '</select>' +
                    '</div>' +
        
                    '<div id="formadepago">' +
                    '<div class=" seis form-check">' +
                    '<h5>Medio de pago</h5>' +
                    '<input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" onclick="" checked>Crédito' +
                    '<label class="form-check-label" for="radio1"></label>' +
                    '</div>' +
                    '<div class="siete form-check">' +
                    '<input type="radio" class="form-check-input" id="radio2" name="optradio" onclick="" value="option2">Débito' +
                    '<label class="form-check-label" for="radio2"></label>' +
                    '</div>' +
                    '<div class="ocho form-check">' +
                    '<input type="radio" class="form-check-input" id="radio3" onclick="" name="optradio" value="option3">PSE' +
                    '<label class="form-check-label" for="radio3"></label>' +
                    '</div>' +
                    '</div>' +
                    '</form>',
                confirmButtonText: 'Enviar Datos',
                background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
            })
        }
      })



}

function actividad2(){
    Swal.fire({
        title: 'Canyoning',
        text: '¿Desea reservar la actividad de canyoning para esta fecha?',
        imageUrl: '../img/actividades/canyoning.png',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: true,
        confirmButtonText: 'Reservar',
        cancelButtonText: 'Cancelar',
        background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
      }) .then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html:
                    '<form>' +
                    '<div class="uno fw-bold mb-3">' +
                    '<label for="email1" class="form-label">Correo eléctronico</label>' +
                    '<input type="email" class="form-control" id="email1" aria-describedby="emailHelp"></div>' +
        
                    '<div class="dos fw-bold w-50 container d-flex flex-column text-center justify-content-center align-content-center mb-3 mb-3">' +
                    '<label for="city" class="form-label">Ciudad</label>' +
                    '<input type="text" class="form-control" id="city" aria-describedby="emailHelp">' +
                    '</div>' +
        
                    '<div class=" container d-flex flex-row">' +
                    '<div class="tres px-3 fw-bold mb-3">' +
                    '<label for="personasadultas" class="form-label">N° de adultos</label>' +
                    '<input type="number" class="form-control" id="personasadultas" aria-describedby="emailHelp"></div>' +
        
                    '<div class="cuatro fw-bold mb-3">' +
                    '<label for="reservaniños" class="form-label">N° de menores de edad</label>' +
                    '<input type="number" class="form-control" id="reservaniños" aria-describedby="emailHelp">' +
                    '</div>' +
                    '</div>' +
        
                    '<div class="cinco  fw-bold w-50 container d-flex flex-column text-center justify-content-center align-content-center mb-3">' +
                    '<label for="date" class=" form-label ">Selecciona la fecha</label>' +
                    '<select id="date" class=" fechas form-select">' +
                    '<option>8 '+ meses[mes_actual]+' 2022</option>' +
                    '<option>10 abril 2022</option>' +
                    '<option>17 abril 2022</option>' +
                    '<option>24 abril 2022</option>' +
                    '</select>' +
                    '</div>' +
        
                    '<div id="formadepago">' +
                    '<div class=" seis form-check">' +
                    '<h5>Medio de pago</h5>' +
                    '<input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" onclick="" checked>Crédito' +
                    '<label class="form-check-label" for="radio1"></label>' +
                    '</div>' +
                    '<div class="siete form-check">' +
                    '<input type="radio" class="form-check-input" id="radio2" name="optradio" onclick="" value="option2">Débito' +
                    '<label class="form-check-label" for="radio2"></label>' +
                    '</div>' +
                    '<div class="ocho form-check">' +
                    '<input type="radio" class="form-check-input" id="radio3" onclick="" name="optradio" value="option3">PSE' +
                    '<label class="form-check-label" for="radio3"></label>' +
                    '</div>' +
                    '</div>' +
                    '</form>',
                confirmButtonText: 'Enviar Datos',
                background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
            })
        }
      })





}

function actividad3(){
    Swal.fire({
        title: 'Trekking',
        text: '¿Desea reservar la actividad de Trekking para esta fecha?',
        imageUrl: '../img/actividades/treakking.jpg',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: true,
        confirmButtonText: 'Reservar',
        cancelButtonText: 'Cancelar',
        background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
      }) .then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html:
                    '<form>' +
                    '<div class="uno fw-bold mb-3">' +
                    '<label for="email1" class="form-label">Correo eléctronico</label>' +
                    '<input type="email" class="form-control" id="email1" aria-describedby="emailHelp"></div>' +
        
                    '<div class="dos fw-bold w-50 container d-flex flex-column text-center justify-content-center align-content-center mb-3 mb-3">' +
                    '<label for="city" class="form-label">Ciudad</label>' +
                    '<input type="text" class="form-control" id="city" aria-describedby="emailHelp">' +
                    '</div>' +
        
                    '<div class=" container d-flex flex-row">' +
                    '<div class="tres px-3 fw-bold mb-3">' +
                    '<label for="personasadultas" class="form-label">N° de adultos</label>' +
                    '<input type="number" class="form-control" id="personasadultas" aria-describedby="emailHelp"></div>' +
        
                    '<div class="cuatro fw-bold mb-3">' +
                    '<label for="reservaniños" class="form-label">N° de menores de edad</label>' +
                    '<input type="number" class="form-control" id="reservaniños" aria-describedby="emailHelp">' +
                    '</div>' +
                    '</div>' +
        
                    '<div class="cinco  fw-bold w-50 container d-flex flex-column text-center justify-content-center align-content-center mb-3">' +
                    '<label for="date" class=" form-label ">Selecciona la fecha</label>' +
                    '<select id="date" class=" fechas form-select">' +
                    '<option>19 '+ meses[mes_actual]+' 2022</option>' +
                    '<option>10 abril 2022</option>' +
                    '<option>17 abril 2022</option>' +
                    '<option>24 abril 2022</option>' +
                    '</select>' +
                    '</div>' +
        
                    '<div id="formadepago">' +
                    '<div class=" seis form-check">' +
                    '<h5>Medio de pago</h5>' +
                    '<input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" onclick="" checked>Crédito' +
                    '<label class="form-check-label" for="radio1"></label>' +
                    '</div>' +
                    '<div class="siete form-check">' +
                    '<input type="radio" class="form-check-input" id="radio2" name="optradio" onclick="" value="option2">Débito' +
                    '<label class="form-check-label" for="radio2"></label>' +
                    '</div>' +
                    '<div class="ocho form-check">' +
                    '<input type="radio" class="form-check-input" id="radio3" onclick="" name="optradio" value="option3">PSE' +
                    '<label class="form-check-label" for="radio3"></label>' +
                    '</div>' +
                    '</div>' +
                    '</form>',
                confirmButtonText: 'Enviar Datos',
                background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
            })
        }
      })






}
function actividad4(){
    Swal.fire({
        title: 'Paracaidismo',
        text: '¿Desea reservar la actividad de paracaidismo para esta fecha?',
        imageUrl: '../img/actividades/paracaidismo2.jpeg',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: true,
        confirmButtonText: 'Reservar',
        cancelButtonText: 'Cancelar',
        background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
      }) .then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html:
                    '<form>' +
                    '<div class="uno fw-bold mb-3">' +
                    '<label for="email1" class="form-label">Correo eléctronico</label>' +
                    '<input type="email" class="form-control" id="email1" aria-describedby="emailHelp"></div>' +
        
                    '<div class="dos fw-bold w-50 container d-flex flex-column text-center justify-content-center align-content-center mb-3 mb-3">' +
                    '<label for="city" class="form-label">Ciudad</label>' +
                    '<input type="text" class="form-control" id="city" aria-describedby="emailHelp">' +
                    '</div>' +
        
                    '<div class=" container d-flex flex-row">' +
                    '<div class="tres px-3 fw-bold mb-3">' +
                    '<label for="personasadultas" class="form-label">N° de adultos</label>' +
                    '<input type="number" class="form-control" id="personasadultas" aria-describedby="emailHelp"></div>' +
        
                    '<div class="cuatro fw-bold mb-3">' +
                    '<label for="reservaniños" class="form-label">N° de menores de edad</label>' +
                    '<input type="number" class="form-control" id="reservaniños" aria-describedby="emailHelp">' +
                    '</div>' +
                    '</div>' +
        
                    '<div class="cinco  fw-bold w-50 container d-flex flex-column text-center justify-content-center align-content-center mb-3">' +
                    '<label for="date" class=" form-label ">Selecciona la fecha</label>' +
                    '<select id="date" class=" fechas form-select">' +
                    '<option>17 '+ meses[mes_actual]+' 2022</option>' +
                    '<option>10 abril 2022</option>' +
                    '<option>17 abril 2022</option>' +
                    '<option>24 abril 2022</option>' +
                    '</select>' +
                    '</div>' +
        
                    '<div id="formadepago">' +
                    '<div class=" seis form-check">' +
                    '<h5>Medio de pago</h5>' +
                    '<input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" onclick="" checked>Crédito' +
                    '<label class="form-check-label" for="radio1"></label>' +
                    '</div>' +
                    '<div class="siete form-check">' +
                    '<input type="radio" class="form-check-input" id="radio2" name="optradio" onclick="" value="option2">Débito' +
                    '<label class="form-check-label" for="radio2"></label>' +
                    '</div>' +
                    '<div class="ocho form-check">' +
                    '<input type="radio" class="form-check-input" id="radio3" onclick="" name="optradio" value="option3">PSE' +
                    '<label class="form-check-label" for="radio3"></label>' +
                    '</div>' +
                    '</div>' +
                    '</form>',
                confirmButtonText: 'Enviar Datos',
                background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
            })
        }
      })




}
function actividad5(){
    Swal.fire({
        title: 'Climbing',
        text: '¿Desea reservar la actividad de escalada para esta fecha?',
        imageUrl: '../img/actividades/escalada.jpg',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: true,
        confirmButtonText: 'Reservar',
        cancelButtonText: 'Cancelar',
        background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
      }) .then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                html:
                    '<form>' +
                    '<div class="uno fw-bold mb-3">' +
                    '<label for="email1" class="form-label">Correo eléctronico</label>' +
                    '<input type="email" class="form-control" id="email1" aria-describedby="emailHelp"></div>' +
        
                    '<div class="dos fw-bold w-50 container d-flex flex-column text-center justify-content-center align-content-center mb-3 mb-3">' +
                    '<label for="city" class="form-label">Ciudad</label>' +
                    '<input type="text" class="form-control" id="city" aria-describedby="emailHelp">' +
                    '</div>' +
        
                    '<div class=" container d-flex flex-row">' +
                    '<div class="tres px-3 fw-bold mb-3">' +
                    '<label for="personasadultas" class="form-label">N° de adultos</label>' +
                    '<input type="number" class="form-control" id="personasadultas" aria-describedby="emailHelp"></div>' +
        
                    '<div class="cuatro fw-bold mb-3">' +
                    '<label for="reservaniños" class="form-label">N° de menores de edad</label>' +
                    '<input type="number" class="form-control" id="reservaniños" aria-describedby="emailHelp">' +
                    '</div>' +
                    '</div>' +
        
                    '<div class="cinco  fw-bold w-50 container d-flex flex-column text-center justify-content-center align-content-center mb-3">' +
                    '<label for="date" class=" form-label ">Selecciona la fecha</label>' +
                    '<select id="date" class=" fechas form-select">' +
                    '<option>28 '+ meses[mes_actual]+' 2022</option>' +
                    '<option>10 abril 2022</option>' +
                    '<option>17 abril 2022</option>' +
                    '<option>24 abril 2022</option>' +
                    '</select>' +
                    '</div>' +
        
                    '<div id="formadepago">' +
                    '<div class=" seis form-check">' +
                    '<h5>Medio de pago</h5>' +
                    '<input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" onclick="" checked>Crédito' +
                    '<label class="form-check-label" for="radio1"></label>' +
                    '</div>' +
                    '<div class="siete form-check">' +
                    '<input type="radio" class="form-check-input" id="radio2" name="optradio" onclick="" value="option2">Débito' +
                    '<label class="form-check-label" for="radio2"></label>' +
                    '</div>' +
                    '<div class="ocho form-check">' +
                    '<input type="radio" class="form-check-input" id="radio3" onclick="" name="optradio" value="option3">PSE' +
                    '<label class="form-check-label" for="radio3"></label>' +
                    '</div>' +
                    '</div>' +
                    '</form>',
                confirmButtonText: 'Enviar Datos',
                background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
            })
        }
      })




}

function actividadv(){
    Swal.fire({
        text: 'Esta Actividad ya se realizó',
        background: '#00000085',
                color: '#fff',
                confirmButtonColor: '#000',
    })
    
}

function nada(){
   
}












