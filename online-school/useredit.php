<?php
	require 'dbconnect.php';
	session_start();
	
	if(!ISSET($_SESSION['user'])){
		header('location:index.php');
	}
?>
	<?php
				$id = $_SESSION['user'];
				$sql = $pdo->prepare("SELECT * FROM `users` WHERE `id`='$id'");
				$sql->execute();
				$fetch = $sql->fetch();
			?>
			<form action="useredit.php" method="POST">
			<hr style="border-top:1px groovy #000;">
<div >
    <input type="text" class="form-control" id="fio" name="fio" value="<?=$fetch['fio']?>" require>
</div>
<div >
    <input type="text" class="form-control" id="tel" name="tel" value="<?=$fetch['login_tel']?>" require>
</div>
<div >
    <input type="password" class="form-control" id="pass" name="pass" value="" require>
</div>
<div >
    <input type="submit" class="btn btn-primary form-control" id="sub" name="sub" value="Сохранить">
</div>
</form>
<?php
if(isset($_POST["sub"])){
if($_POST["fio"] !== "" && $_POST["tel"] !== "" && $_POST["pass"] !== "") {

$edit_user = array(
"fio" => $_POST["fio"],
"login_tel" => $_POST["tel"],
"pass" => $_POST["pass"]
);
$stmt = $pdo->query("UPDATE users 
SET fio='".$edit_user["fio"]."',
  login_tel='".$edit_user["login_tel"]."',
  password='".$edit_user["pass"]."'
   WHERE id =".$fetch['id']);
   header('location: profil.php');;
}
else{
    echo " Заполните все поля формы ";
}
}
?>
			

		</div>
	</div>
</body>
</html>