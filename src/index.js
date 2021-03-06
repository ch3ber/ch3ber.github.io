'use strict';
import '@styles/app.scss';
document.addEventListener('DOMContentLoaded', function() {
   createWaves(userPreferencesMode.matches ? 'dark' : 'white');
   renderIcons(userPreferencesMode.matches ? 'white' : 'dark');
   createCards();
   createServicios();
   setYear();
   toggleMenuResponsive();
   scrollNav();
   darkMode(hasDarkMode);
   navShadow();
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

//mover a la seccion indicada que selecciono el usuario en el menu
function scrollNav() {
   document.querySelectorAll('.nav__link').forEach(enlace => {
      enlace.addEventListener('click', event => {
         event.preventDefault();
         const seccion = document.querySelector(event.target.attributes.href.value);
         seccion.scrollIntoView({ behavior: 'smooth' });
      })
   });
}

function navShadow() {
   //verificar si el elemento se encuentra en observacion
   const observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
         document.querySelector('.nav').classList.remove('shadow');
      } else {
         document.querySelector('.nav').classList.add('shadow');
      }
   });
   //elemento a observar
   observer.observe(document.querySelector('h1'));
}

// funcion para crear las cards de la seccion portafolio
function createCards() {
   for (let i=1; i < 4; i++) {
      
      //agregar imagen sobre el sitio web
      const img = document.createElement('IMG');
      if (document.querySelector('html').classList.contains('webp')) {
         img.setAttribute('src', `assets/img/pagina${i}.webp`);
      } else {
         img.setAttribute('src', `assets/img/pagina${i}.png`);
      }

      img.setAttribute('alt', DATA_APP[`alt${i}`]);

      //agregar la descripcion sobre el sitio web
      const description = document.createElement('P');
      description.textContent = DATA_APP[`pagina${i}`];

      //creacion de bottones dentro de un contenedor
      const buttonsContainer = document.createElement('DIV');
      buttonsContainer.classList.add('card__buttons');
      const button1 = createButton('ver sitio web', 'fill', DATA_APP[`link${i}`]);
      const button2 = createButton('ver codigo', 'ghost', DATA_APP[`code${i}`]);
      buttonsContainer.append(button1, button2);

      //crear card e insertar en la seccion de portafolio
      const card = document.createElement('DIV');
      card.classList.add('portafolio__card');
      card.append(img, description, buttonsContainer);
      document.querySelector('#portafolio').append(card);
   }
}

//funcion para crear botones
function createButton(content, style, href, rel = true) {
   const element = document.createElement('A');
   element.innerHTML = content;
   element.classList.add(`button-${style}`);
   element.href = href;
   element.setAttribute('target', '_blank');
   if (rel) { element.setAttribute('rel', 'noreferrer'); }
   return element;
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

//definir el ano de copyright
function setYear() {
   const date = new Date;
   const year = date.getFullYear();
   document.getElementById('year').textContent = year;
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
