<?php
require_once "../global.php";

$idActividades =$_POST["idActividades"];
$codigoclase  =$_POST["codigoclase"];
$estatusactividad = $_POST["estatusactividad"];
$FechaActual = $_POST["FechaActual"];


// CONEXION A LA BASE DE DATOS
$conexion  = mysqli_connect(DB_SERVER,DB_USER,DB_PASSWORD,DB_NAME_BD);

$consulta = "INSERT INTO actividadclaseprofesor ( idActividades, codigoclase, estatusactividad,fechacreacion ) 
              VALUES ('$idActividades', '$codigoclase', '$estatusactividad', '$FechaActual')";

$resultado = mysqli_query($conexion,$consulta);




mysqli_free_result($resultado);
mysqli_close($conexion);


?>