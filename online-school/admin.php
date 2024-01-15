
<Doctype html>
<?php
	require 'dbconnect.php';
	session_start();
	
	if(!ISSET($_SESSION['user'])){
		header('location:index.php');
	}
?>
    <html lang="en">
	<head>
	</head>
    <body background="beige">
<?php
$stmt = $pdo->query('SELECT * FROM users');
$stmt->setFetchMode(PDO::FETCH_ASSOC); 
?>
        <a style="margin-left: 20px" href = "exit.php">Выйти</a>
            <h3 style="margin-left: 20px">Пользователи</h3>
<table border="1" style="margin-left: 20px">
<?php while($row = $stmt->fetch()):?>
<tr>
    <td><?php echo $row["id"]?></td>
    <td><?php echo $row["fio"]?></td>
    <td><?php echo $row["login_tel"]?></td>
    <td><a href="edit.php?id=<?=$row['id']?>">Редактировать</a></td>
    <td><a href="delit.php?id=<?=$row['id']?>">Удалить</a></td>
</tr>
 <?php endwhile;?>
</table>
