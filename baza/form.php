<?php 

require 'conectare.php'; // catre pagina de conexiune

$username = $_POST['username'];
$parola = $_POST['parola'];      // preiei valorile de la input-uri 



$sql = "INSERT INTO conturi (nume,parola,email) VALUES('$username','$parola')"; // insereza in tabelul conturi valorile varabilelor de sus 
$result = mysqli_query($conectare,$sql); // conecteaza baza de date si face ce zice mai sus


header("Location: index.php"); // unde te duce dupa 

?>