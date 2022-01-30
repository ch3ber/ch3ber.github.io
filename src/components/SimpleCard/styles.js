import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
`
export const Title = styled.h2`
  position: absolute;
  top: calc(-50% - 2rem);
  left: 0;
  right: 0;
`
