'use strict';

document.addEventListener('DOMContentLoaded', function() {
   scrollNav();
});

function scrollNav() {
   const enlaces = document.querySelectorAll('.nav__link');
   enlaces.forEach(enlace => {
      enlace.addEventListener('click', event => {
         event.preventDefault();
         const seccion = document.querySelector(event.target.attributes.href.value);
         seccion.scrollIntoView({ behavior: 'smooth' });
      })
   });
}

