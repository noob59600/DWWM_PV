import tabJoursEnOrdre from "./ressources/gestionTemps";

const CLEAPI = 'a5218a05c0d9fbe5f78fda9e06175b91';
let resultatsAPI;

const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');
const heure = document.querySelector('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');
const joursDiv = document.querySelectorAll('.jour-prevision-nom');
const tempJoursDiv = document.querySelectorAll('.jour-prevision-temp');
const imgIcone = document.querySelector('.logo-meteo');
const chargementContainer =  document.querySelector('.overlay-icone-chargement');

if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(position =>{

        // console.log(position);

        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long,lat); 



    }, ()=> {
        alert(`Vous avez refusé la géolocalisation, l' application ne peut pas fonctionner, veuillez l' activer` )
    })
}
function AppelAPI(long,lat){

    // faire une promesse avec fetch, qui se résoud en se transformant en format json
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEAPI}`)
    .then((reponse) => {
        // transformation en (JavaScript Object Notation)
        return reponse.json();
    })
    // on affiche les données avec console log
    .then((data) =>{
        // console.log(data);
        resultatsAPI = data;

        temps.innerText = resultatsAPI.current.weather[0].description;
        // Math.trunk  on retire les chiffres apres la virgule
        temperature.innerText = `${Math.trunk(resultatAPI.current.temp)}°`

        localisation.innerText = resultatsAPI.timezone;

// Les heures par tranche de 3, avec leur temperature.

// constructeur new Date, pour chercher l' heure actuelle 
let heureActuelle = new Date().getHours();

for(let i = 0; i < heure.lenght; i++ ){

    let heureIncr = heureActuelle + i * 3;

    if(heureIncr > 24){
        heure[i].innerText = `${heureIncr - 24} h`;
    }else if(heureIncr === 24){
        heure[i].innerText = "00 h"

    }else{
    heure[i].innerText = `${heureIncr} h`; 
}
    }
    // temp pour 3h
    for(let j = 0; j < tempPourH.lenght; j++){
        tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
    }


    // 3 premières lettres des jours

    for(let k = 0; k < tabJoursEnOrdre.length; k++); {

        joursDiv[k].innerText = tabJoursEnOrdre.slice(0,3);
    }

    // temp par jour
    for(let m = 0; m < 7; m++); {

        tempJoursDiv[m].innerText = `${Math.trunc(resultatsAPI).daily[m + 1].temp.day}°`
    }

    // Icone dynamique
    if(heureActuelle >= 6 && heureActuelle <21){
// on prend les icones jour entre 6 et 21 h
        imgIcone.src = `ressources/jour/${resultatsAPI.current.weather[0].icon}.svg`
    }else{
// pour les autres cas, on prend les icones nuit
        imgIcone.src = `ressources/nuit/${resultatsAPI.current.weather[0].icon}.svg`
    }

    chargementContainer.classList.add('disparition');

})
}