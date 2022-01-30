import React from 'react'
import {
  Container,
  Img,
  Link,
  ContainerButtons,
  Header,
  HeaderContent,
  ArrowContainer,
  Arrow
} from './styles'
import { LinkButton } from '../../components/LinkButton'
import { BsMouse2Fill } from 'react-icons/bs'

import profilePicture from '../../assets/img/profilePicture.jpg'

export const Home = () => {
  const SIZE = 50
  const MOUSE_SIZE = 30

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

      <ArrowContainer>
        <BsMouse2Fill size={`${MOUSE_SIZE}px`} />
        <Arrow size={`${SIZE}px`} />
      </ArrowContainer>
    </Container>
  )
}
