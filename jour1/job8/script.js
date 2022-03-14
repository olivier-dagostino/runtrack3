// Créez une fonction “sommenombrespremiers” qui prend en paramètres
// deux variables. Si ces deux variables sont des nombres premiers, alors la
// fonction retourne leur somme. Sinon, la fonction retourne false.

'use strict';

function sommenombrespremiers(variable1,variable2) {

    for ( var i = 2 ;  i < variable1 ; i++){
        if ( variable1 % i == 0) {
            return false;
        }
        
    }

    for ( var i = 2 ;  i < variable2 ; i++){
        if ( variable2 % i == 0) {
           return false;
        }
        
    }

    var resultat = variable1 + variable2 ;
    return resultat;

}
sommenombrespremiers();