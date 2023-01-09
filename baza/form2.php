

<?php

require 'conectare.php'; // catre pagina de conexiune

$username = $_POST['username'];
$parola = $_POST['parola'];      // preiei valorile de la input-uri 
$email = $_POST['email'];


$sql = "INSERT INTO conturi (nume,parola,email) VALUES('$username','$parola','$email')"; // insereza in tabelul conturi valorile varabilelor de sus 
$result = mysqli_query($conectare,$sql); // conecteaza baza de date si face ce zice mai sus


header("Location: index.php"); // unde te duce dupa 

?>