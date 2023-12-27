<?php

include 'C:\xampp\htdocs\login-register\php\conexion_be.php'; // TRAEMOS LA CONEXION A LA DB DESDE OTRO ARCHIVO PHP

$usuario =  $_POST['usuario'];
$contrasena =  $_POST['contrasena'];

$contrasena = hash('sha512', $contrasena); // MÉTODDO DE ENCRIPTACIÓN DE CONTRASEÑAS



$queryResult = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario ='$usuario' and contrasena = '$contrasena'");





if(mysqli_num_rows($queryResult) > 0) {
    session_start();
    $_SESSION['USER'] = mysqli_fetch_assoc($queryResult); 
    // print_r($_SESSION['USER']);
    header("location: ../ejercicios.html");
    exit();
} else {
    header("location: ../login.html");
    exit();
}
 
?>


