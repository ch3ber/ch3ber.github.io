import React from 'react'
import {PortfolioCard} from '../PortfolioCard/index.jsx'

export const Portfolio = () => (
   <div className="portafolio">
      <div className="container">

         <h2>Portafolio</h2>

         <div className="portafolio__cards">
            <PortfolioCard
               imgSrc="assets/img/pagina1.png"
               imgAlt="Pagina web Festival de musica"
               webSite="https://eber-festival-musica.vercel.app"
               webCode="https://github.com/ch3ber/festival-musica"
            >
               <p>
                  Un festival ficticio de Rock y EDM, tiene un video en loop,
                  menu sticky usando javascript y una galeria creada con
                  javascript
               </p>
            </PortfolioCard>

            <PortfolioCard
               imgSrc="assets/img/pagina2.png"
               imgAlt="Pagina web Freelancer"
               webSite="https://ch3ber-freelancer-website.netlify.app"
               webCode="https://github.com/ch3ber/freelancer-website"
            >
               <p>
                  Portafolio web Freelancer (no usado) overlay en header y
                  formulario de contacto usando CSS grid
               </p>
            </PortfolioCard>

            <PortfolioCard
               imgSrc="assets/img/pagina3.png"
               imgAlt="Pagina web Blog de cafe"
               webSite="https://ch3ber-blogdecafe.netlify.app"
               webCode="https://github.com/ch3ber/BlogDeCafe"
            >
               <p>
                  Blog con diferentes entradas, SEO, performance y validación
                  de datos en el formulario usando javascript
               </p>
            </PortfolioCard>

         </div>
      </div>
   </div>
)
