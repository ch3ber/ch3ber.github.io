import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { shadow } from '../../styles/effects'

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.background.regular};
  display: grid;
  place-content: center center;
  height: ${({ theme }) => theme.nav.height};
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
  background-color: ${({ theme }) => theme.nav.linkBaground};
  border-radius: 1rem;
  color: ${({ theme }) => theme.nav.linkForeground};
  transition: all 300ms ease-out;

  &[aria-current] {
    color: ${({ theme }) => theme.mono.white};
    background-color: ${({ theme }) => theme.secondary.regular};
    ${({ theme }) => shadow(0, 0, 20, 5, theme.secondary.opacity90)}
  }
`