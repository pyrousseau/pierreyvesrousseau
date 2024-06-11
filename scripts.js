/* Place your JavaScript in this file */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {

  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});



// Ceci est une fonction auto - exécutable.Les fonctions auto - exécutables
// sont des fonctions qui s'exécutent immédiatement après leur déclaration,
// sans avoir besoin d'être appelées.Les accolades immédiatement après la 
// déclaration de la fonction et les parenthèses à la fin de la déclaration 
// définissent la fonction et permettent de l'exécuter immédiatement.



(function () {
  // Utilisation de la directive "use strict" pour activer le mode strict en JavaScript
  // Cela implique une meilleure gestion des erreurs et une syntaxe plus stricte pour le code
  "use strict"

  // Sélectionne tous les éléments avec la classe "animate-on-scroll"
  const elements = document.querySelectorAll(".animate-on-scroll");
  // Options pour l'observateur d'intersection


  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }


  // Instanciation de l'observateur d'intersection
  const observer = new IntersectionObserver(function (entries, observer) {
    // Boucle sur chaque entrée pour traiter les intersections
    entries.forEach(entry => {
      // Si l'entrée est en train d'intersecter avec la zone visible
      if (entry.isIntersecting) {
        // Ajouter la classe "is-visible" pour déclencher l'animation
        entry.target.classList.add("is-visible");

        // Cesser d'observer cet élément
        observer.unobserve(entry.target);
      }
    });
  }, options);
  // Observer chaque élément
  elements.forEach(element => {
    observer.observe(element);
  });

})();



let header = document.getElementById('logo');
let content = document.getElementById('content')
document.addEventListener('scroll', function() {
    // Get scroll position
    let scrollPosition = window.pageYOffset;

    // Calculate whether the scroll it 350px or not then set the opacity to face the header out
    if (scrollPosition <= 350) {
        header.style.opacity = 1 - scrollPosition / 150;
        content.style.opacity = 0.2 + scrollPosition / 150;
    } else {
        
        header.style.opacity = 0.2;
    }

});