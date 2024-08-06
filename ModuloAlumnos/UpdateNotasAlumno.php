<?php 
	
	$nombre =$_POST["NombreNota"]; 
	$Descripcion  =$_POST["Descripcion"];
	$idnotas  = $_POST["idNotasProfesor"];

	// CONEXION A LA BASE DE DATOS
	$conexion  = mysqli_connect("localhost","root","","estadia");

	$consulta = " UPDATE notasalumno  SET descripcion = '$Descripcion', nombre_nota= '$nombre' WHERE idNotasAlumno = '$idnotas'  ";
	$resultado = mysqli_query($conexion,$consulta);

	$filas = mysqli_fetch_row($resultado);

 


	mysqli_free_result($resultado);
	mysqli_close($conexion);

	
	
 ?>