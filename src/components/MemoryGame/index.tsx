import { MockedCard } from '../../constants/cards'
import { RuleMemoryGameProvider } from '../../contexts/RuleMemoryGame'
import { Card } from '../Card'
import { Result } from '../Result'
import { Score } from '../Score'
import * as S from './styles'

export function MemoryGame() {
  return (
    <RuleMemoryGameProvider>
      <MemoryGameContent />
    </RuleMemoryGameProvider>
  )
}

export function MemoryGameContent() {
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
      <Result isVisible={false} />
    </S.Wrapper>
  )
}
