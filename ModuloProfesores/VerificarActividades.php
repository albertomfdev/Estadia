<?php 
	header('Content-Type: application/json');


	$idActividad = $_POST['id'];

	// CONEXION A LA BASE DE DATOS
	$conexion  = mysqli_connect("localhost","root","","estadia");

	$consulta = " (SELECT MAX(idActividades) from actividades)";
	$resultado = mysqli_query($conexion,$consulta);

	$filas =  mysqli_fetch_row($resultado);
	$tempora  =intval($filas[0]);
	//var_dump($tempora);

		if ( $tempora == 0 )  
		{
			$datos = array(
			'estado' => 'ok',
			'fila' => 0, 
			);
	
		}else
		{
			$datos = array(
			'estado' => 'no',
			'fila' => intval($filas[0]), 
			);
		}

	
	
	echo json_encode($datos, JSON_FORCE_OBJECT);

	mysqli_free_result($resultado);
	mysqli_close($conexion);
	
 ?>