<?php
require('db.php');
require ("header.php");
$sql= "SELECT * from utilisateur ";
$query=$db->prepare($sql);
$query->execute();
$result = $query->fetchAll(PDO::FETCH_ASSOC);
?>

<body>
    <form method="POST">
        <input type="text" name='email' placeholder="e-mail">
        <input type="password" name='password' placeholder="mot de passe">
        <button id="submit" type="submit" class="modifier">Connexion</button>
    </form>
    <?php
    if(isset($_POST)){
        if(
         isset($_POST["email"]) && !empty($_POST["email"])
        && isset($_POST["password"]) && !empty($_POST["password"])){
    $email = $_POST["email"];
    $password =$_POST["password"];
    $sql = "SELECT * from utilisateur WHERE email='$email'";
    $query = $db->prepare($sql);
    $query->execute();
    $result = $query->fetch(PDO::FETCH_ASSOC);
    error_reporting(0);
    if (password_verify ($password,$result['password'])){
        echo "<p>Connexion réussie</p>";
        session_start();
        $_SESSION['nom'] = $result["pseudo"];
        $_SESSION['email'] = $result['email'];
        echo "<p>Bonjour ". $_SESSION['nom']."</p>";
    }
    else{
        echo "<p>Connexion échouée, Veuillez recommencer</p>";
    }
        }
    }



    ?>
    
</body>
</html>