"use strict";
gsap.registerPlugin(ScrollTrigger);

    const titres = gsap.utils.toArray('.titre--h2');
    const paragraphes = gsap.utils.toArray('.texte');
    const images = gsap.utils.toArray(".image--text")

    // Animation pour les titres
    titres.forEach(titre => {
      gsap.from(titre, {
        scrollTrigger: {
          trigger: titre,
          start: 'top 85%', // Fait apparaître le titre quand il est à 80% en dessous de la vue
        },
        opacity: 0,
        y: 50,
        duration: 1
      });
    });

    images.forEach(titre => {
      gsap.from(titre, {
        scrollTrigger: {
          trigger: titre,
          start: 'top 85%', // Fait apparaître le titre quand il est à 80% en dessous de la vue
        },
        opacity: 0,
        y: 50,
        duration: 1
      });
    });

    // Animation pour les paragraphes
    paragraphes.forEach(paragraphe => {
      gsap.from(paragraphe, {
        scrollTrigger: {
          trigger: paragraphe,
          start: 'top 85%', // Fait apparaître le paragraphe quand il est à 80% en dessous de la vue
        },
        opacity: 0,
        y: 50,
        duration: 1
      });
    });

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

