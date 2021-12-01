import React from 'react'

export const Header = () => (
   <div className="container">
      <h1>Eber Alejo - Frontend Wep Developer</h1>
      <header className="header">
         <div className="container about">
            <div className="about__description">
               <h2>Quién soy?</h2>
               <p>
                  Soy Eber Alejo un Frontend web developer y Freelancer originario de México,
                  actualmente estoy estudiando la carrera de desarrollo web en
                  la preparatoria. Soy un amante de la programación y de Linux
               </p>
            </div>
            <div className="about__profilePicture">
               <picture>
                  <source srcSet="assets/img/eberalejo.webp" type="image/webp" />
                  <img loading="lazy" src="assets/img/eberalejo.jpg" alt="Eber Alejo" />
               </picture>
            </div>
         </div>
         <div className="container tecnologias">
            <div className="tecnologias__using">
               <p>Tecnologias y herramientas que uso</p>
               <div className="iconsContainer">
                  <img loading="lazy" src="assets/img/icon-html5.svg" alt="Icon html5" />
                  <img loading="lazy" src="assets/img/icon-css3.svg" alt="Icon css3" />
                  <img loading="lazy" src="assets/img/icon-sass.svg" alt="Icon sass" />
                  <img loading="lazy" src="assets/img/icon-gulp.svg" alt="Icon gulp" />
                  <img loading="lazy" src="assets/img/icon-javascript.svg" alt="Icon javascript" />
                  <img loading="lazy" src="assets/img/icon-git.svg" alt="Icon git" />
                  <img loading="lazy" src="assets/img/icon-figma.svg" alt="Icon figma" />
               </div>
            </div>
            <div className="tecnologias__learning">
               <p>Tecnologias que estoy aprendiendo</p>
               <div className="iconsContainer">
                  <img loading="lazy" src="assets/img/icon-php.svg" alt="Icon php" />
                  <img loading="lazy" src="assets/img/icon-react.svg" alt="Icon react" />
               </div>
            </div>
         </div>
      </header>
   </div>
)
