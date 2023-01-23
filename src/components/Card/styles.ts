import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  width: 100%;
  aspect-ratio: 3/4;
  perspective: 400px;
  border: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  img {
    max-width: 100%;
  }

  &:hover {
    section {
      transform: rotateY(180deg);
    }
  }
`

export const Content = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`

const baseCard = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 0.5rem;
  overflow: hidden;

  backface-visibility: hidden;
`
export const CardFront = styled.div`
  ${baseCard}
  background: #bbb;
`
export const CardBack = styled.div`
  ${baseCard}
  transform: rotateY(180deg)
`
