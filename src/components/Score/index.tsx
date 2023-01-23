import { Point } from './Point'
import * as S from './styles'

export function Score() {
  return (
    <S.Wrapper>
      <Point title="Pontos" value={0} />
      <Point title="Cartas viradas" value={0} />
    </S.Wrapper>
  )
}
