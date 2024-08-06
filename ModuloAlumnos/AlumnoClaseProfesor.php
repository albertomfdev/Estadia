<?php 
	
	$codigoclase = $_POST["CodigoClase"];
	$matricula = $_POST["matricula"];



	// CONEXION A LA BASE DE DATOS
	$conexion  = mysqli_connect("localhost","root","","estadia");

	$consulta = "INSERT INTO clase_alumno_profesor (matricula_alumno,codigoclase) VALUES ('$matricula','$codigoclase')";
	$resultado = mysqli_query($conexion,$consulta);

	$filas = mysqli_fetch_row($resultado);

 




	mysqli_free_result($resultado);
	mysqli_close($conexion);

	 //header("Location: Profesor.php");
	
 ?>