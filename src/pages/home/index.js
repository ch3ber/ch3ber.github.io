import React from 'react'
import {
  Container,
  Img,
  Link,
  ContainerButtons,
  Header,
  HeaderContent,
  Arrow
} from './styles'
import { LinkButton } from '../../components/NavBar/LinkButton'
import { AiOutlineArrowDown } from 'react-icons/ai'

import profilePicture from '../../assets/img/profilePicture.jpg'

export const Home = () => {
  const SIZE = '50px'
  return (
    <Container>
      <Header>
        <Img src={profilePicture} />
        <HeaderContent>
          <h1>Eber Alejo</h1>
          <h2>Frontend Web Developer</h2>
          <p>
            Naci en México, estoy estudiando la carrera de programación web en
            preparatoria. Aprendo y escribo código todos los dias desde hace mas
            de 1 año
          </p>
        </HeaderContent>
      </Header>

      <ContainerButtons>
        <Link to='/contact'>¡Hablemos!</Link>
        <LinkButton
          download='Eber Alejo Curriculum'
          link={profilePicture}
          gosth
        >
          Descargar CV
        </LinkButton>
      </ContainerButtons>

      <Arrow size={SIZE} />
    </Container>
  )
}
