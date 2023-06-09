"use strict";

document.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var windowHeight = window.innerHeight;
    var scrollTop = window.pageYOffset;
  
    sections.forEach(function(section) {
      var offsetTop = section.offsetTop;
  
      if (scrollTop + windowHeight > offsetTop) {
        section.classList.add('visible');
      }
    });
  });