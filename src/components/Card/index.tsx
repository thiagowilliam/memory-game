import { useState } from 'react'
import { useMemoryGame } from '../../hooks/useMemoryGame'
import * as S from './styles'

export interface CardProps {
  id?: any
  idFace?: any
  image?: string
  isFlipped?: boolean
}

export function Card({ id, idFace, image }: CardProps) {
  const { showCard, idsFaceCards } = useMemoryGame()
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = idsFaceCards.map((item: any) => item.id.includes(id))

  const handleCardClick = () => {
    showCard({ id, idFace })
    flipCard ? setIsFlipped(true) : setIsFlipped(false)
  }

  return (
    <S.Wrapper onClick={handleCardClick} isFlipped={isFlipped}>
      <S.Content>
        <S.CardFront></S.CardFront>
        <S.CardBack>
          <img src={image} alt={`Carta ${id}`} width={300} />
        </S.CardBack>
      </S.Content>
    </S.Wrapper>
  )
}
