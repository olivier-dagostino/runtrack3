// Créez une balise button ayant comme id “button”. En cliquant sur le
// bouton, vous devrez faire apparaître le texte “le $ est un bon élément
// monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la
// classe pour cacher cet élément. ”.
// En dessous faire un bouton qui servira à cacher tout l’élément html.


$(document).ready(function () {
    $("p").hide();
    $("#button").click(function () {
        $("p").show();
    })
    $("#button2").click(function () {
        $("html").hide();
    })
});