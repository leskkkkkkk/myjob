<?php
	session_start();
	require_once 'dbconnect.php';
 
	if(ISSET($_POST['reg'])){
		if($_POST['name_register'] !== "" && $_POST['name_register'] !== " " && $_POST['phone_register'] !== "" && $_POST['phone_register'] !== " " && $_POST['password_register'] !== "" && $_POST['password_register'] !== " "){
				$firstname = $_POST['name_register'];
				$email = $_POST['phone_register'];
				$pass = $_POST['password_register'];
				$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$sql = "INSERT INTO `users` VALUES ('', '$firstname', '$email', '$pass')";
				$pdo->exec($sql);
			header('location:index.php');
		}else{
			echo " Заполните все поля формы
			";
		}
	}
?>