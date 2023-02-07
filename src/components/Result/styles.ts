import styled, { css } from 'styled-components'
import { ResultProps } from '.'

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isVisible }: ResultProps) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 999;
  backdrop-filter: blur(10px);
  opacity: ${({ isVisible }: ResultProps) => (isVisible ? 1 : 0)};
`
export const Content = styled.div`
  padding: 1rem 2rem;
  background-color: #333;
  border-radius: 0.5rem;
  text-align: center;
`
