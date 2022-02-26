import styled, { keyframes } from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { media } from '../../styles/breakpoints'
import { SimpleCard } from '../../components/SimpleCard'

export const Container = styled.main`
  max-width: min(90%, 1200px);
  margin: 0 auto;
  padding-bottom: ${({ theme }) => `calc(${theme.nav.height} + 1rem)`};
`
export const Header = styled.header`
  text-align: center;

  ${media.md} {
    padding-top: 10rem;
  }

  ${media.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    margin: 0 auto;
  }

  ${media.xl} {
    padding-top: 10rem;
    padding-bottom: 5rem;
    max-width: 70%;
  }
`
export const HeaderContent = styled.div`
  margin-bottom: 5rem;
  h1 {
    font-size: 3.8rem;
    margin: 0;
  }
  h2 {
    margin: 0;
    margin-bottom: 2rem;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.primary.dark};
    font-weight: 300;
  }
  p {
    max-width: 75%;
    margin: 0 auto;
  }

  ${media.lg} {
    h1 {
      font-size: 6rem;
    }
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 2rem;
    }
  }
`
export const Img = styled.img`
  margin-top: 7rem;
  margin-bottom: 3rem;
  width: 15rem;
  border-radius: 50%;
  border: 5px dashed ${({ theme }) => theme.secondary.regular};

  ${media.lg} {
    margin: 0;
    width: 17rem;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: fit-content;
  margin: 0 auto;

  ${media.xs} {
    flex-direction: row;
  }

  ${media.lg} {
    gap: 10rem;
  }
`

export const Link = styled(LinkRouter)`
  display: grid;
  place-content: center center;
  border: 3px solid ${({ theme }) => theme.primary.regular};
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary.regular};
  border-radius: 1rem;
  transition: opacity 300ms ease;
  font-size: 1.8rem;

  &:hover {
    opacity: 0.8;
  }
`
export const ArrowContainer = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.md} {
    margin: 8rem 0;
  }
  ${media.xl} {
    margin: 13rem 0;
  }
`
function animateArrow () {
  return keyframes`
    form {
      transform: translateY(0px);
    }
    to {
      transform: translateY(15px);
    }
  `
}

export const Arrow = styled(AiOutlineArrowDown)`
  animation: ${animateArrow} 1s linear infinite alternate;
  margin: 0 auto;
`
export const CardsContainer = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 5rem;

  ${media.lg} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
  }
`
export const Tools = styled.div`
  ${media.lg} {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`
export const Tecnologies = styled.div`
  ${media.lg} {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
  }
`
export const IconsContainer = styled.div`
  color: ${({ theme }) => theme.primary.regular};
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
`
export const IconsCard = styled(SimpleCard)`
  height: 100%;
`
export const EsBarProgress = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${({ theme }) => theme.primary.regular};
  border-radius: 1rem;
`
export const IgBarProgress = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${({ theme }) => theme.primary.regular};
  position: relative;
  border-radius: 1rem;
`
export const IgProgress = styled.div`
  width: 50%;
  height: 1rem;
  position: relative;
  top: -1rem;
  background-color: ${({ theme }) => theme.primary.dark};
  border-radius: 1rem;
`
