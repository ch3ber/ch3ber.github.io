'use strict';

document.addEventListener('DOMContentLoaded', function() {
   alert('Esta pagina esta en desarrollo');
   createTargets();
   createServicios();
   scrollNav();
   setYear();
});

const DATA_APP = {
   pagina1: 'Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. scelerisque netus. Nam placerat fames enim mauris enim nec.',
   pagina2: 'Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. scelerisque netus. Nam placerat fames enim mauris enim nec.',
   pagina3: 'Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. scelerisque netus. Nam placerat fames enim mauris enim nec.',
   button1: 'Ver sitio web',
   button2: 'Ver codigo',
   link1: 'https://eber-festival-musica.vercel.app',
   link2: 'https://eber-template1.netlify.app',
   link3: 'https://eber-blogdecafe.netlify.app',
   servicio1: 'Social media integration',
   servicio2: 'SEO',
   servicio3: 'Optimizacion',
   servicio4: 'Creacion de pagias web',
   descripcionServicio1: 'Puedo integrar la mayoria de redes sociales y sus apis en tu sitio web',
   descripcionServicio2: '¿Quieres que tu página se posicione primero que otras?, dejame ayudarte con eso',
   descripcionServicio3: 'Optimiza tu página web para que cargue a la mayor velocidad, dile adios a las paginas lentas',
   descripcionServicio4: 'Crea la pagina de tus sueños, tendras una página con el mejor SEO, la mejor optimización en la web y un diseño increible',

};

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

function createTargets() {
   const targets = document.querySelector('.targetsPortafolio');
   for (let i=1; i < 4; i++) {
      const target = document.createElement('DIV');
      
      const img = document.createElement('IMG');
      img.setAttribute('src', `build/img/pagina${i}.png`);

      const description = document.createElement('P');
      description.textContent = DATA_APP[`pagina${i}`];

      const buttons = document.createElement('DIV');
      let buttonI = 1;
      while (buttonI < 3) {
         const button = document.createElement('A');
         button.classList.add(`button-style${buttonI}`);
         button.innerHTML = DATA_APP[`button${buttonI}`];
         button.href = DATA_APP[`link${i}`];
         buttons.append(button);
         buttonI++;
      }
      buttons.classList.add('buttons-container');


      target.append(img, description, buttons);
      targets.append(target);
   }
}

function createServicios() {
   const servicios = document.querySelector('.targetsServicios');
   for (let i=1; i < 5; i++) {
      const target = document.createElement('DIV');

      const title = document.createElement('H3');
      title.textContent = DATA_APP[`servicio${i}`];

      const description = document.createElement('P');
      description.textContent = DATA_APP[`descripcionServicio${i}`];

      const img = document.createElement('IMG');
      img.setAttribute('src', `build/img/servicio${i}.svg`);

      target.append(title, description, img);
      servicios.append(target);
   }
}

function setYear() {
   const date = new Date;
   const year = date.getFullYear();
   const yearHtml = document.getElementById('year');
   yearHtml.textContent = year;
}
