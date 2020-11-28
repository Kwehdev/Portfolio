import { createContext, useState } from 'react'
import { ActiveTabRef } from '../../utils/typings'

export const ActiveTabContext = createContext(undefined)

export const ActiveTabProvider = ({ children }: { children: JSX.Element }) => {
  const [activeTab, setActiveTab] = useState('About_Me')

  const changeActiveTab = (newTabRef: ActiveTabRef) => setActiveTab(newTabRef)

  const value = {
    activeTab,
    changeActiveTab,
  }

  return (
    <ActiveTabContext.Provider value={value}>
      {children}
    </ActiveTabContext.Provider>
  )
}
