<?php ob_start()?>

Le contenu de la page d'accueil

<?php
$content = ob_get_clean();

require "template.php";

?>