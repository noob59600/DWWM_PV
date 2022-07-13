<?php
require ("db.php");
?>

<!-- copie de l' entete template -->

<?php ob_start()?>

<?php
$content = ob_get_clean();

require "template.php"



?>
    <title></title>
</head>
<body>
    <h3>Site réalisé par Davy Decroocq, Pierre Viaud et Rémi Joly. Tout droits réservés ™</h3>
</body>
</html>