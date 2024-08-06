<?php 
	header('Content-Type: application/json');


	$matricula = $_POST['matricula'];

	// CONEXION A LA BASE DE DATOS
	$conexion  = mysqli_connect("localhost","root","","estadia");

	$consulta = " SELECT * FROM alumnos WHERE  matricula_alumno = '$matricula' ";
	$resultado = mysqli_query($conexion,$consulta);

	$filas = mysqli_num_rows($resultado);

		 
		if ( $filas != 0 ){

		
			$datos = array(
			'estado' => 'ok',
			'fila' => 1,
			);
			
		

		}else{
			$datos = array(
			'estado' => 'No',
			'fila' => 0,
			);
			
		}
	
			
	
	echo json_encode($datos, JSON_FORCE_OBJECT);

	mysqli_free_result($resultado);
	mysqli_close($conexion);
	
 ?>