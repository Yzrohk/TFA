"use strict";

/*function scrollAffichage() {
document.addEventListener('scroll', function () {
  var sections = document.querySelectorAll('.section');
  var windowHeight = window.innerHeight;
  var scrollTop = window.pageYOffset;

  sections.forEach(function (section) {
    var offsetTop = section.offsetTop;

    if (scrollTop + windowHeight > offsetTop) {
      section.classList.add('visible');
    }
  });
});
}
scrollAffichage();*/

const links = document.querySelectorAll('.el__lien');

  links.forEach(link => {
    link.addEventListener('click', function(event) {

      // Supprimer la classe 'active' du lien précédemment cliqué
      const previouslyActive = document.querySelector('.el__lien.lastClicked');
      if (previouslyActive) {
        previouslyActive.classList.remove('lastClicked');
      }

      // Ajouter la classe 'active' au lien cliqué
      this.classList.add('lastClicked');
      slideBurgerMenu();
    });
  });


var btnBurgermenu = document.querySelector(".menu__bouton");
var listeSvgBurgermenu = document.querySelectorAll(".svg__burgermenu");
var menuListe = document.querySelector(".menu__liens");
function burgerMenu () {

  if (btnBurgermenu && listeSvgBurgermenu && menuListe) {
    btnBurgermenu.addEventListener("click", slideBurgerMenu);
  }
}
burgerMenu();

// Change la classe 'active' sur le Burger Menu
function toggleMenu() {
  menuListe.classList.toggle("menu__liens--active");
}

// Slide le burger menu
function slideBurgerMenu() {
  listeSvgBurgermenu.forEach(svg => {
      if(svg.classList.contains("svg--active")) {
          svg.classList.toggle("svg--inactive");
          svg.classList.toggle("svg--active");
      }
      else if (svg.classList.contains("svg--inactive")) {
          svg.classList.toggle("svg--active");
          svg.classList.toggle("svg--inactive");
      }
  });
  toggleMenu();
}

