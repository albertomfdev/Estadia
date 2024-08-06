<?php 
	
	$nombre =$_POST["NombreNota"]; 
	$Descripcion  =$_POST["Descripcion"];
	$matricula_profesor = $_POST["matricula"];
	$fecha = $_POST["fecha"];


	// CONEXION A LA BASE DE DATOS
	$conexion  = mysqli_connect("localhost","root","","estadia");

	$consulta = "INSERT INTO notasprofesor (nombre_nota_profesor,Fechanota_profesor,matricula_profesor,descripcion) VALUES 
	( '$nombre' , '$fecha' , '$matricula_profesor' , '$Descripcion' )";
	$resultado = mysqli_query($conexion,$consulta);

 


	mysqli_free_result($resultado);
	mysqli_close($conexion);

	
 ?>