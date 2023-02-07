import { useContext } from 'react'
import { RuleMemoryGameContext } from '../contexts/RuleMemoryGame'

export const useMemoryGame = () => {
  const context = useContext(RuleMemoryGameContext)
  return context
}
