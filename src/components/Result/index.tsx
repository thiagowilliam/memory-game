import { useState } from 'react'
import * as S from './styles'

import ImgKitekat3 from '/kitekat-3.png'

export type ResultProps = {
  isVisible: boolean
}

export function Result({ isVisible = false }: ResultProps) {
  return (
    <>
      <S.Wrapper isVisible={isVisible}>
        <S.Content>
          <p>Seu nível de memória é:</p>
          <h1>Bom</h1>
          <img
            src={ImgKitekat3}
            alt="Imagem referente ao nível de memória"
            height={150}
          />
          <p>
            <strong>Taxa de acertos:</strong>
            <span>60%</span>
          </p>
          <button className="button">Nova Partida</button>
          <p>
            <small>
              * Essa análise é ilustrativa e não possui base científica.
            </small>
          </p>
        </S.Content>
      </S.Wrapper>
    </>
  )
}
