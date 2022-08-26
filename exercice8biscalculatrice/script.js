// DOM

// on récupère toutes les touches
// opérateur stread [... 
const touches = [...document.querySelectorAll('.bouton')];

// la keycode est générée à chaque clic sur une touche
// le dataset permet de récupérer le data-key de chaque touche
// la fonction map() prend chaque élément du tableau, fait quelquechose à cet élément (fonction callback) et retourne le résultat sous forme d' un nouveau tableau (ici dans la variable nouveauTab)
const listeKeycode = touches.map(touches => touches.dataset.key);

// on récupère la div "écran" du DOM
const ecran = document.querySelector('.ecran');

// evenement  : (e); on récupère sa valeur
// keydown : un evenement (e) est créé dès qu'une touche est pressée
document.addEventListener('keydown' , (e) =>{
// toString permet de convertir la valeur en phrase
// const valeur : on récupère la valeur et on la compare aux valeurs du tableau
    const valeur = e.keyKode.toString();
    // on lance la fonction "calculer" créée plus bas
    calculer(valeur)

})
// click event : dès qu'il y aun clic sur une touche, un évenement (e) se déclenche
document.addEventListener('click', (e) =>{
// target permet de récuperer la valeur là ou on a cliqué, le data-key
    const valeur = e.target.dataset.key;
    // on lance la fonction "calculer" créée plus bas
    calculer(valeur)

})
// initialisation de la fonction calculer
const calculer = (valeur) => {
// on elimine toutes les interactions avec les autres touches du clavier
// si on appuie sur une touche qui n' appartient pas au clavier azery=> aucune action
// on vérifie si la valeur du keycode correspond à la valeur qui est passée en paramètre
    if(listeKeycode.includes(valeur))

    // implémentation du switch
    switch(valeur){

        // touche " C "
        case'8':
        // on supprime tout affichage quand on clique sur "C"
        ecran.textContent = "";
        // arrêt du switch
        break;


        // touche " = "
        case '13':
            // la fonction éval prend en paramètre du contenu et renvoie le résultat du contenu
            // on évalue le texte qui est à l' intérieur de l' écran
            // textContent : texte qui est à l' intérieur de l' écran
            const calcul = eval(ecran.textContent);
            // on inscrit à l' intérieur de l' écran le résultat du calcul que l' on vient d' effectuer
            ecran.textContent = calcul;

            // défaut correspond à toutes les autres touches
        default:

        // on regarde le keyCode reçu, on prend le tableau keyCode et on regarde l' index de cette valeur à l' intérieur de la liste et renvoyer l' index en question.
        //   on vérifie la valeur de l' index afin de la réutiliser dans le 2ème tableau 
        // les éléments html sont dans le même ordre que les keyCodes rentrés.
        // l' index d' un keyCode correspondre à l' index de la touche associée dans l' autre tableau (2ème tableau)
        const indexKeycode = listeKeycode.indexOf(valeur);

        // on récupère LA touche cliquée grace à son index "indexKeycode" dans le tableau "touche"
            const touche = touches[indexKeycode];
            
            // +=  => ajouter
            // afficher la valeur à l' écran: on ajoute dans le html la valeur de la touche appuyée
            ecran.textContent += touche.innerHTML;    


    }
}
// Quand on rentre une mauvaise opération, on a un message d' erreur
// on écoute l'évenement "error"
window.addEventListener('error' , (e) => {
    alert ('Une erreur est apparue dans votre calcul' + e.message)
})