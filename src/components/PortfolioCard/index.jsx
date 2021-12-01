import React from 'react'
import {CardButton} from '../CardButton/index.jsx';

export const PortfolioCard = ({imgSrc, imgAlt, children, webSite, webCode}) => (
   <div className="portafolio__card">

      <img src={imgSrc} alt={imgAlt} />

      { children }

      <div className="card__buttons">

         <CardButton
            text="ver sitio web"
            href={webSite}
            style="fill"
         />
         <CardButton
            text="ver codigo"
            href={webCode}
            style="ghost"
         />

      </div>
   </div>
)
