<!DOCTYPE html>
<?php
	require 'dbconnect.php';
	session_start();
	
	if(!ISSET($_SESSION['user'])){
		header('location:index.php');
	}
?>

			<h3>Добро пожаловать!</h3>
			<br />
			<?php
				$id = $_SESSION['user'];
				$sql = $pdo->prepare("SELECT * FROM `users` WHERE `id`='$id'");
				$sql->execute();
				$fetch = $sql->fetch();
                echo"<div>".$fetch['fio']."</div>";
                echo"<div>".$fetch['login_tel']."</div>";
			?>
            <br>
<a href = "useredit.php">Редактировать профиль</a>
<br>
			<a href = "exit.php">Выйти</a>