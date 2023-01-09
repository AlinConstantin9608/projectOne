<?php


$conectare = mysqli_connect('localhost', 'root', '', 'testare'); // datele de contact ale bazei (locatia bazei , userul, parola (ghilimelele goale sunt parola))
                                                         // si numele bazei .
														 
if(!$conectare) {

	die(mysqli_connect_error());
// ce se intampla daca nu merge ceva (aici apare un cod )
}

?>