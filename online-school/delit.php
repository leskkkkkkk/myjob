<?php
session_start();
include ('dbconnect.php');
$id = $_GET["id"];
        $stmt = $pdo->query("DELETE FROM `users` WHERE `users`.`id` = $id");
            header('Location: admin.php');
    
?>