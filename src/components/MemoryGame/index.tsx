import { MockedCard } from '../../constants/cards'
import { Card } from '../Card'
import { Score } from '../Score'
import * as S from './styles'

export function MemoryGame() {
  return (
    <S.Wrapper>
      <S.Content>
        <h1>Memory Game</h1>
        <Score />
        <S.CardsWrapper>
          {MockedCard.map((carta) => (
            <Card key={carta.id} {...carta} />
          ))}
        </S.CardsWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
