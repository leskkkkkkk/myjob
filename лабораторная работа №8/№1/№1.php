<!DOCTYPE html> 
<html>
<head>
    <title>The multiplication table</title>
</head>
<?php

$rows = 10;
$cols = 10;

for ($tr = 1; $tr <= $rows; $tr ++)

{

echo "<table  border='1' align='center' width='250'>\n";

echo "\t<tr>\n";

for($td = 1;$td <=$cols; $td++)

{

echo "\t\t<td width='25'>" .$tr * $td."</td>\n"; 

}

               echo "\t</tr>\n";

}   

echo "</table>";

?>
    </body>
</html>