<?php 
	
	$nombre =$_POST["NombreNota"]; 
	$Descripcion  =$_POST["Descripcion"];
	$idnotas  = $_POST["idNotasProfesor"];

	// CONEXION A LA BASE DE DATOS
	$conexion  = mysqli_connect("localhost","root","","estadia");

	$consulta = " UPDATE notasprofesor  SET Descripcion = '$Descripcion', nombre_nota_profesor= '$nombre' WHERE idNotasProfesor = '$idnotas'  ";
	$resultado = mysqli_query($conexion,$consulta);

	$filas = mysqli_fetch_row($resultado);

 


	mysqli_free_result($resultado);
	mysqli_close($conexion);

	 //header("Location: Profesor.php");
	
 ?>