<?php 
	header('Content-Type: application/json');

	$idcodigo = $_POST['idcodigo'];
	// CONEXION A LA BASE DE DATOS
	$conexion  = mysqli_connect("localhost","root","","estadia");

	$consulta = " SELECT usuario FROM codigoregistro WHERE  idcodigo = '$idcodigo' ";
	$resultado = mysqli_query($conexion,$consulta);

	$filas = mysqli_fetch_row($resultado);


		if ( $filas[0] == "Alumno"  ){

		
			$datos = array(
			'estado' => 'ok',
			'usuario'=> "Alumno" ,
			'fila' => 1,
			);
		}else if  ( $filas[0] == "Profesor"  ) {
			$datos = array(
			'estado' => 'ok',
			'usuario'=> "Profesor" ,
			'fila' => 1,
			);
			
		}else if  ( $filas[0] == "Administrador"  ) {
			$datos = array(
			'estado' => 'ok',
			'usuario'=> "Administrador" ,
			'fila' => 1,
			);
			
		}else
		{
			$datos = array(
			'estado' => 'no',
			'usuario'=> "Null" ,
			'fila' => 0,
			);
		}
	
			
	
	echo json_encode($datos, JSON_FORCE_OBJECT);

	mysqli_free_result($resultado);
	mysqli_close($conexion);
	
 ?>