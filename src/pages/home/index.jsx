import React from 'react'

// import styled components
import {
  Container,
  Img,
  Link,
  ContainerButtons,
  Header,
  HeaderContent,
  ArrowContainer,
  Arrow,
  CardsContainer,
  Tecnologies,
  Tools,
  IconsContainer,
  IconsCard,
  EsBarProgress,
  IgBarProgress,
  IgProgress
} from './styles'

// import icons
import { BsMouse2Fill } from 'react-icons/bs'
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGitAlt,
  FaFigma
} from 'react-icons/fa'
import {
  SiJavascript,
  SiWebpack,
  SiStyledcomponents,
  SiNetlify,
  SiNeovim
} from 'react-icons/si'

// import components
import { LinkButton } from '../../components/LinkButton'
import { SimpleCard } from '../../components/SimpleCard'
import profilePicture from '../../assets/img/profilePicture.jpg'
import { PageTitle } from '../../components/PageTitle'
import { Footer } from '../../components/Footer'

export const Home = () => {
  const ARROW_SIZE = 50
  const MOUSE_SIZE = 30
  const ICONS_SIZE = 42

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
        <Arrow size={`${ARROW_SIZE}px`} />
      </ArrowContainer>

      <PageTitle isSubTilte>Habilidades y conocimientos</PageTitle>

      <CardsContainer>
        <Tecnologies>
          <IconsCard title='Lenguajes Y Tecnologias' data-category='teclogies'>
            <IconsContainer>
              <FaHtml5 size={ICONS_SIZE} />
              <FaCss3Alt size={ICONS_SIZE} />
              <FaSass size={ICONS_SIZE} />
              <FaReact size={ICONS_SIZE} />
              <FaGitAlt size={ICONS_SIZE} />
              <SiJavascript size={ICONS_SIZE} />
              <SiWebpack size={ICONS_SIZE} />
              <SiStyledcomponents size={ICONS_SIZE} />
            </IconsContainer>
          </IconsCard>
        </Tecnologies>

        <Tools>
          <SimpleCard title='Herramientas' data-category='tools'>
            <IconsContainer>
              <FaFigma size={ICONS_SIZE} />
              <SiNetlify size={ICONS_SIZE} />
              <SiNeovim size={ICONS_SIZE} />
            </IconsContainer>
          </SimpleCard>
        </Tools>

        <SimpleCard title='Idiomas'>
          <div>
            <p>Español</p>
            <EsBarProgress />
            <p>100%</p>
          </div>
          <div>
            <p>Ingles</p>
            <IgBarProgress />
            <IgProgress />
            <p>50%</p>
          </div>
        </SimpleCard>
      </CardsContainer>

      <Footer />
    </Container>
  )
}
