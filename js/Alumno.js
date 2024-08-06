const UnirmeClaseAlumno = document.getElementById("UnirmeClaseAlumno");
const Input = UnirmeClase = document.querySelectorAll("#UnirmeClaseAlumno input");


function redireccion() {
  window.location = "Alumno.php";
}



function Unirme(matricula){
	var CodigoClase = document.getElementById("addcodigo").value;
	var InputClase = document.getElementById("addcodigo");
	var tam = CodigoClase.length;
	var mat = String(matricula);
	if (  (tam	< 6 ))
	{
	   InputClase.classList.add("is-invalid");
       InputClase.classList.remove("is-valid");

       

	}else
	{
       datos = {"CodigoClase":CodigoClase, "matricula":mat};


          $.ajax({
      url: 'JoinClaseAlumno.php',
      type: 'POST',
      data: datos
      }).done(function(respuesta){
		if (respuesta.estado === "ok") {
			console.log(JSON.stringify(respuesta));

			var codigo = respuesta.codigo,
			filas = respuesta.fila;

		 }else{
		 		Swal.fire({
			  icon: 'warning',
			  title: 'Opps!!',
			  text: 'No se Encontro la clase o Intentas Ingresar a una clase en la que ya estas',
			  showConfirmButton: true,
			  timer: 4000
			})

		 }


		 if (filas == 1)
      	{
      		 $.ajax({
     		 url: 'AlumnoClaseProfesor.php',
      		 type: 'POST',
     		 data: 'CodigoClase=' + CodigoClase + '&matricula=' + matricula,
             success: function(data) 
                 {
                  
             
                }
            }); 

      		 Swal.fire({
			  icon: 'success',
			  title: 'Felicidades!!',
			  text: 'Te haz unido a la clase.',
			  showConfirmButton: true,
			  timer: 1000
			})

      		   setTimeout('redireccion()',1000);  
      	}



     }); 


	   InputClase.classList.remove("is-invalid");
       InputClase.classList.add("is-valid");
	}
}





  // FUNCIONES PARA NOTAS PROFESOR
// AGREGAR UNA PRIMERA NOTA 
  function PrimerNota (){
    Primera = document.getElementById("PrimerNotaRow");
    Primera.classList.remove("OcultarElemento");
    Primera.classList.add("MostrarElemento");
 
  }


   click = 0 ;

    function NuevaNote (){
      Nuevo = document.getElementById("NuevaNote");
      if ( click == 0 )
      {
        
        Nuevo.classList.remove("OcultarElemento");
        Nuevo.classList.add("MostrarElemento");
        click = 1;
      }else{
        Nuevo.classList.add("OcultarElemento");
        Nuevo.classList.remove("MostrarElemento");
        click = 0;
      }
  }

  // ELIMINAR NOTAS 
   function redireccionEliminarNota() {
   location.reload(true);
 }

// RECIBIMOS EL ID DE LAS NOTASPROFESOR QUE PORSTERIORMENTE 
// NOS SERVIRA PARA ELIMINARLA EN LA BD
  function EliminarNota (idNotasProfesor)
  {

     Swal.fire({
      title: '¿Estas seguro de eliminar la Nota?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Aplicar el Cambio`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {


              $.ajax({
      url: 'DeleteNotaAlumno.php',
      type: 'POST',
      data: 'idNotasProfesor=' + idNotasProfesor,
      success: function(data) {
                   setTimeout('redireccionEliminarNota()',1000);  
                }
            }); 
        
        


        Swal.fire('El Elemento se Elimino!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Operación Abortada.', '', 'info')
      }
    })
  }


  function CrearNota(matricula){
    var DescripcionNota = document.getElementById("DescripcionNota");
    var NombreNota = document.getElementById("NombreNota");
    control1  = 0 ;
    control2= 0 ;
    if ( DescripcionNota.value  != ""){
       DescripcionNota.classList.remove("is-invalid");
       DescripcionNota.classList.add("is-valid");
       control1 = 1;
    }else{
       DescripcionNota.classList.add("is-invalid");
       DescripcionNota.classList.remove("is-valid");
       control1 = 0;
    }


    if ( NombreNota.value  != ""){
       NombreNota.classList.remove("is-invalid");
       NombreNota.classList.add("is-valid");
       control2 = 1;
    }else{
       NombreNota.classList.add("is-invalid");
       NombreNota.classList.remove("is-valid");
       control2 = 0;
    }


     var temp = new Date();
          var temp2 = temp.getMonth()+1;
          temp2 = String(temp2);
          // alert(temp2.length);
          if (temp2.length  == 1)
          {

            temp2 = "0"+temp2;
             var FechaActual = temp.getFullYear()+'/'+(temp2)+'/'+temp.getDate();
          }else{
             var FechaActual = temp.getFullYear()+'/'+(temp.getMonth()+1)+'/'+temp.getDate();

          }  
 var name = NombreNota.value ;
 var descrip = DescripcionNota.value;

    if (control1 == 1 && control2 == 1) 
    {

 //alert(name+ "  "+ descrip+"  " +matricula+"  "+FechaActual);
           $.ajax({
      url: 'InsertarNotaAlumno.php',
      type: 'POST',
      data: 'NombreNota=' + name +'&matricula='+matricula+'&Descripcion='+descrip+"&fecha="+FechaActual,
      success: function(data) {
                 
                }
            });   


      setTimeout('redireccion()',3000);   //tiempo expresado en milisegundos
            let timerInterval
            Swal.fire({
            title: '¡Se Ha Creado Tu Nota!',
            icon: 'success',
            background: 'white',
            timer: 3000 ,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              timerInterval = setInterval(() => {
                const content = Swal.getHtmlContainer()
                if (content) {
                  const b = content.querySelector('b')
                  if (b) {
                    b.textContent = Swal.getTimerLeft()
                  }
                }
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer');
            }
          })



    }

  }





  function CrearNota2(matricula){
    var DescripcionNota = document.getElementById("DescripcionNotaNueva");
    var NombreNota = document.getElementById("NombreNotaNueva");
    control1  = 0 ;
    control2= 0 ;
    if ( DescripcionNota.value  != ""){
       DescripcionNota.classList.remove("is-invalid");
       DescripcionNota.classList.add("is-valid");
       control1 = 1;
    }else{
       DescripcionNota.classList.add("is-invalid");
       DescripcionNota.classList.remove("is-valid");
       control1 = 0;
    }


    if ( NombreNota.value  != ""){
       NombreNota.classList.remove("is-invalid");
       NombreNota.classList.add("is-valid");
       control2 = 1;
    }else{
       NombreNota.classList.add("is-invalid");
       NombreNota.classList.remove("is-valid");
       control2 = 0;
    }


     var temp = new Date();
          var temp2 = temp.getMonth()+1;
          temp2 = String(temp2);
          // alert(temp2.length);
          if (temp2.length  == 1)
          {

            temp2 = "0"+temp2;
             var FechaActual = temp.getFullYear()+'/'+(temp2)+'/'+temp.getDate();
          }else{
             var FechaActual = temp.getFullYear()+'/'+(temp.getMonth()+1)+'/'+temp.getDate();

          }  
 var name = NombreNota.value ;
 var descrip = DescripcionNota.value;

    if (control1 == 1 && control2 == 1) 
    {

 //alert(name+ "  "+ descrip+"  " +matricula+"  "+FechaActual);
           $.ajax({
      url: 'InsertarNotaAlumno.php',
      type: 'POST',
      data: 'NombreNota=' + name +'&matricula='+matricula+'&Descripcion='+descrip+"&fecha="+FechaActual,
      success: function(data) {
                 
                }
            }); 


      setTimeout('redireccion()',3000);   //tiempo expresado en milisegundos
            let timerInterval
            Swal.fire({
            title: '¡Se Ha Creado Tu Nota!',
            icon: 'success',
            background: 'white',
            timer: 3000 ,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              timerInterval = setInterval(() => {
                const content = Swal.getHtmlContainer()
                if (content) {
                  const b = content.querySelector('b')
                  if (b) {
                    b.textContent = Swal.getTimerLeft()
                  }
                }
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer');
            }
          })



    }

  }

  // FUNCION PARA EDITAR LA NOTA 
  function EditarNota (cant)
  {
    var DescripcionNota = document.getElementById("DescripcionNota"+cant);
    var NombreNota = document.getElementById("NombreNota"+cant);
    var AplicarEdit = document.getElementById("AplicarEdit"+cant);

    AplicarEdit.classList.remove("OcultarElemento");
    AplicarEdit.classList.add("MostrarElemento");  
    NombreNota.disabled = false;
    DescripcionNota.disabled = false;
  } 


  function  AplicarEdicionNotas(idNotasProfesor,cant){
   var DescripcionNota = document.getElementById("DescripcionNota"+cant);
   var NombreNota = document.getElementById("NombreNota"+cant);
   var AplicarEdit = document.getElementById("AplicarEdit"+cant);
   control1  = 0 ;
    control2= 0 ;
    if ( DescripcionNota.value  != ""){
       DescripcionNota.classList.remove("is-invalid");
       DescripcionNota.classList.add("is-valid");
       control1 = 1;
    }else{
       DescripcionNota.classList.add("is-invalid");
       DescripcionNota.classList.remove("is-valid");
       control1 = 0;
    }


    if ( NombreNota.value  != ""){
       NombreNota.classList.remove("is-invalid");
       NombreNota.classList.add("is-valid");
       control2 = 1;
    }else{
       NombreNota.classList.add("is-invalid");
       NombreNota.classList.remove("is-valid");
       control2 = 0;
    }

      if (control1 == 1 && control2 == 1) 
    {

 //alert(name+ "  "+ descrip+"  " +matricula+"  "+FechaActual);
      


 
     Swal.fire({
      title: '¿Estas seguro de Editar la Nota?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Aplicar el Cambio`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

             $.ajax({
      url: 'UpdateNotasAlumno.php',
      type: 'POST',
      data: 'NombreNota=' + NombreNota.value +'&Descripcion='+DescripcionNota.value+"&idNotasProfesor="+idNotasProfesor,
      success: function(data) {
                 
                }
            }); 


        Swal.fire('El Elemento se Edito!', '', 'success')
         setTimeout('redireccion()',1000);  
      } else if (result.isDenied) {

         NombreNota.disabled = true;
         DescripcionNota.disabled = true;
         AplicarEdit.classList.add("OcultarElemento");
         AplicarEdit.classList.remove("MostrarElemento");  
         DescripcionNota.value = "";
         NombreNota.value  ="";
          DescripcionNota.classList.remove("is-valid");
           NombreNota.classList.remove("is-valid");
        Swal.fire('Operación Abortada.', '', 'info')
      }
    })





 
    }

  }