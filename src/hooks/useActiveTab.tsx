import { useContext } from 'react'
import { ActiveTabContext } from '../client/context/ActiveTabContext'

export default function useActiveTab() {
  const ctx = useContext(ActiveTabContext)

  if (!ctx) {
    throw new Error(
      'useActiveTab was called outside of a ActiveTabContextProvider'
    )
  }

  return ctx
}
