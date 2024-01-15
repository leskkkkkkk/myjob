
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
<?php
$userid = $_GET["id"];
$error = array();
$edit_user = array();
$errorbul = false;
if(isset($_POST["sub"])){
$edit_user = array(
"id" => $_POST["id"],
"fio" => $_POST["fio"],
"login_tel" => $_POST["login_tel"],
"password" => $_POST["password"]
);
if($edit_user["fio"] == "" || $edit_user["fio"] == " "){
    $error["fio"] = "Поле не заполнено";
    $errorbul = true;
}
if($edit_user["login_tel"] == "" || $edit_user["login_tel"] == " "){
    $error["login_tel"] = "Поле не заполнено";
    $errorbul = true;
}
if($edit_user["password"] == "" || $edit_user["password"] == " "){
    $error["password"] = "Поле не заполнено";
    $errorbul = true;
}
if($errorbul){
    ?>
		<h3 class="text-primary">Редактирование пользователя</h3>

    <form action="edit.php?id=<?=$userid?>" method="POST">
<input type="hidden" name="id" value="<?=$userid?>">
<div>
    <input type="text" id="fio" name="fio" value="<?=$edit_user['fio']?>">
    <?php if(isset($error["fio"]) && $error["fio"] != "") {echo $error["fio"];}  ?>
</div>
<div>
    <input type="text" id="login_tel" name="login_tel" value="<?=$edit_user["login_tel"]?>">
    <?php if(isset($error["login_tel"]) && $error["login_tel"] != "") {echo $error["login_tel"];}  ?>
</div>
<div>
    <input type="password" id="password" name="password" value="">
    <?php if(isset($error["password"]) && $error["password"] != "") {echo $error["password"];}  ?>
</div>
<div>
    <input type="submit"  id="sub" name="sub" value="Сохранить">
</div>
</form>
</div>
	</div>
<?php
} else {
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->query("UPDATE users 
SET fio='".$edit_user["fio"]."',
  login_tel='".$edit_user["login_tel"]."',
  password='".$edit_user["password"]."'
   WHERE id =".$userid);
   header('location:admin.php');
}

} else {
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $pdo->query("SELECT * FROM users WHERE id =".$userid);
$stmt->setFetchMode(PDO::FETCH_ASSOC);
if($user = $stmt->Fetch()){
?>
		<h3 class="text-primary">Редактирование пользователя</h3>
<form action="edit.php?id=<?=$userid?>" method="POST">
<input type="hidden" name="id" value="<?=$userid?>">
<div>
    <input type="text" id="fio" name="fio" value="<?=$user['fio']?>">
</div>
<div>
    <input type="text"id="login_tel" name="login_tel" value="<?=$user["login_tel"]?>">
</div>
<div>
    <input type="password" id="password" name="password" value="">
</div>
<div>
    <input type="submit" id="sub" name="sub" value="Сохранить">
</div>
</form>
</div>
	</div>
<?php
} else{
    echo "Запись не найдена";
}
?>

<?php } ?>