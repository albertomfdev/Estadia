

<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<div class="row ">
				<div class="col-10 text-left centro">
					
						<h2 class="margeninterno">Profesor: <?php echo strtoupper( $_SESSION['Usuario'])  ?></h2>
										
				</div>
			</div>


			<div class="row "> 
				<div class="col-10 text-left centro" style="margin-top: 20px">
						
						<h2 class="margeninterno">Actividades Pendientes</h2>
						
						<div class="row">
							<div class="col-lg-12">
								<h3 style="margin-left: 20px;"> No Hay Pendientes...</h3>
							</div>
						</div>	
						
				</div>
			</div>
</body>
</html>