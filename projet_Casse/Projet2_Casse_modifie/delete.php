<?php 
require ("db.php");
require ("header.php");
$sql = "SELECT * FROM vehicule";
$query=$db->prepare($sql);
$query->execute();
$result = $query->fetchAll(PDO::FETCH_ASSOC);
$requet = "SELECT * FROM prix";
$label=$db->prepare($requet);
$label->execute();
$resulta = $label->fetchAll(PDO::FETCH_ASSOC);
$request = "SELECT * FROM piece";
$disque=$db->prepare($request);
$disque->execute();
$resultat = $disque->fetchAll(PDO::FETCH_ASSOC);

?>

<body>
    <form method="POST">
        
    <select name="vehicule" id="">
        <?php 
        foreach ($result as $value){

        
            ?>

        
<option value="<?=$value["ID_vehicule"]?>"><?= $value['modele_vehicule'] ?></option>
        <?php 
        }
        ?>
    </select>
    <button id="submit" type="submit" class="btn btn-danger modifier">Supprimer</button>
    </form>
    <?php
    if(isset($_POST)){
        if(isset($_POST["vehicule"]) && !empty($_POST["vehicule"])){
            $id =$_POST["vehicule"];
            $sql = "DELETE from vehicule WHERE ID_vehicule=$id";
            $query=$db->prepare($sql);
            $query->execute(); 

        }
        
    }
    ?> 
</body>
</html>