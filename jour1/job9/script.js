// Créez une fonction “tri” qui prend en paramètres un tableau de nombres
// nommé “numbers” et une variable “order” qui contient “asc” ou “desc”. A
// l’aide de la fonction sort() d’un algorithme développé par vos soins, cette fonction
// doit trier le tableau dans l’ordre ascendant ou décroissant, selon le
// paramètre passé, puis retourner le tableau.

'use strict';

function tri(numbers,order) {
    if (order == "asc") {
        var new_tab = numbers.sort(function(a, b) {
            return a - b;
        });

        return new_tab;
    }

    if (order == "desc") {
        var new_tab = numbers.sort(function(a, b) {
            return b - a;
          });
n
        return new_tab;
        
    }

}

