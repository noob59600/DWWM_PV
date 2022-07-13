<?php
require('db.php');
require ("header.php");
$sql = 'SELECT * FROM vehicule';
$query=$db->prepare($sql);
$query->execute();
$result = $query->fetchAll(PDO::FETCH_ASSOC);
?>

<body>
    <form method="POST">
        <select name="vehicule" id="">
            <?php
            foreach($result as $value){
               

                ?> 
                <option value="<?=$value['ID_vehicule']?>"><?=$value['modele_vehicule']?></option>
            <?php
            }
            ?>

        </select>
        <input type="text" name="marque" placeholder="marque">
        <input type="text" name="modele" placeholder="modele">
        <input type="text" name="annee" placeholder="annee">
        <button type="submit">Modifier</button>


    </form><?php
    if(isset($_POST)){
    if(isset($_POST["marque"]) && !empty($_POST["marque"])){
$id=$_POST["vehicule"];
$marque=$_POST["marque"];
$modele=$_POST["modele"];
$annee=$_POST["annee"];
$sql = "UPDATE `vehicule` SET `marque_vehicule`='$marque',`modele_vehicule`='$modele',`annee_vehicule`='$annee' WHERE ID_vehicule=$id";
$query=$db->prepare($sql);
$query->execute();
    }
}
?>

    
</body>
</html>