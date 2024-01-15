<?php
	session_start();
	
	require_once 'dbconnect.php';
	
	if(ISSET($_POST['autoriz'])){
		if($_POST['phone_authorize'] != "" || $_POST['password_authorize'] != ""){
			$username = $_POST['phone_authorize'];
			$password = $_POST['password_authorize'];
			$sql = "SELECT * FROM users WHERE login_tel=? AND password=? ";
			$query = $pdo->prepare($sql);
			$query->execute(array($username,$password));
			$row = $query->rowCount();
			$fetch = $query->fetch();
			if($row > 0) {
				$_SESSION['user'] = $fetch['id'];
                if($fetch['id']==1){
                    header("location: admin.php");
                }
                else{
				header("location: profil.php");
                }
			} else{
				echo "
				Неправильный логин или пароль
				";
			}
		}else{
			echo "
			Заполните обязательные поля!
			";
		}
	}
?>