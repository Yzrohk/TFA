"use strict";

function scrollAffichage() {
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
scrollAffichage();

function burgerMenu () {
  var btnBurgermenu = document.querySelector(".menu__bouton");
  var listeSvgBurgermenu = document.querySelectorAll(".svg__burgermenu");
  var menuListe = document.querySelector(".menu__liens");

  if (btnBurgermenu && listeSvgBurgermenu && menuListe) {
    btnBurgermenu.addEventListener("click", activateBurgermenu);

    function activateBurgermenu() {
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

        menuListe.classList.toggle("menu__liens--active")

    }
  }
}
burgerMenu();