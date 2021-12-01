import React from 'react'
import ReactDOM from 'react-dom';
import '@styles/app.scss';
import { App } from './App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

document.addEventListener('DOMContentLoaded', function() {
   createWaves(userPreferencesMode.matches ? 'dark' : 'white');
   renderIcons(userPreferencesMode.matches ? 'white' : 'dark');
   createServicios();
   toggleMenuResponsive();
   darkMode(hasDarkMode);
});

//leer preferencias del usuario sobre el dark mode
const userPreferencesMode = window.matchMedia('(prefers-color-scheme: dark)');
let hasDarkMode = userPreferencesMode.matches;

// datos globales de la app
const DATA_APP = {
   pagina1: 'Un festival ficticio de Rock y EDM, tiene un video en loop, menu sticky usando javascript y una galeria creada con javascript',
   pagina2: 'Portafolio web Freelancer (no usado) overlay en header y formulario de contacto usando CSS grid',
   pagina3: 'Blog con diferentes entradas, SEO, performance y validación de datos en el formulario usando javascript',
   link1: 'https://eber-festival-musica.vercel.app',
   link2: 'https://ch3ber-freelancer-website.netlify.app',
   link3: 'https://ch3ber-blogdecafe.netlify.app',
   alt1: 'Pagina web Festival de musica',
   alt2: 'Pagina web Freelancer',
   alt3: 'Pagina web Blog de cafe',
   code1: 'https://github.com/ch3ber/festival-musica',
   code2: 'https://github.com/ch3ber/freelancer-website',
   code3: 'https://github.com/ch3ber/BlogDeCafe',
   servicio1: 'Social media integration',
   servicio2: 'SEO',
   servicio3: 'Optimizacion',
   servicio4: 'Creacion de pagias web',
   descripcionServicio1: 'Puedo integrar la mayoria de redes sociales y sus apis en tu sitio web',
   descripcionServicio2: '¿Quieres que tu página se posicione primero que otras?, dejame ayudarte con eso',
   descripcionServicio3: 'Optimiza tu página web para que cargue a la mayor velocidad, dile adios a las paginas lentas',
   descripcionServicio4: 'Crea la pagina de tus sueños, tendras una página con el mejor SEO, la mejor optimización en la web y un diseño increible',

};

//crear waves del color deseado
function createWaves(fill) {
   document.querySelectorAll('.wave').forEach(wave => wave.setAttribute('src', `assets/img/wave-${fill}.svg`));
}

//crear seccion de servicios
function createServicios() {
   for (let i=1; i < 5; i++) {
      const title = document.createElement('H3');
      title.textContent = DATA_APP[`servicio${i}`];

      const description = document.createElement('P');
      description.textContent = DATA_APP[`descripcionServicio${i}`];

      const img = document.createElement('IMG');
      img.setAttribute('src', `assets/img/servicio${i}.svg`);
      img.setAttribute('alt', DATA_APP[`servicio${i}`]);

      const card = document.createElement('DIV');
      card.classList.add('servicio');
      card.append(title, description, img);
      document.querySelector('#servicios').append(card);
   }
}

//menu responsive
function toggleMenuResponsive() {
   //mostrar el menu responsive
   document.getElementById('menuIcon').addEventListener('click', show);
   function show() {
      document.querySelector('.nav').classList.toggle('nav--show');
      document.body.classList.toggle('static');
   }
   //ocultar el menu responsive
   document.querySelectorAll('.nav__link').forEach(link => link.addEventListener('click', remove));
   function remove() {
      document.querySelector('.nav').classList.remove('nav--show');
      document.body.classList.remove('static');
   }
}

//cambiar el color de la pagina
function darkMode(userPreferencesDark = null) {
   //lee las preferencias del usuario para definir el color de la pagina
   if (userPreferencesDark) {
      document.body.classList.add('dark');
      createWaves('dark');
      renderIcons('white');
   }
   //cambiar color de pagina al dar click al icono de luna
   document.getElementById('colorToggle').addEventListener('click', darkModeToggle);
   function darkModeToggle() {
      document.body.classList.toggle('dark');
      createWaves(hasDarkMode ? 'white' : 'dark');
      renderIcons(hasDarkMode ? 'dark' : 'white');
      hasDarkMode = !hasDarkMode;
   }
}

//renderizar los iconos segun el color de la pagina
function renderIcons(fill) {
   document.querySelector('.menu-icon').setAttribute('src', `assets/img/menu-${fill}.svg`);
   document.querySelector('.moon-icon').setAttribute('src', `assets/img/moon-${fill}.svg`);
   document.querySelector('.mailto__icon').setAttribute('src', `assets/img/mailto-${fill}.svg`);
   document.querySelector('.github-icon').setAttribute('src', `assets/img/github-${fill}.svg`);
}
