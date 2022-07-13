<?php 
require ("db.php");
require ("header.php");
?>


<body>

<?php
$sql= "SELECT * from vehicule ";
$query=$db->prepare($sql);
$query->execute();
$result = $query->fetchAll(PDO::FETCH_ASSOC);

$sql= "SELECT * from piece INNER JOIN prix ON piece.ID_prix=prix.ID_prix ";
$query=$db->prepare($sql);
$query->execute();
$resultat = $query->fetchAll(PDO::FETCH_ASSOC);

?>
<table>
<thead>
    <th>marque</th>
    <th>modéle</th>
    <th>année</th>
</thead>
<tbody>
    <div class="test">
        <?php
        foreach($result as $value)
        {
        ?>
        <tr>
            <td><?=$value['marque_vehicule']?></td>
            <td><?=$value['modele_vehicule']?></td>
            <td><?=$value['annee_vehicule']?></td>
    </tr>
    <?php 
        }
        ?>
        
</tbody>
</table>

<!-- 2éme table -->
<table>
<thead>
    
    <th>reférence pièce</th>
    <th>catégorie pièce</th>
    <th>date </br> pièce</th>
    <th>prix</th>
</thead>
<tbody>
    
        <?php
        foreach($resultat as $value)
        {
        ?>
        <tr>
            <td><?=$value['reference_pièce']?></td>
            <td><?=$value['categorie_pièce']?></td>
            <td><?=$value['date_pièce']?></td>
            <td><?=$value['prix']?></td>
            </div>
    </tr>
    <?php 
        }
        ?>
        
</tbody>
</table>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>