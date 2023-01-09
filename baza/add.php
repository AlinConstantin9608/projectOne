
<?php

$myfile = fopen("baza.txt", "a");

$cheie = $_POST['src']."\n";

fwrite($myfile,$cheie);

fclose($myfile);


?>

