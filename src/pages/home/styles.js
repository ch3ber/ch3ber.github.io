import styled from 'styled-components'
import { mainTheme } from '../../styles/themes/main'
import { Link as LinkRouter } from 'react-router-dom'
import { AiOutlineArrowDown } from 'react-icons/ai'

export const Container = styled.main`
  background-color: ${mainTheme.colors.black900};
  max-width: min(90%, 1200px);
  margin: 0 auto;
`
export const Header = styled.header`
  text-align: center;
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
    color: ${mainTheme.colors.primary800};
    font-weight: 300;
  }
  p {
    max-width: 75%;
    margin: 0 auto;
  }
`
export const Img = styled.img`
  margin-top: 7rem;
  margin-bottom: 3rem;
  width: 15rem;
  border-radius: 50%;
  border: 5px dashed ${mainTheme.colors.terciary};
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: fit-content;
  margin: 0 auto;
`

export const Link = styled(LinkRouter)`
  display: grid;
  place-content: center center;
  border: 3px solid ${mainTheme.colors.primary600};
  padding: 1rem;
  background-color: ${mainTheme.colors.primary600};
  border-radius: 1rem;
  transition: opacity 300ms ease;
  font-size: 1.8rem;

  &:hover {
    opacity: 0.8;
  }
`
export const Arrow = styled(AiOutlineArrowDown)`
  transform: translateY(-5px);
`
