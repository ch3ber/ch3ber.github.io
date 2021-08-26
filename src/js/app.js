'use strict';

document.addEventListener('DOMContentLoaded', function() {
   alert('Esta pagina esta en desarrollo');
   createWaves(DATA_APP.darkMode);
   createTargets();
   createServicios();
   setYear();
   showMenu();
   scrollNav();
   darkMode();
});

const DATA_APP = {
   darkMode: false,
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

function createWaves(darkMode) {
   let color;
   if (darkMode == false) {
      color = 'white';
   }
   if (darkMode) {
      color = 'dark';
   }
   document.querySelectorAll('.wave').forEach(wave => wave.setAttribute('src', `build/img/wave-${color}.svg`));
}

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
   for (let i=1; i < 4; i++) {
      const target = document.createElement('DIV');
      
      const img = document.createElement('IMG');
      img.setAttribute('src', `build/img/pagina${i}.png`);

      const description = document.createElement('P');
      description.textContent = DATA_APP[`pagina${i}`];

      const buttons = document.createElement('DIV');
      let buttonNumber = 1;
      while (buttonNumber < 3) {
         const button = document.createElement('A');
         button.classList.add(`button-style${buttonNumber}`);
         button.innerHTML = DATA_APP[`button${buttonNumber}`];
         button.href = DATA_APP[`link${i}`];
         buttons.append(button);
         buttonNumber++;
      }
      buttons.classList.add('buttons-container');


      target.append(img, description, buttons);
      document.querySelector('.targetsPortafolio').append(target);
   }
}

function createServicios() {
   for (let i=1; i < 5; i++) {
      const target = document.createElement('DIV');

      const title = document.createElement('H3');
      title.textContent = DATA_APP[`servicio${i}`];

      const description = document.createElement('P');
      description.textContent = DATA_APP[`descripcionServicio${i}`];

      const img = document.createElement('IMG');
      img.setAttribute('src', `build/img/servicio${i}.svg`);

      target.append(title, description, img);
      document.querySelector('.targetsServicios').append(target);
   }
}

function setYear() {
   const date = new Date;
   const year = date.getFullYear();
   document.getElementById('year').textContent = year;
}

function showMenu() {
   document.getElementById('menuIcon').addEventListener('click', show);
   document.querySelectorAll('.nav__link').forEach(link => link.addEventListener('click', show));
   function show() {
      document.querySelector('.nav').classList.toggle('nav--show');
      document.body.classList.toggle('static');
   }
}

function darkMode() {
   document.getElementById('colorToggle').addEventListener('click', darkModeToggle);
   function darkModeToggle() {
      DATA_APP.darkMode = !DATA_APP.darkMode;
      document.body.classList.toggle('dark');
      createWaves(DATA_APP.darkMode);
   }
}
