<!DOCTYPE html>
<html lang="ru">

<head>
    <style> 
        
        form {
            display:flex;
            width:500px;
            height:500px;
            justify-content:start;
            
            flex-direction:column;
            align-items:center;
        }
        body {
            display:flex;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100%;
        }
        input {
            display:flex;
            width:50%;
            margin-top:1cm;
            
            
            
            
        }
        
        
        
        
        
    </style>
</head>

<body>
    <form method="GET">
        <input type="text" id="phio" placeholder="Full name" name="Fullname">
        <br>
        <input type="text" id="login" placeholder="Login" name="login">
        <br>
        <input type="password" id="password-input" placeholder="Password" name="password">
        <br>
        <input type="date" id="start"  min="1900-1-1"  max="2009-12-31" name="date">
        <br>
        <br>
        <button>Register</button>
        <br>
        <?php
            if (!empty($_GET['Fullname']&&!empty($_GET['login'])&&!empty($_GET['password'])&&!empty($_GET['date']))) {
                exit ('You have successfully registered');
            }
            else {
                echo "<span style='color:red'>Fill in all the fields</span>";
            }


        ?>
    </form>
</body>

</html>