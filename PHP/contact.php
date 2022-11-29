<?php
    if (isset($_POST("submit"))){
        $nom = $_POST["lastNameForm"];
        $prenom = $_POST["firstNameForm"];
        $email = $_POST["emailForm"];
        $objet = $_POST["motifForm"];
        $message = $_POST["textAreaForm"];

        $to = "tomvillegas2490@gmail.com";
        $headers = "From:" . $nom . " " . $prenom . " " . $email;

        if (mail($to,$objet,$message,$headers)){
            echo " Ton message est bien envoyé.";
        } else {
            echo "Une erreur s'est produite";
        }
    }
?>