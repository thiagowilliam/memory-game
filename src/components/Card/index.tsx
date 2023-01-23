import * as S from './styles'

interface CardProps {
  id?: number
  idImage?: number
  image?: string
}

export function Card({ id, idImage, image }: CardProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.CardFront></S.CardFront>
        <S.CardBack>
          <img src={image} alt={`Carta ${id}`} width={300} />
        </S.CardBack>
      </S.Content>
    </S.Wrapper>
  )
}
