<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Calendario</title>	
	 <link rel="stylesheet" href="css/bootstrap.min.css">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.css">
	<link rel="stylesheet" href="calendario.css">
</head>
<body>
	
	<div class="row">
		<div class="col-sm-1"></div>
		<div class="col-sm-10 text-center">
			<h1> Calendario de Eventos</h1>
		</div>
	</div>

	<div class="row">
		<div class="col-sm-1"></div>
		<div class="col-sm-3 " style="margin-bottom: 10px;">
			<button type="button" class="btn btn-dark botones">
				<i class="fas fa-chevron-left "></i>
			</button>
			<button type="button" class="btn btn-dark botones">
				<i class="fas fa-chevron-right "></i>
			</button>
		</div>
		<div class="col-sm-2 " >
			<h4>Noviembre</h4>
		</div>
		<div class="col-sm-2" >
			<h4>2021</h4>
		</div>
	</div>

	<div class="row">
		<div class="col-sm-1"></div>
 		<div class="col-sm-10 ">
 			<table class="table table-light table-bordered text-center tabla">

		  <thead>
		    <tr>
		      <th scope="col">Domingo</th>
		      <th scope="col">Lunes</th>
		      <th scope="col">Martes</th>
		      <th scope="col">Miércoles</th>
		      <th scope="col">Jueves</th>
		      <th scope="col">Viernes</th>
		      <th scope="col">Sábado</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr class="dia">
		      <td ></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>

		    </tr>
		    <tr class="dia">
		       <td ></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		    </tr>
		    <tr class="dia">
		       <td ></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		    </tr>
		    <tr class="dia">
		       <td ></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		    </tr>
		    <tr class="dia">
		       <td ></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		      <td></td>
		    </tr>
		   
		  </tbody>
		</table>
 		</div>

		

	</div>	

	<div class="titulo"></div>


	<script src="js/jquery.js"> </script>
    <script src="https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.js"></script>
 	<script src="https://unpkg.com/@popperjs/core@2"></script>
 	<script src="js/bootstrap.min.js"></script>
 	<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
 	<script src="calendario.js"></script>
  	<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
</body>
</html>