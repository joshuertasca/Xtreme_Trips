function contactanos(){
    Swal.fire({
      html:
      '<div >'+
      ' <h1>contáctanos</h1>'+
      ' <label for="correo" class="form-label">Ingresa tu correo electrónico</label>'+
      ' <input type="email" class="form-control" id="correo">'+
      ' <label for="nombre_apellido" class="form-label">Ingresa tu nombre y apellido</label>'+
      ' <input type="text" class="form-control" id="nombre_apellido">'+
      ' <label for="region" class="form-label">en que región de Colombia te encuentras</label>'+
      '     <select class="form-select" id="region">'+
      '         <option selected disabled>Seleccione su region...</option>'+
      '         <option value="mujer">Andina</option>'+
      '         <option value="hombre">Caribe</option>'+
      '         <option value="mujer">Orinoquia</option>'+
      '         <option value="hombre">Pacifico</option>'+
      '         <option value="hombre">Amazonias</option>'+
                '</select>'+
            '<label for="telefono" class="form-label">Ingrese un su teléfono</label>'+
        '<input type="number" class="form-control" id="telefono">'+
        '<label for="nota" class="form-label">Cuéntanos en que podemos ayudarte</label>'+
        '<input id="boton_nombre" type="text" class="form-control" id="nota">'+
    '</div>',

        width: 600,
        padding: '3em',
        background: '#00000085',
        color: '#fff',
        confirmButtonColor: '#000',
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
            timer: 3500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Su mensaje ha sido enviado, recibirá respuesta en el correo '+valor + ' en las próximas 24 horas',
            background: '#00000085',
        color: '#fff',
        confirmButtonColor: '#000',
        
          })

        }
      })
      
    }

function whatsapp() {
  
  Swal.fire({
    title: 'Ir a chat de Whatsapp',
    text: "se redireccionará la página a https://web.whatsapp.com/",
    icon: 'question',
    showCancelButton: true,
    background: '#00000085',
        color: '#fff',
        confirmButtonColor: '#000',
        backdrop: `
        rgba(0,0,123,0.4)
        `,
    confirmButtonText: 'Si, abandonar página',
    cancelButtonText: 'No, permanecer en esta página'
  }).then((result) => {
    if (result.isConfirmed) {
      
        window.location.href='https:wa.me/573114610919'
       
    }
  })
  
}
