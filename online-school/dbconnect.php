<?php
	$username = 'root';
	$password = '';
	$pdo = new PDO( 'mysql:host=localhost;port=3306;dbname=teach', $username, $password );
	if(!$pdo){
		die("Ошибка подключения");
	}
?>