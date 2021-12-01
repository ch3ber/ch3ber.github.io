import React from 'react'

export const IndexNav = () => {

   React.useEffect(() => {
      //verificar si el elemento se encuentra en observacion
      const observer = new IntersectionObserver(entries => {
         if (entries[0].isIntersecting) {
            document.querySelector('.nav').classList.remove('shadow');
         } else {
            document.querySelector('.nav').classList.add('shadow');
         }
      });
      //elemento a observar
      observer.observe(document.querySelector('h1'));
   }, [])

   function goToSection(event) {
      event.preventDefault();
      const seccion = document.querySelector(event.target.attributes.href.value);
      seccion.scrollIntoView({ behavior: 'smooth' });
   }

   return(
      <nav className="nav">

         <span id="menuIcon">
            <img className="menu-icon" alt="Menu icon" />
         </span>

         <div className="container">
            <a
               className="nav__link"
               href="#portafolio"
               onClick={event => goToSection(event)}
            >
               Portafolio
            </a>
            <a className="nav__link" href="#servicios">Servicios</a>
            <a className="nav__link" href="#contacto">Contacto</a>
         </div>

         <span id="colorToggle">
            <img className="moon-icon" alt="Moon icon" />
         </span>

      </nav>
   )
}
