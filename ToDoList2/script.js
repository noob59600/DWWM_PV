const form = document.querySelector('form');
const liste = document.querySelector('ul');
const input = document.querySelector('form input');


// tableau vide que l' on va remplir
let toutesLesTaches = [];

// submit ne fonctionne qu' avec les formulaires, on va prendre l' objet d' événement
form.addEventListener('submit', event => {
    // prévient du comportement par défaut de l' événement et évite le rafraichissement de la page
    event.preventDefault();

    // rase et supprime les espaces (mis par mégarde) avant et après le texte 
    const text = input.value.trim();
    if(text !== ''){
        // nouvelle méthode
        rajouterUneTache(text);
        // clean l' input
        input.value = '';
    }
})

function rajouterUneTache(text){
    // todo mise dans un objet
    const todo = {
        text,
        // la methode Date.now() renvoie le nb de millisecondes écoulées depuis le 1er janvier 1970
        // qui donne un très grand nombre, donc un id
        id: Date.now()
      
    }
    // alert(id);
    //
    afficherListe(todo);

    }
    // cette fonction permet de rajouter une tache à notre liste dans le DOM
    function afficherListe(todo){


        const item = document.createElement('li');
        // on ajoute un attribut "data-key" representant le nbre de millisecondes depuis 1970
        item.setAttribute('data-key', todo.id);
        
        // création d' un input check-box sur lequel on peut cliquer dessus
        const input = document.createElement('input');

        input.setAttribute('type', 'checkbox');

        // quand on clique sur la checkbox, on affichera une fonction "tache faite"
        input.addEventListener('click', tacheFaite);

        // on rajoute l' input ainsi créé
        item.appendChild(input);

        // création d' un élément du DOM en javascript
        const txt = document.createElement('span');

        txt.innerText = todo.text;
        // on rajoute à notre item Li
        item.appendChild(txt);

        // création d' un bouton, on envoie supprimer tache quand on clique dessus
        const btn = document.createElement('button');

        // quand je clique sur le bouton, on envoie "supprimer tâche"
        btn.addEventListener('click', supprimerTache);

        const img = document.createElement('img');
        // créationde la croix supprimer, img dans ressources
        img.setAttribute('src', 'ressources/fermer.svg')
        // rajoute l' image dans le bouton
        btn.appendChild(img);
        item.appendChild(btn);

        //  on rajoute l'item à la liste
        liste.appendChild(item);

        toutesLesTaches.push(item);

    }

    function tacheFaite(e){
        e.target.parentNode.classList.toggle('finDeTache')
    }

   function supprimerTache(e) {
      // (e), objet d' événement, mis dans un tableau
    toutesLesTaches.forEach(el =>{

        // si ce sur quoi je viens de cliquer, à une id identique à celle du li (le parent du bouton), donc les id sont similaires, alors
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
            // j' enlève cet élément du DOM
            el.remove();

            // on conserve dans un tableau, les éléments li qui ont un id différent de l' élément li que je viens de retirer, et
            // enfin, on retourne le tableau contenant tous les li, hormi celui qui a été retiré
            toutesLesTaches = toutesLesTaches.filter(li => li.dataset.key !== el.dataset.key);
        }
    })
   }
    
   