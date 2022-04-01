function contactanos(){
    Swal.fire({
      html:
      '<div >'+
      ' <h1>contactanos</h1>'+
      ' <label for="correo" class="form-label">Ingresa tu correo electronico</label>'+
      ' <input type="email" class="form-control" id="correo">'+
      ' <label for="nombre_apellido" class="form-label">Ingresa tu nombre y apellido</label>'+
      ' <input type="text" class="form-control" id="nombre_apellido">'+
      ' <label for="region" class="form-label">en que region de Colombia te encuentras</label>'+
      '     <select class="form-select" id="region">'+
      '         <option selected disabled>Seleccione su region...</option>'+
      '         <option value="mujer">Andina</option>'+
      '         <option value="hombre">Caribe</option>'+
      '         <option value="mujer">Orinoquia</option>'+
      '         <option value="hombre">Pacifico</option>'+
      '         <option value="hombre">Amazonias</option>'+
                '</select>'+
            '<label for="telefono" class="form-label">Ingrese un su telefono</label>'+
        '<input type="number" class="form-control" id="telefono">'+
        '<label for="nota" class="form-label">Cuentanos en que podemos ayudarte</label>'+
        '<input id="boton_nombre" type="text" class="form-control" id="nota">'+
    '</div>',

        width: 600,
        padding: '3em',
        color: '#20DE20',
        background: '#99ecf1 ',
        backdrop: `
        rgba(0,0,123,0.4)
        `,
        confirmButtonText: 'Enviar mensaje',
      }).then((result) => {
        if (result.isConfirmed) {
          
          let valor = document.querySelector('#correo').value
          console.log(valor)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'su mensaje ha sido enviado recibirá respuesta en el correo '+valor + ' en las proximas 24 horas'
          })

        }
      })
      
    }

function whatsapp() {
  
  Swal.fire({
    title: 'Ir a chat de Whatsapp',
    text: "se redigira la pagina a https://web.whatsapp.com/",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, abandonar pagina',
    cancelButtonText: 'No, permanecer en esta pagina'
  }).then((result) => {
    if (result.isConfirmed) {
      
        window.location.href='https:wa.me/573114610919'
       
    }
  })
  
}