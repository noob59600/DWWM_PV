<?php
require ('db.php');
require ("header.php");
?>

<body>
    <form method="post">
        <label>
            marque
        </label>
        <input type="text" name="marque">
        <label>
            modèle
        </label>
        <input type="text" name="modele">
        <label>
            année
        </label>
        <input type="text" name="annee">
        <button type="submit">Confirmer</button>
    </form>
   <?php
   if(isset($_POST)){

    if(isset($_POST["marque"]) && !empty($_POST["marque"])){
     $marque = $_POST['marque'];

    if(isset($_POST["modele"]) && !empty($_POST["modele"])){
     $modele = $_POST['modele'];
    
   if(isset($_POST["annee"]) && !empty($_POST["annee"])){
     $annee = $_POST['annee'];
     
   $sql = "INSERT INTO `vehicule`(`marque_vehicule`, `modele_vehicule`, `annee_vehicule`) VALUES ('$marque','$modele','$annee')";
   $query = $db -> prepare($sql);
   $query -> execute();
   }}}}
   ?> 
</body>
</html>