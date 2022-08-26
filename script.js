window.onload = () => {
    
    let button = document.querySelector("#btn");
  
   
    // Fonction de la calculatrice IMC
    button.addEventListener("click", calculIMC);
};
  
function calculIMC() {


// On place la taille de l' utilisateur dans une variable.
// Indiquer une valeur est indispensable
  
    let taille = parseInt(document .querySelector("#taille").value);


//   On place le poids de l' utilisateur dans une variable.
// Indiquer une valeur est indispensable
    let poids = parseInt(document.querySelector("#poids").value);


    let resultat = document.querySelector("#resultat");
  
  
    // Vérification des données utilisateur, si exploitables, sinon message d' erreur

    if (taille === "" || isNaN(taille)) 
        resultat.innerHTML = "Indiquez une taille correcte!";
  
    else if (poids === "" || isNaN(poids)) 
        resultat.innerHTML = "Indiquez un poids correct!";
  
    // Si les 2 données sont valables, alors on calcule l' imc
    else {
  
        // On arrête le résultat à 2 chiffres après la virgule
        let imc = (poids / ((taille * taille) / 10000)).toFixed(2);
  
        // Répartion de l' IMC selon la catégorie
        if (imc < 18.6)

            resultat.innerHTML = `Poids anormalement bas : <span>IMC = ${imc}</span></br>Mets ton autre pied sur la balance...`;
  
        else if (imc >= 18.6 && imc < 24.9)

            resultat.innerHTML = `Poids normal : <span>IMC = ${imc}</span>`;
  
        else
         
            resultat.innerHTML =`Surcharge Pondérale : <span>IMC = ${imc}</span></br>Il va falloir te mettre au sport!`;
    }
}