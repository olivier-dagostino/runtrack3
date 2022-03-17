// Créez une fonction “afficherjourssemaines”. 
//Cette fonction ne prend pas de paramètre. Créez un tableau de strings “jourssemaines” qui contient
// l’ensemble des jours de la semaine, du Lundi au Dimanche. Ensuite à
// l’aide d’une boucle for (for!), affichez un par un ces jours.

'use strict';

function afficherjourssemaines() {

    var tab=new Array("Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche");

    for (let i=0; i<tab.length; i++) {

        console.log(tab[i]);
    }
}

afficherjourssemaines();