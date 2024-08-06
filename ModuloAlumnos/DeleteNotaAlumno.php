<?php 
	
	$idNotasProfesor = $_POST['idNotasProfesor'];

	// CONEXION A LA BASE DE DATOS
	$conexion  = mysqli_connect("localhost","root","","estadia");

	$consulta = " DELETE  FROM notasalumno WHERE idNotasAlumno = '$idNotasProfesor' ";
	$resultado = mysqli_query($conexion,$consulta);

	//$filas = mysqli_fetch_row($resultado);

 


	//mysqli_free_result($resultado);
	mysqli_close($conexion);

	 //header("Location: Profesor.php");
	
 ?>