<?php 
	
	
	$_SESSION['Usuario'] = $Usuario;


	// CONEXION A LA BASE DE DATOS
	$conexion  = mysqli_connect("localhost","root","","estadia");

	$consulta = " Select nombre_profesor, paterno_profesor,materno_profesor, foto_profesor from profesores where  matricula_profesor = '$Usuario'";
	$resultado = mysqli_query($conexion,$consulta);

	$filas = mysqli_fetch_row($resultado);

 


	mysqli_free_result($resultado);
	mysqli_close($conexion);
	
 ?>