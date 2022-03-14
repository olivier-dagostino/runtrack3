// Déclarez une fonction “bisextile” qui prend en paramètre une variable
// “année”. Si l’année est bisextile, la fonction retourne true, sinon elle
// retourne false.

function Bisextile(annee)
{
if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))) return true;

else return false;

}
console.log(Bisextile('2000'));
console.log(Bisextile('2002'));
console.log(Bisextile('1900'));
