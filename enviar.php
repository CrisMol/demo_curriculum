<?php
	if (isset($_POST['enviar'])) {
		if (!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['mensaje'])) {
			$destino = "aserekmolina@gmail.com";
			$asunto = "Contacto";
			$name = $_POST['nombre'];
			$email = $_POST['email'];
			$mensaje = $_POST['mensaje'];
			$header = "From: ". $email . "\r\n";
			$header.= "X-Mailer: PHP/". phpversion();
			$mail = @mail($destino, $asunto, $mensaje);
			header("Location: index.html");
		}
	}
?>