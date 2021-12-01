import React from 'react'

export const Footer = () => {
   const date = new Date;
   return(
      <footer className="footer" id="contacto">

         <a className="mailto" href="mailto:eber4202@hotmail.com">
            <img loading="lazy" className="mailto__icon" alt="Mailto icon" />
         </a>

         <p>
            Hecho con &#128153; por
            <span style={{fontWeight: 'bold'}}>Eber Alejo</span>
            &copy; { date.getFullYear() }
         </p>

         <a rel="noreferrer" href="https://github.com/ch3ber" target="_blank">
            <img loading="lazy" className="github-icon" alt="GitHub icon" />
         </a>

      </footer>
   )
}
