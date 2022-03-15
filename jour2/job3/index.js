// Créez un button ayant comme id “button”. Créez une balise <p> ayant
// comme id “compteur” et contenant “0”. Ce contenu doit évoluer
// proportionnellement au nombre d'événements click reçu par le bouton.
// Vous ne devez pas utiliser “onclick()” dans votre html. La fonction
// permettant d’effectuer la modification doit s'appeler “addone()”.
'use strict';

document.addEventListener('DOMContentLoaded', function loaded() {

    let p = document.getElementById('compteur');

    let button = document.getElementById('button');

    button.addEventListener('click', event => {
        p.textContent = `Nombre de clics : ${event.detail}`;
    });

});


