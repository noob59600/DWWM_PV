<?php
require ("db.php");
require ("header.php");
?>

<body>
    <form method="POST">
        <input type="text" name="pseudo" placeholder="pseudo">
        <input type="mail" name="email" placeholder="email">
        <input type="password" id="display" name="password" placeholder="password">
        <button type="SUBMIT">S'inscrire</button>
    </form>
    <button onclick=password()>Affichez votre mot de passe</button>
    <?php
    // Vérification de l'adresse mail
    if(isset($_POST['email']) && !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
        echo '<p>Email incorrect</p>';
    }
    // Vérification du mot de passe
    if(!empty($_POST["password"])) {
        $password = $_POST["password"];
        if (strlen($_POST["password"]) <= '8') { 
            $passwordErr = "<p>Votre mot de passe doit contenir au moins 8 caractères</p>";
            print_r($passwordErr);
        }
        elseif (strlen($_POST["password"]) >= 15){
            $passwordErr = "<p>Votre mot de passe doit contenir moins de 15 caractères</p>";
            echo $passwordErr;
        }
        elseif(!preg_match("#[0-9]+#",$password)) {
            $passwordErr = "<p>Votre mot de passe doit contenir 1 nombre</p>";
            echo $passwordErr;
        }
        elseif(!preg_match("#[A-Z]+#",$password)) {
            $passwordErr = "<p>Votre mot de passe doit contenir 1 majuscule</p>";
            echo $passwordErr;
        }
        elseif(!preg_match("#[a-z]+#",$password)) {
            $passwordErr = "<p>Votre mot de passe doit contenir 1 minuscule</p>";
            echo $passwordErr;
        }
    elseif(isset($_POST)){ // On vérifie que les inputs sont remplis
        if(isset($_POST["pseudo"]) && !empty($_POST["pseudo"]) 
        && isset($_POST["email"]) && !empty($_POST["email"])
        && isset($_POST["password"]) && !empty($_POST["password"])){
        $pseudo = $_POST["pseudo"];
        $email = $_POST["email"];
        $password =password_hash($_POST["password"],PASSWORD_DEFAULT);
        $sql = "INSERT into utilisateur (pseudo,email,password) VALUES ('$pseudo','$email','$password')";
        $query = $db->prepare($sql);
        $query->execute();
        }
    }
        }
?> 
<script src="main.js"></script>
</body>
</html>
