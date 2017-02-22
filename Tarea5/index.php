<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">	
		<title>MiRegistro</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/camara.css">		
	</head>
	<body onload="LoadUser();">
		<div class="popcam">
			<h1>Holis</h1>
			
			<div id="camArea"><!--Parte de vista de foto-->				
			
				<div id="FotoArea"></div>						
				<div id="SpaceButton"><button onclick="ClosePop();" id="CamSaveImg"><img src="img/icon/savebtn.png" alt="Guardar"></button></div>
				<button id="tomarFoto"><img src="img/icon/CamIco.png" alt="Capturar"></button>		
				<div id="webcam"></div>										
			</div>

		</div>
		<div id="MiTablaArea">
			<table>
				<thead>
					<tr>
						<th>Cedula</th>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Telefono</th>
						<th>Foto</th>
					</tr>
				</thead>
				<tbody id="AreaRegistro">
				</tbody>
			</table>
		</div>
		<div id="formulario">
            <button onclick="OpenPop(); ComenzarTodo();" id="PopImg"><img src="img/canvas.png" alt="foto" width="100" id="imgg" /></button>
			<label for="TxtCedula">Cedula</label>
			<input type="text" id="TxtCedula">

			<label for="TxtNombre">Nombre</label>
			<input type="text" id="TxtNombre">

			<label for="TxtApellido">Apellido</label>
			<input type="text" id="TxtApellido">

			<label for="TxtTelefono">Telefono</label>
			<input type="text" id="TxtTelefono">			
			<button onclick="AddUser();" id="Mibtn">Agregar</button>			
		</div>		
		<script src="js/jquery.min.js"></script>
		<script src='js/say-cheese.js'></script>		
		<script src='js/WebCammain.js'></script>
		<script>
			function OpenPop(){
				$(".popcam").slideDown("slow");				
			}
			function ClosePop(){
				$(".popcam").slideUp("fast");
			}						
		</script>
		<script type="text/javascript" src="js/main.js"></script>			
	</body>
</html>