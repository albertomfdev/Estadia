<?php 
	
	$matricula_profesor =$_POST["matricula_profesor"]; 
	$nombre_profesor  =$_POST["nombre_profesor"];
	$paterno_profesor = $_POST["paterno_profesor"];
	$materno_profesor = $_POST["materno_profesor"];
	$correo_profesor = $_POST["correo_profesor"];
	$psw_profesor = $_POST["psw_profesor"];


	// CONEXION A LA BASE DE DATOS
	$conexion  = mysqli_connect("localhost","root","","estadia");

	$consulta = "INSERT INTO profesores (matricula_profesor,nombre_profesor,paterno_profesor,materno_profesor,correo_profesor,psw_profesor,foto_profesor) VALUES 
	( '$matricula_profesor' , '$nombre_profesor' , '$paterno_profesor' , '$materno_profesor'
	, '$correo_profesor' , '$psw_profesor' ,NULL)";


	$resultado = mysqli_query($conexion,$consulta);

 	


	mysqli_free_result($resultado);
	mysqli_close($conexion);

	
 ?>