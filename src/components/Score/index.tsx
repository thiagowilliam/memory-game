import { useMemoryGame } from '../../hooks/useMemoryGame'
import { Point } from './Point'
import * as S from './styles'

export function Score() {
  const { qntFaceCards, qntPoints } = useMemoryGame()

  return (
    <S.Wrapper>
      <Point title="Pontos" value={qntPoints} />
      <Point title="Cartas viradas" value={qntFaceCards} />
    </S.Wrapper>
  )
}
