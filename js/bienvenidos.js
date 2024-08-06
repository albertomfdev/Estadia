 const Alumnos = document.getElementById("Alumnos");
 const Botones = document.querySelectorAll('#Alumnos a');




  var Contenido_general = document.getElementById("Contenido_General_Alumnos");
        var VerMisClases = document.getElementById("VerClasesAlumnos");
        var UnirmeClase = document.getElementById("UnirmeClases");
        var VerEventoAlumno  = document.getElementById("VerEventosAlumnos");
        var AgregarEventoAlumno = document.getElementById("AgregarEventoAlumno");
        var EditarEventoAlumno = document.getElementById("EditarEventoAlumno");
        var EliminarEventoAlumno = document.getElementById("EliminarEventoAlumno");
        var VerMisNotasAlumno = document.getElementById("VerMisNotasAlumno");
        //var AgregarNotasAlumno = document.getElementById("AgregarNotasAlumno");
        //var EditarNotasAlumno = document.getElementById("EditarNotasAlumno");
       // var EliminarNotasAlumno = document.getElementById("EliminarNotasAlumno");


const MostrarOcultar = () =>
{
       


             Contenido_general.classList.remove("MostrarElemento");
             VerMisClases.classList.remove("MostrarElemento");
             UnirmeClase.classList.remove("MostrarElemento");
             VerEventoAlumno.classList.remove("MostrarElemento");
             AgregarEventoAlumno.classList.remove("MostrarElemento");
             EditarEventoAlumno.classList.remove("MostrarElemento");
             EliminarEventoAlumno.classList.remove("MostrarElemento");
             VerMisNotasAlumno.classList.remove("MostrarElemento");
            //// AgregarNotasAlumno.classList.remove("MostrarElemento");
            //// EditarNotasAlumno.classList.remove("MostrarElemento");
            //// EliminarNotasAlumno.classList.remove("MostrarElemento");


             Contenido_general.classList.add("OcultarElemento");
             VerMisClases.classList.add("OcultarElemento");
             UnirmeClase.classList.add("OcultarElemento");
             VerEventoAlumno.classList.add("OcultarElemento");
             AgregarEventoAlumno.classList.add("OcultarElemento");
             EditarEventoAlumno.classList.add("OcultarElemento");
             EliminarEventoAlumno.classList.add("OcultarElemento");
             VerMisNotasAlumno.classList.add("OcultarElemento");
            //// AgregarNotasAlumno.classList.add("OcultarElemento");
            //// EditarNotasAlumno.classList.add("OcultarElemento");
            //// EliminarNotasAlumno.classList.add("OcultarElemento");



             //alert("SI ENTRO");
}

    const MenuAlumnos = (e) =>{

      

    	switch(e.target.name){
    		case "Ver_Clases":
    		  
             MostrarOcultar();
             VerMisClases.classList.add("MostrarElemento");
            
            
    		break; 
    		case "Unirme_Clase":
    		 MostrarOcultar(); 
             UnirmeClase.classList.add("MostrarElemento");
    		break; 

            case "VerEventoAlumno":
               MostrarOcultar();
               VerEventoAlumno.classList.add("MostrarElemento");
            break;

            case "AgregarEventoAlumno":
              MostrarOcultar();
              AgregarEventoAlumno.classList.add("MostrarElemento");
            break;

            case "EditarEventoAlumno":
              MostrarOcultar();
              EditarEventoAlumno.classList.add("MostrarElemento");
            break;

            case "EliminarEventoAlumno":
              MostrarOcultar();
              EliminarEventoAlumno.classList.add("MostrarElemento");
            break;

            case "VerMisNotasAlumno":
                 MostrarOcultar();
               VerMisNotasAlumno.classList.add("MostrarElemento");
            break;

           // case "AgregarNotasAlumno":
           //   MostrarOcultar();
           //  AgregarNotasAlumno.classList.add("MostrarElemento");
          
           
           // break;

           // case "EditarNotasAlumno" :
           // MostrarOcultar();
           // EditarNotasAlumno.classList.add("MostrarElemento");
           // break;

           // case "EliminarNotasAlumno":
           // MostrarOcultar();
           // EliminarNotasAlumno.classList.add("MostrarElemento");
           // break;
           
           
    	}
    }


 	Botones.forEach((botones) => {
		    botones.addEventListener('click',MenuAlumnos)
		});


