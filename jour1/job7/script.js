// Créez une fonction “jourtravaille” qui prend en paramètre une date au format Date.
//Si la date correspond à un jour férié de l’année 2020, la fonction affiche “Le $jour $mois $année est un jour férié”.

//Si elle correspond à un samedi ou un dimanche, alors le message affiché est “Non, $jour $mois $année est un week-end”, sinon afficher “Oui, $jour, $mois $année est un jour travaillé”.
// ex : “Oui, 9 mars 2020 est un jour travaillé”.
// $jour correspond au numéro du jour, $mois au mois et $année à l’année.
// Les jours fériés sont référencés sur

// https://demarchesadministratives.fr/actualites/calendrier-des-jours-feries-20
// 19-2020-2021

function jourtravaille(date) {

    var date_du_jour = new Date(date);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date_fr = date_du_jour.toLocaleDateString('fr-FR', options);
   
   
    var joursFeries = ["2020-01-01","2020-04-13","2020-05-01","2020-05-08","2020-05-21","2020-06-01","2020-07-14","2020-08-15","2020-11-01","2020-11-11","2020-12-25"];
    
    if (joursFeries.includes(date) == true) {
        console.log("Le " + date_fr + " est un jour férié");
    }
    else if (date_du_jour.getDay() == 6 || date_du_jour.getDay() == 0 ){
        console.log("Non, " + date_fr + " est un week-end");
    }
    else {
        console.log("Oui, " + date_fr + " est un jour travaillé");
    }

}
jourtravaille('2020/12/01');