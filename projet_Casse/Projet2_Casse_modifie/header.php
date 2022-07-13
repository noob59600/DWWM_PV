<?php 
require ("db.php");
?>

<!-- copie de l' entete template -->

<?php ob_start()?>

<?php
$content = ob_get_clean();

require "template.php"

?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">    
    <link rel="stylesheet" href="style.css">
    
    <title>Document</title>

</head>
<body>

<header>
    <section class="container">
       <section class="home">
         <h1>Casse</h1>
       </section> 
    </section>
<nav class="nav">
        <div class="container">
            <div class="logo">
                <a href="#"></a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><a href="sign.php">S'inscrire</a></li>
                    <li><a href="modify.php">Modifier</a></li>
                    <li><a href="delete.php">Supprimer</a></li>
                    <li><a href="add.php">Ajouter</a></li>
                    <li><a href="connect.php">Connexion</a></li>
                </ul>
            </div>
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
<!-- <section class="home"> -->
    <!-- <h1>Casse</h1> -->
    <!-- </section> -->  
</header>
    <div style="height: 1000px">
        <!-- just to make scrolling effect possible -->

<!-- Jquery needed -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="js/scripts.js"></script>

<!-- Function used to shrink nav bar removing paddings and adding black background -->
    <script>
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
                console.log("OK");
            } else {
                $('.nav').removeClass('affix');
            }
        });
    </script>
</body>
</html>