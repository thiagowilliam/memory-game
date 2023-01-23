import * as S from './styles'

interface PointProps {
  value: number
  title: string
}

export function Point({ value, title }: PointProps) {
  return (
    <S.Wrapper>
      <strong>{title}: </strong>
      <span>{value}</span>
    </S.Wrapper>
  )
}
