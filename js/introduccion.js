let boton_1 = document.querySelector(".boton1")
let boton_2 = document.querySelector(".boton2")
let x = 0;

function b2(){
    if (x==0) {
        x=1
        boton_2.innerHTML = `SI`
        boton_1.innerHTML = `NO`
    }
    
}

function b1() {
    if (x==1) {
        x=0
        boton_1.innerHTML = `SI`
        boton_2.innerHTML = `NO`
    }
}

function alerta(){
Swal.fire({
    icon: 'warning',
    title: 'No intente las actividades que encuentras en esta pagina sin la supervisión de un profesional',
    width: 550,
    height: 500,
    padding: '3em',
    background: '#00000085',
        color: '#fff',
        confirmButtonColor: '#000',
        backdrop: `
        rgba(0,0,123,0.4)
        `,
  }).then((result) => {
    if (result.isConfirmed) {
        window.location.href='../inicio.html'
    }
  })
  
}