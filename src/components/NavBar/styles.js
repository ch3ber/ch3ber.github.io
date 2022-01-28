import styled from 'styled-components'
import { mainTheme } from '../../styles/themes/main'
import { NavLink as LinkRouter } from 'react-router-dom'
import { shadow } from '../../styles/effects'

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${mainTheme.colors.black800};
  display: grid;
  place-content: center center;
  height: 7rem;
`

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
`

export const Link = styled(LinkRouter)`
  display: grid;
  place-content: center center;
  width: 4.3rem;
  height: 4.3rem;
  background-color: ${mainTheme.colors.nav.linkBaground};
  border-radius: 1rem;
  color: ${mainTheme.colors.nav.linkForeground};
  transition: all 300ms ease;

  &[aria-current] {
    color: ${mainTheme.colors.white};
    background-color: ${mainTheme.colors.terciary};
    ${shadow(0, 0, 20, 5, mainTheme.colors.terciary90op)}
  }
`
