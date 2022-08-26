const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

let ajd = new Date();
// jour en entier
let options = {weekday: 'long'};
// fonctionne qu' avec des methodes
let jouActuel = ajd.toLocaleDateString('fr-FR', options);
// console.log(jourActuel);

// 1ère lettre du jour en maj et on lui ajoute le reste du mot
jourActuel = jourActuel.chaAt(0).toUpperCase() + jourActuel.slice(1);

let tabJoursEnOrdre = joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat(joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)));

export default tabJoursEnOrdre;

