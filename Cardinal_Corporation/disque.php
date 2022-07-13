.<?php ob_start()?>
Le contenu de la page disque
<?php
$content = ob_get_clean();
// $titre = "Label MGA".

require "template.php";
?>