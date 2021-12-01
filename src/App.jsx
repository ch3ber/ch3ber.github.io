import React from 'react'
import { Footer } from './components/Footer/index.jsx'
import { Header } from './components/Header/index.jsx'
import { IndexNav } from './components/IndexNav/index.jsx'
import { Portfolio } from './components/Portfolio/index.jsx'

export const App = () => (
   <>
      <IndexNav />
      <Header />
      <main>
         <img loading="lazy" className="wave" alt="Wave picture" style={{margin: '0 0 -1rem 0'}} />

         <Portfolio />

         <img loading="lazy" className="wave" alt="Wave picture" style={{transform: 'rotate(180deg)', margin: '-0.5rem 0 0 0'}} />

         <div className="servicios">
            <div className="container">
               <h2>Mis Servicios</h2>
               <div id="servicios" className="servicios__cards"></div>
            </div>
         </div>

      </main>
      <Footer />
   </>
)
