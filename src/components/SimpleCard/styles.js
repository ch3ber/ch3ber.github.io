import styled from 'styled-components'
import { shadow } from '../../styles/effects'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  max-width: 95%;
  width: 95%;
  margin: 0 auto;
  padding: 3rem;
  margin-top: 4.5rem;
  background-color: ${({ theme }) => theme.background.light};
  border-radius: 1rem;
  position: relative;
`
export const TitleContainer = styled.div`
  position: absolute;
  top: -4.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 70%;
`
export const Title = styled.h2`
  margin: 0;
  padding: 1.7rem;
  text-align: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.background.regular};
  ${({ theme }) => shadow(0, 0, 10, 0, theme.shadows.backgroundRegular)}
`
