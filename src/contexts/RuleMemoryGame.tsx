import { createContext, useState } from 'react'

export type RuleMemoryGameContextProps = {
  children: React.ReactNode
}

export type RuleMemoryGameContextData = {
  cards: any
  qntFaceCards: any
  qntPoints: any
  showCard: any
  idsFaceCards: any
  idsMatchesFound: any
}

export const RuleMemoryGameContext = createContext(
  {} as RuleMemoryGameContextData,
)

export const RuleMemoryGameProvider = ({
  children,
}: RuleMemoryGameContextProps) => {
  const [cards, setCards] = useState([])
  const [idsMatchesFound, setIdsMatchesFound] = useState([])
  const [idsFaceCards, setIdsFaceCards] = useState([])

  const [qntFaceCards, setQntFaceCards] = useState(0)
  const [qntPoints, setQntPoints] = useState(0)

  const incrementQntFaceCards = () => {
    setQntFaceCards((prev: any) => prev + 1)
  }

  const showCard = (id: any, idFace: number) => {
    incrementQntFaceCards()
    if (idsFaceCards.length >= 2) {
      return setIdsFaceCards([])
    }

    if (idsFaceCards.length == 0) {
      return setIdsFaceCards([id])
    }
    setIdsFaceCards((ids) => [ids[0], id])
  }

  const value = {
    cards,
    qntFaceCards,
    qntPoints,
    showCard,
    idsFaceCards,
    idsMatchesFound,
  }
  return (
    <RuleMemoryGameContext.Provider value={value}>
      {children}
    </RuleMemoryGameContext.Provider>
  )
}
