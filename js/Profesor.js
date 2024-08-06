const Profesor = document.getElementById("Profesor");
const Botones = document.querySelectorAll('#Profesor a');




var Contenido_general = document.getElementById("Contenido_General_Profesor");
var VerMisClases = document.getElementById("VerMisClases");
var AgregarClases = document.getElementById("AgregarClaseProfesor");
var EditarClase = document.getElementById("EditarClasesProfesor");
var EliminarClase = document.getElementById("EliminarClasesProfesor");
var VerEventoProfesor  = document.getElementById("VerEventosProfesor");
//var AgregarEventoProfesor = document.getElementById("AgregarEventoProfesor");
//var EditarEventoProfesor = document.getElementById("EditarEventoProfesor");
//var EliminarEventoProfesor = document.getElementById("EliminarEventoProfesor");
var VerMisNotasProfesor = document.getElementById("VerMisNotasProfesor");
var AgregarNotasProfesor = document.getElementById("AgregarNotasProfesor");
var EditarNotasProfesor = document.getElementById("EditarNotasProfesor");
var EliminarNotasProfesor = document.getElementById("EliminarNotasProfesor");
var AgregarActividadSimple   = document.getElementById("AgregarActividadSimple");
var AgregarActividadDinamica = document.getElementById("AgregarActividadDinamica");

/**
 * Resetea los valores de los elementos 
 * Ocultandolos a todos para que cuando la función sea llamada
 * Y requiera mostrarse alguno no haya ningún inconveniente
 * @return  void
 */
const MostrarOcultar = () =>
{


    Contenido_general.classList.remove("MostrarElemento");
    VerMisClases.classList.remove("MostrarElemento");
    AgregarClases.classList.remove("MostrarElemento");
    EditarClase.classList.remove("MostrarElemento");
    EliminarClase.classList.remove("MostrarElemento");
    VerEventoProfesor.classList.remove("MostrarElemento");
    AgregarEventoProfesor.classList.remove("MostrarElemento");
    EditarEventoProfesor.classList.remove("MostrarElemento");
    EliminarEventoProfesor.classList.remove("MostrarElemento");
    VerMisNotasProfesor.classList.remove("MostrarElemento");
    //AgregarActividadSimple.classList.remove("MostrarElemento");
    //AgregarActividadDinamica.classList.remove("MostrarElemento");

    Contenido_general.classList.add("OcultarElemento");
    VerMisClases.classList.add("OcultarElemento");
    AgregarClases.classList.add("OcultarElemento");
    EditarClase.classList.add("OcultarElemento");
    EliminarClase.classList.add("OcultarElemento");
    VerEventoProfesor.classList.add("OcultarElemento");
    AgregarEventoProfesor.classList.add("OcultarElemento");
    EditarEventoProfesor.classList.add("OcultarElemento");
    EliminarEventoProfesor.classList.add("OcultarElemento");
    VerMisNotasProfesor.classList.add("OcultarElemento");
   // AgregarActividadSimple.classList.add("OcultarElemento");
   // AgregarActividadDinamica.classList.add("OcultarElemento");
}


/**
 * Función que recibe el evento correspondiente al tipo de 
 * Opción pulsada por el usuario
 * @param   e      Evento click de la opción seleccionada
 */
const MenuProfesor = (e) =>{
    switch(e.target.name){ // Accedemos al name de la opción pulsada mediante el 
                           //  Evento Click
        case "Ver_Clases":
            MostrarOcultar(); // funcion que resetea los elementos para ocultarlos
            VerMisClases.classList.add("MostrarElemento");// Muestra el unico elemento que 
                                                          // debe ser mostrado
            break;
        case "Crear_Clase":
            MostrarOcultar();// funcion que resetea los elementos para ocultarlos
            AgregarClases.classList.add("MostrarElemento"); // Muestra el unico elemento que 
                                                            // debe ser mostrado
            break;
        case "Editar_Clase":
            MostrarOcultar();// funcion que resetea los elementos para ocultarlos
            EditarClase.classList.add("MostrarElemento");// Muestra el unico elemento que 
                                                            // debe ser mostrado
            break;
        case "Eliminar_Clase":
            MostrarOcultar();// funcion que resetea los elementos para ocultarlos
            EliminarClase.classList.add("MostrarElemento");// Muestra el unico elemento que 
                                                            // debe ser mostrado
            break;

        case "VerEventoProfesor":
            MostrarOcultar();// funcion que resetea los elementos para ocultarlos
            VerEventoProfesor.classList.add("MostrarElemento");// Muestra el unico elemento que 
                                                            // debe ser mostrado
            break;

        case "AgregarEventoProfesor":
            MostrarOcultar();// funcion que resetea los elementos para ocultarlos
            AgregarEventoProfesor.classList.add("MostrarElemento");
            break;

        case "EditarEventoProfesor":
            MostrarOcultar();// funcion que resetea los elementos para ocultarlos
            EditarEventoProfesor.classList.add("MostrarElemento");// Muestra el unico elemento que 
                                                            // debe ser mostrado
            break;

        case "EliminarEventoProfesor":
            MostrarOcultar();// funcion que resetea los elementos para ocultarlos
            EliminarEventoProfesor.classList.add("MostrarElemento");// Muestra el unico elemento que 
                                                            // debe ser mostrado
            break;

        case "VerMisNotasProfesor":
            MostrarOcultar();// funcion que resetea los elementos para ocultarlos
            VerMisNotasProfesor.classList.add("MostrarElemento");// Muestra el unico elemento que 
                                                            // debe ser mostrado
            break;
        case "AgregarActividadSimple":
            MostrarOcultar();// funcion que resetea los elementos para ocultarlos
            AgregarActividadSimple.classList.add("MostrarElemento");// Muestra el unico elemento que 
                                                            // debe ser mostrado
            break;
        case "AgregarActividadDinamica":
            MostrarOcultar();// funcion que resetea los elementos para ocultarlos
            AgregarActividadDinamica.classList.add("MostrarElemento");// Muestra el unico elemento que 
                                                            // debe ser mostrado
        break; 
    }
}

/**
 * Accede a cada uno de los elementos de la variable botones
 * @param   const botones   Guarda todos las etiquetas de tipo <a>  
 * @return void
 */
Botones.forEach((botones) => {
    // Se mantiene escuchando 
    botones.addEventListener('click',MenuProfesor);
});


// AGREGAR CLASES PROFESOR 

const AgregarClaseElementos = document.getElementById('AgregarClasesProfe');
const BotonesAgregarClases = document.querySelectorAll('#AgregarClasesProfe button');
const InputAgregarClases = document.querySelectorAll('#AgregarClasesProfe input');
const textAreaAgregarClases = document.querySelectorAll('#AgregarClasesProfe textarea');

/**
 * [expresiones description]
 * @type object expresiones
 * Variable de tipo objeto la cual guarda la expresión regular 
 * que determina las especificaciones de un nombre de una clase
 */
const expresiones =
    {
        NombreClase: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos

    }

/**
 * [campos description]
 * @type object campos
 * Guarda valores boleeanos (true , false) , de los elementos dentro 
 * de si que permiten su evaluación posterior.
 */
const campos =
    {
        NombreClase: false,
    }

/**
 * @param   e      Evento click de la opción seleccionada
 * 
 * @return void
 */
const ValidarAgregarClase= (e) =>{

    var ClaseNameInput = document.getElementById("NombreClase");
    var ClaseDescripInput = document.getElementById("Descripcion");

    switch (e.target.name){
        case "NombreClase" :

            if ( (expresiones.NombreClase.test(e.target.value)))
            {
                ClaseNameInput.classList.remove("is-invalid");
                ClaseNameInput.classList.add("is-valid");
                campos.NombreClase = true;
            }else
            {
                ClaseNameInput.classList.add("is-invalid");
                ClaseNameInput.classList.add("remove");
                campos.NombreClase = false;
            }
            break;

        case "Descripcion":
            if ( (expresiones.NombreClase.test(e.target.value)))
            {
                ClaseDescripInput.classList.remove("is-invalid");
                ClaseDescripInput.classList.add("is-valid");
            }else
            {
                ClaseDescripInput.classList.add("is-invalid");
                ClaseDescripInput.classList.add("remove");
            }
            break;
    }
}


/**
 * Funcion redireccion  
 * Permite redireccionar a la página Profesor.php 
 * cuando se llama a la misma. 
 * @return void
 */
function redireccion() {
    window.location = "Profesor.php";
}


/**
 * Función AutoEjecutable InsertarClase 
 * Mantiene escuchando al evento click del btn_crearclase
 * Accede a los valores porporcionados por el usuario para 
 * posteriormente enviar los datos a la base de datos. 
 * @return 
 */
const InsertarClase   = document.getElementById("btn_crearclase").addEventListener('click',(e)=>{
    var CodigoClase  = document.getElementById("CodigoClase").value;
    var Descripcion  = document.getElementById("Descripcion").value;
    var UsuarioProfe = document.getElementById("UsuarioProfe").value;
    var NombreClase  = document.getElementById("NombreClase").value;
    if ( campos.NombreClase == true){
        event.preventDefault();

        // Envia los datos mediante POST al archivo 
        // PHP InsertarClaseProfesor.php 
        // SE ENVIA EL CODIGO DE LA CLASE, LA DESCRIPCION DE LA MISMA
        // LA MATRICULA DEL PROFESOR QUE CREO LA CLASE
        // Y EL NOMBRE QUE FUE DADO A LA CLASE. 
        $.ajax({
            url: 'InsertarClaseProfesor.php',
            type: 'POST',
            data: 'CodigoClase=' + CodigoClase + '&Descripcion=' + Descripcion + '&UsuarioProfe=' + UsuarioProfe+ '&NombreClase=' + NombreClase,
            success: function(data) {
            }
        });

        // Despues de un segundo se llama a la Función redireccion() 
        setTimeout('redireccion()',1000);   //tiempo expresado en milisegundos
        let timerInterval

        // Alerta que indica al usuario que su clase se ha creado de manera exitosa.
        Swal.fire({
            title: '¡Se Ha Creado Tu Clase!',
            icon: 'success',
            background: 'white',
            timer: 1000 ,
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



    }else{

        // Cuando campos.NombreClase es false significa que 
        // el nombre de la clase no cumple con el formato 
        // por lo tanto llama se llama a la siguiente función
        AgregarError();
    }
});


/**
 * @param  {[type]}
 * @return void 
 *
 * Función AutoEjecutable AgregarError 
 * Asigna la clase is-invalid al elemento ClaseNameInput 
 * para indicar al usuario que se lleno el campo de manera
 * incorrecta. 
 */
const AgregarError= (e) =>{
    var ClaseNameInput = document.getElementById("NombreClase");
    ClaseNameInput.classList.add("is-invalid");
}


/**
 * Se recorre la constante InputAgregarClases
 * para acceder a cada uno de los input que se guarden dentro de ella
 * posteriormente si la función addEventListener escucha 
 * alguno de los eventos como keyup, blur, change , invalid
 * llamara a la función ValidarAgregarClase
 */
InputAgregarClases.forEach((input) => {
    input.addEventListener('keyup', ValidarAgregarClase);
    input.addEventListener('blur', ValidarAgregarClase);
    input.addEventListener('change', ValidarAgregarClase);
    input.addEventListener('invalid',ValidarAgregarClase);
});

/**
 * Se recorre la constante textAreaAgregarClases
 * para acceder a cada uno de los textarea que se guarden dentro de ella
 * posteriormente si la función addEventListener escucha 
 * alguno de los eventos como keyup, blur, change 
 * llamara a la función ValidarAgregarClase
 */
textAreaAgregarClases.forEach((input) => {
    input.addEventListener('keyup', ValidarAgregarClase);
    input.addEventListener('blur', ValidarAgregarClase);
    input.addEventListener('change', ValidarAgregarClase);

});


// ELIMINAR CLASES - PROFESORES 
/**
 * [redireccionEliminar description]
 *  Se recarga la página en la que se encuentra el 
 *  usuario en el momento en el que la función
 *  es llamada. 
 * @return void
 */
function redireccionEliminar() {
    location.reload(true);
}


/**
 * [AddId description]
 * Recibe el código de la clase así como la matrícula del profesor
 * para procesar y eliminar datos
 * @param {[String]} codigo    [Almacena el código único de una clase]
 * @param {[String]} matricula [Almacena la matricula del profesor]
 */
function AddId(codigo,matricula)
{

    Swal.fire({
        title: '¿Estás seguro de eliminar la clase?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Eliminar Clase`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {


            // Se Envia el código de la clase mediante el 
            // Método POST al archivo DeleteClaseProfesor.php
            // Cuadno se realiza la eliminación la página de 
            // recarga.
            $.ajax({
                url: 'DeleteClaseProfesor.php',
                type: 'POST',
                data: 'CodigoClase=' + codigo,
                success: function(data) {
                    setTimeout('redireccionEliminar()',1000);
                }
            });
            Swal.fire('El Elemento se Eliminó!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Operación Abortada.', '', 'info')
        }
    })


}

// Variable que determina si el nobre de una clase cuenta con 
// el formato correcto
temporal = 0 ;


const EditClass = document.getElementById("EditClass");

// Se almacenan todos los elementos Input delimitados dentro de 
// las etiqueta que cuenta con el id EditClass
const InputEdit = document.querySelectorAll("#EditClass input");

/**
 * ValidarEditar
 * Función encargada de determinar si el nombre de una clase al 
 * ser editada es correcto de acuerdo al formato especificado
 * por la expresión regular guardada en al objeto 
 * expresiones 
 * 
 * @param   e  Evento 
 * @return void
 */
const ValidarEditar = (e) =>{
    var Nombre = document.getElementById("NombreClassEdit");
    switch (e.target.name)
    {
        case "NombreClassEdit":
            if ( (expresiones.NombreClase.test(e.target.value)))
            {

                Nombre.classList.remove("is-invalid");
                Nombre.classList.add("is-valid");
                temporal = 1;
            }else
            {
                Nombre.classList.add("is-invalid");
                Nombre.classList.add("remove");

            }
            break;
    }
}


/**
 * Función AutoEjecutable la cual recorre
 * cada uno de los elementos input guardados dentro de la 
 * constante InputEdit, donde se mantiene esperando 
 * a que se active alguno de los siguientes eventos 
 * keyup, blur, change, invalid y click posteriormente
 * cuando es activado el evento se llama a la fucnión ValidarEditar
 * @return void   
 */
InputEdit.forEach((input) => {
    input.addEventListener('keyup', ValidarEditar);
    input.addEventListener('blur', ValidarEditar);
    input.addEventListener('change', ValidarEditar);
    input.addEventListener('invalid',ValidarEditar);
    input.addEventListener('click',ValidarEditar);
});

// Variables globales encargadas de guardar el código de una clase así como 
// la matricula de un profesor, para su posterior uso.
codigoclasetemp = "";
matriculaclasetemp = "";


/**
 * [Editar description]
 * Funcion encargada de realizar  
 * @param String matricula [almacena la matricula de un profesor]
 * @param String codigo    [almacena el código único de una clase]
 */
function Editar(matricula,codigo){

    var InputProf = document.getElementById("Profe");
    var InputCod =  document.getElementById("Cod");

    InputProf.value = matricula.toUpperCase();
    InputCod.value = codigo;
    codigoclasetemp = codigo;
    matriculaclasetemp = matricula;

}

/**
 * [redireccionEditar description]
 * Función encargada de recargar la página en la que
 * el usuario se encuentra
 * @return void
 */
function redireccionEditar() {
    location.reload(true);
}


/**
 * [AplicarEdicion description]
 *  Función encargada de realizar la edición de una clase 
 */
function AplicarEdicion (){
    var Descripcion = document.getElementById("DescripcionEdit").value;
    var Nombre = document.getElementById("NombreClassEdit").value;
    var Clasenombre = document.getElementById("NombreClassEdit");
    if ( temporal == 0 )
    {
        Clasenombre.classList.add("is-invalid");
        Clasenombre.classList.remove("is-valid");
    }else
    {
        Clasenombre.classList.remove("is-invalid");
        Clasenombre.classList.add("is-valid");


        // Se muestra una alerta para preguntar al usuario 
        // si se encuentra seguro de realizar el cambio
        Swal.fire({
            title: '¿Estás seguro de Editar la clase?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Aplicar el Cambio`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            // Si el usuario confirma la edición del elemento
            if (result.isConfirmed) {

                // Se envian los datos mediante el metodo POST 
                // al archivo UpdateClaseProfesor.php donde se 
                // envía 
                // String  codigoclase  (El código de una clase)
                // String matriculaclasetemp (Matrpicula del profesor) 
                // String Nombre        (Nombre de la clase)
                // String Descripcion   ()
                $.ajax({
                    url: 'UpdateClaseProfesor.php',
                    type: 'POST',
                    data: 'CodigoClase=' + codigoclasetemp+'&UsuarioProfe='+matriculaclasetemp+"&NombreClase="+Nombre+"&Descripcion="+Descripcion,
                    success: function(data) {
                        // Se llama a la función redireccionEditar despues de un 
                        // segundo al momento en el que se realizo con exito 
                        // la edición de una clase
                        setTimeout('redireccionEditar()',1000);
                    }
                });
                Swal.fire('El Elemento se Editó!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Operación Abortada.', '', 'info')
            }
        })




    }


}

// DINAMISMO Y VALIDACION PARA AGREGAR ACTIVIDADES PROFESORES 
// Variables globales encargadas para su posterior uso 
// para agregar una actividad
HoraEntrega = "";
FechaEntregar = "";
FechaActual  = "";
HoraActual = "" ;
control = 0 ;
control_nombre = 0;
control_clase_act = 0;
control_evidencia = 0;

const InsersionActSimple = document.getElementById("InsersionActSimple");
const InputActSimpe = document.querySelectorAll("#InsersionActSimple input");
const selectActSimpe = document.querySelectorAll("#InsersionActSimple select");

var Nombre = document.getElementById("activity-name");
var Clase = document.getElementById("clase_actividad");
var Evindencia  = document.getElementById("evidencia");
var  DescripcionActividad = document.getElementById("Descripcionact");
var FechaEntrega = document.getElementById("fecha_entrega");
var Archivo = document.getElementById("archivo");
var clase_actividad = document.getElementById("clase_actividad");

/**
 * Functión Auto Ejecutable NuevaActSimple
 * Encargada de realizar la validación de la información
 * correspondiente a la creación de una nueva actividad simple
 * @param   e [Event]
 * @return void
 */
const NuevaActSimple = (e) =>{
    switch (e.target.name){
        case  "activity-name" :
            if (e.target.value == "")
            {
                Nombre.classList.add("is-invalid");
                Nombre.classList.remove("is-valid");
                control_nombre = 0;
            }else{
                Nombre.classList.remove("is-invalid");
                Nombre.classList.add("is-valid");
                control_nombre = 1;
            }
            break;

        case "clase_actividad":
            if  (Clase.value == "Selecciona la Clase" )
            {
                Clase.classList.add("is-invalid");
                Clase.classList.remove("is-valid");
                control_clase_act = 0;

            }else{
                Clase.classList.remove("is-invalid");
                Clase.classList.add("is-valid");
                control_clase_act = 1;
            }
            break;
        case "evidencia" :
            if  (Evindencia.value == "Tipo de Evidencia" )
            {
                Evindencia.classList.add("is-invalid");
                Evindencia.classList.remove("is-valid");
                control_evidencia = 0;

            }else{
                Evindencia.classList.remove("is-invalid");
                Evindencia.classList.add("is-valid");
                control_evidencia = 1;
            }
            break;
        case "fecha_entrega":
            //alert(FechaEntrega.value);
            var FEntre = FechaEntrega.value;
            var Anio   = FEntre.substr(0,4);
            FEntre  = FEntre.replace(Anio,"");
            var Mes = FEntre.substr(1,2);
            FEntre  = FEntre.replace(Mes,"");
            var Dia = FEntre.substr(2,2);
            FEntre  = FEntre.replace(Dia,"");
            HoraEntrega =   FEntre.substr(3)+":00";
            FechaEntregar = Anio+"/"+Mes+"/"+Dia;
            var temp = new Date();
            var temp2 = temp.getMonth()+1;
            temp2 = String(temp2);
            // alert(temp2.length);
            if (temp2.length  == 1)
            {
                temp2 = "0"+temp2;
                FechaActual = temp.getFullYear()+'/'+(temp2)+'/'+temp.getDate();
            }else{
                FechaActual = temp.getFullYear()+'/'+(temp.getMonth()+1)+'/'+temp.getDate();
            }
            var horas ;
            if ( temp.getHours() <10 )
            {

                horas = '0'+temp.getHours();
            }else{
                horas = temp.getHours();
            }
            HoraActual = horas+":"+temp.getMinutes()+":00";
            var temp_anio_entrega = parseInt(Anio,10);
            var temp_mes_entrega  = parseInt(Mes,10);
            var temp_dia_entrega  = parseInt(Dia,10);
            var temp_hora_entrega = parseInt(FEntre.substr(3,5),10);
            var temp_min_entrega  = parseInt(FEntre.substr(6,7),10);
            var temp_anio_actual =  parseInt(temp.getFullYear(),10);
            var temp_mes_actual  =  parseInt(temp.getMonth()+1,10);
            var temp_dia_actual  =  parseInt(temp.getDate(),10);
            var temp_hora_actual =  parseInt(horas,10);
            var temp_min_actual  =  parseInt(temp.getMinutes(),10);


            if ( temp_anio_entrega >=  temp_anio_actual && temp_mes_entrega>= temp_mes_actual && temp_dia_entrega>= temp_dia_actual  )
            {
                control = 1;
                if (temp_mes_entrega==temp_mes_actual && temp_anio_entrega==temp_anio_actual && temp_dia_entrega == temp_dia_actual )
                {
                    if (temp_hora_entrega == temp_hora_actual && temp_min_entrega <= (temp_min_actual+10))
                    {
                        control = 0;
                    }else{
                        control = 1;
                    }
                }else{
                    control = 1;
                }
            }else{
                control = 0;
            }

            if ( control == 1)
            {
                document.getElementById("fecha_entrega").classList.remove("is-invalid");
                document.getElementById("fecha_entrega").classList.add("is-valid");
            }else{
                document.getElementById("fecha_entrega").classList.add("is-invalid");
                document.getElementById("fecha_entrega").classList.remove("is-valid");
            }

            break;
    }
}

/**
 * [description]
 * Función AutoEjecutable validar_crearactividad se encarga de escuchar 
 * el click del botón con ID = Crear_actividad, para su posterior inserión 
 * dentro de la base de datos.
 * @param  {[type]} "Crear_actividad").addEventListener('click',(e [description]
 * @return {[type]}                                                [description]
 const validar_crearactividad = document.getElementById("Crear_actividad").addEventListener('click',(e)=>{
    if (Nombre.value == "")
    {
        Nombre.classList.add("is-invalid");
        Nombre.classList.remove("is-valid");
        control_nombre = 0;
    }else{
        Nombre.classList.remove("is-invalid");
        Nombre.classList.add("is-valid");
        control_nombre = 1;
    }
    if  (Clase.value == "Selecciona la Clase" )
    {
        Clase.classList.add("is-invalid");
        Clase.classList.remove("is-valid");
        control_clase_act = 0;
    }else{
        Clase.classList.remove("is-invalid");
        Clase.classList.add("is-valid");
        control_clase_act = 1;
    }
    if  (Evindencia.value == "Tipo de Evidencia" )
    {
        Evindencia.classList.add("is-invalid");
        Evindencia.classList.remove("is-valid");
        control_evidencia = 0;
    }else{
        Evindencia.classList.remove("is-invalid");
        Evindencia.classList.add("is-valid");
        control_evidencia = 1;
    }
    if ( control == 0 || control_clase_act == 0 || control_evidencia == 0 || control_nombre == 0 )
    {
        // Si las variables globales correspondientes  ala validación de las 
        // entradas para insersión de la base de datos son incorrectas
        // se mostrara en pantalla una alarma que indique al 
        // usuario que deberá llenar los datos correctamente 
        // dentro de la interface 
        event.preventDefault();
        Swal.fire({
            icon: 'warning',
            title: 'Debes Llenar los datos correctamente',
            text: 'Opps!!',
            showConfirmButton: true,
        })
    }else{
        // SE PARA EL EVENTO DEL BOTÓN PARA EVITAR QUE LA PÁGINA SEA REFRESCADA
        event.preventDefault();
        // Objeto con Id = 1 cuando no existe ningún id con ese dato 
        // se insertará 
        datos = {"id":'1'};

        // Cuando los datos de entrada son verificados como correctos
        // se hace el envío mediante el método POST 
        // al archivo VerificarActividades.php
        $.ajax({
            url: 'VerificarActividades.php',
            type: 'POST',
            data: datos ,
        }).done(function(respuesta){
            if (respuesta.estado == "ok" ) {
                console.log(JSON.stringify(respuesta));
                // Al recibir mediante "respuesta" un ok significa que ya hay por lo menos un 
                // registro dentro de la base de datos por lo tanto se insertará 
                // uno más llamando a la función InsertarElementoActividad
                var fila = respuesta.fila;
                InsertarElementoActividad(fila+1, Nombre.value,DescripcionActividad.value,Evindencia.value,1,HoraEntrega,HoraActual);
                //alert("AQUI");
            }else{
                var fila = respuesta.fila;
                InsertarElementoActividad(fila+1, Nombre.value,DescripcionActividad.value,Evindencia.value,1,HoraEntrega,HoraActual);
            }
        });
    }/// TERMINA ELSE 

}); */

/**
 * [redireccion description]
 * Función encargada de realizar el 
 * refrescamiento de la página actual
 * cuando la función es llamada.
 * @return void
 */
function redireccion(){
    location.reload(true);
}

 fichero = "";
 /**
  * [InsertarElementoActividad description]
  *  Función correspondiente a la insersión de una nueva actividad 
  *  dentro de la base de datos, esto mediante el uso 
  *  de ajax para realizar el envio de la información 
  * @param {[Int]} idActividades    [Almacena el id de la actividad nueva]
  * @param {[String]} Nombre_actividad [Almacena el nombre dado a una actividad]
  * @param {[String]} descripcion      [almacena la descripción de una actividad]
  * @param {[type]} tipoevidencia    [description]
  * @param {[type]} tipoactividad    [description]
  * @param {[String]} horaentrega      [description]
  * @param {[String]} horacreacion     [description]
  */
function InsertarElementoActividad (idActividades, Nombre_actividad,descripcion,tipoevidencia,tipoactividad,horaentrega,horacreacion)
{
    var temp = document.getElementById("archivo").value;
    var cod_clase = document.getElementById("clase_actividad").value;
    var namearchivo = document.getElementById("archivo").files[0].name;
    var formData = new FormData();
    var files = $('#archivo')[0].files[0];
    formData.append('file',files);
    // Se Envia mediante ajax la url del archivo que será cargado
    // dentro de una carpeta donde se guardaran las imagenes
    // de actividades creadas por usuarios
    $.ajax({
        url: 'CargarArchivo.php',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
    }).done(function(respuesta){
        //Cuando el archivo se cargo de manera correcta en la carpeta 
        //correspondiente al guardado de imagenes para actividades
        if (respuesta.estado == "ok") {
            console.log(JSON.stringify(respuesta));
            console.log((respuesta.fichero ));
            // Se envian los datos correspondientes a la entidad Actividades
            // Donde mediante el método POST al archivo InsertarActividades.php
            // De esta manera la entidad actividades crea un nuevo registro 
            $.ajax({
                url: 'InsertarActividades.php',
                type: 'POST',
                data: 'idActividades=' + idActividades+"&nombre_actividad="+Nombre_actividad+"&descripcion_actividad="+descripcion+"&tipo_evidencia="+tipoevidencia+"&Tipo_actividad="+tipoactividad+"&FechaEntrega="+FechaEntregar+"&HoraEntrega="+horaentrega+"&FechaCreacion="+FechaActual+"&HoraCreacion="+horacreacion+"&ArchivoActividad="+respuesta.fichero,
                success: function(data) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Actividad Creada con Éxito',
                        text: 'Opps!!',
                        showConfirmButton: true,
                    })
                }
            });
            // Despues de insertar un registro en Actividades se procede a asignar 
            // dicha nueva actividad al registro en la entidad
            // ActividadClaseProfesor
            // Donde se guarda la información correspondiente a 
            // el ID de las actividades y el código de la clase
            // de está manera tenemos el enlace entre la actividad creada
            // y el profesor quien la creo para una respectiva clase
            $.ajax({
                url: 'InsertarActividadClaseProfesor.php',
                type: 'POST',
                data: 'idActividades=' + idActividades+"&codigoclase="+clase_actividad.value+"&estatusactividad="+"Activa"+"&FechaActual="+FechaActual+"&clase_actividad="+cod_clase,
                success: function(data) {

                    setTimeout('redireccion()',1000);
                }
            });
        }
    })
}



InputActSimpe.forEach((input) => {
    input.addEventListener('keyup', NuevaActSimple);
    input.addEventListener('blur', NuevaActSimple);
    input.addEventListener('change', NuevaActSimple);
    input.addEventListener('invalid', NuevaActSimple);
});


selectActSimpe.forEach((select) => {
    select.addEventListener('keyup', NuevaActSimple);
    select.addEventListener('click', NuevaActSimple);
    select.addEventListener('change', NuevaActSimple);
});



// FUNCIONES PARA NOTAS PROFESOR
// AGREGAR UNA PRIMERA NOTA 
/**
 * [PrimerNota description]
 * Función encargada de mostrar la vista correspondiente al agregado de una nota
 * dentro de la página correspondiente
 */
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
/**
 * [EliminarNota description]
 * function EliminarNota 
 * Encargada de realizar la operación de eliminación de un registro
 * de la base de datos de la entidad NotaProfesor 
 * @param {[int]} idNotasProfesor [Guarda el Id de una nota de un profesor]
 */
function EliminarNota (idNotasProfesor)
{
    Swal.fire({
        title: '¿Estás seguro de eliminar la Nota?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Aplicar el Cambio`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                url: 'DeleteNotaProfe.php',
                type: 'POST',
                data: 'idNotasProfesor=' + idNotasProfesor,
                success: function(data) {
                    setTimeout('redireccionEliminarNota()',1000);
                }
            });
            Swal.fire('El Elemento se Eliminó!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Operación Abortada.', '', 'info')
        }
    })
}

/**
 * [CrearNota description]
 * Función correspondiente a la validación de las entradas
 * ingresadas por el usuario y posterior insersión dentro 
 * de la base de datos
 * @param {[String]} matricula [Guarda la matrícula de un profesor]
 */
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
            url: 'InsertarNotaProfesor.php',
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


/**
 * [CrearNota2 description]
 * Función correspondiente a la validación de las entradas
 * ingresadas por el usuario y posterior insersión dentro 
 * de la base de datos
 * @param {[String]} matricula [Guarda la matrícula de un profesor]
 */
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
        $.ajax({
            url: 'InsertarNotaProfesor.php',
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
/**
 * [EditarNota description]
 *  Función correspondiente a mostrar los botones correspondientes 
 *  a la edición de una nota, dejando ver la información 
 *  de la nota para su posterior edición
 * @param {[Int]} cant [description]
 */
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


/**
 * [AplicarEdicionNotas description]
 * @param {[Int]} idNotasProfesor [Guarda el valor único del id de una nota]
 * @param {[Int]} cant            [Guarda el indicador de la nota seleccionada por el usuario]
 */
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
        Swal.fire({
            title: '¿Estás seguro de Editar la Nota?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Aplicar el Cambio`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                $.ajax({
                    url: 'UpdateNotasProfesor.php',
                    type: 'POST',
                    data: 'NombreNota=' + NombreNota.value +'&Descripcion='+DescripcionNota.value+"&idNotasProfesor="+idNotasProfesor,
                    success: function(data) {

                    }
                });
                Swal.fire('El Elemento se Editó!', '', 'success')
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


var Nombre2 = document.getElementById("activity-name2");
var Clase2 = document.getElementById("clase_actividad2");
var Evindencia2  = document.getElementById("evidencia2");
var  DescripcionActividad2 = document.getElementById("Descripcionact2");
var FechaEntrega2 = document.getElementById("fecha_entrega2");
var clase_actividad2 = document.getElementById("clase_actividad2");


/**
 * [description]
 * Función auto Ejetutable la cual esucha a un evento click 
 * donde se evalua primeramente las entrafas registradas en el 
 * input por el usuario para su posterior insersión denteo de la base de datos
 * llamando a la función que realiza esa acción. 
 * @return {[coid]}

const validar_crearactividadDinamica = document.getElementById("continuar_dinamica").addEventListener('click',(e)=>{
    if (Nombre2.value == "")
    {
        Nombre2.classList.add("is-invalid");
        Nombre2.classList.remove("is-valid");
        control_nombre = 0;
    }else{
        Nombre2.classList.remove("is-invalid");
        Nombre2.classList.add("is-valid");
        control_nombre = 1;
    }
    if  (Clase2.value == "Selecciona la Clase" )
    {
        Clase2.classList.add("is-invalid");
        Clase2.classList.remove("is-valid");
        control_clase_act = 0;
    }else{
        Clase2.classList.remove("is-invalid");
        Clase2.classList.add("is-valid");
        control_clase_act = 1;
    }
    if  (Evindencia2.value == "Tipo de Evidencia" )
    {
        Evindencia2.classList.add("is-invalid");
        Evindencia2.classList.remove("is-valid");
        control_evidencia = 0;
    }else{
        Evindencia2.classList.remove("is-invalid");
        Evindencia2.classList.add("is-valid");
        control_evidencia = 1;
    }
    if ( control == 0 || control_clase_act == 0 || control_evidencia == 0 || control_nombre == 0 )
    {
        event.preventDefault();
        Swal.fire({
            icon: 'warning',
            title: 'Debes Llenar los datos correctamente',
            text: 'Opps!!',
            showConfirmButton: true,
        })
    }else{
        event.preventDefault();
        datos = {"id":'1'};
        $.ajax({
            url: 'VerificarActividades.php',
            type: 'POST',
            data: datos ,
        }).done(function(respuesta){
            if (respuesta.estado == "ok" ) {
                console.log(JSON.stringify(respuesta));

                var fila = respuesta.fila;
                InsertarElementoActividad(fila+1, Nombre.value,DescripcionActividad.value,Evindencia.value,1,HoraEntrega,HoraActual);
                //alert("AQUI");
            }else{
                var fila = respuesta.fila;
                InsertarElementoActividad(fila+1, Nombre.value,DescripcionActividad.value,Evindencia.value,1,HoraEntrega,HoraActual);
            }
        });
    }/// TERMINA ELSE 
});
 */

/**
 * EN PROCESO DE CREACION
 
function Continuar ()
{
   var ActividadDinamic = document.getElementById("ActividadDinamic");
   ActividadDinamic.classList.add("OcultarElemento");
}*/