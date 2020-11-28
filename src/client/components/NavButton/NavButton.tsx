import { Button } from '@chakra-ui/react'
import useActiveTab from '../../../hooks/useActiveTab'
import { ActiveTabRef } from '../../utils/typings'

type NavButtonProps = {
  name: string
  tabRef: ActiveTabRef
}

export default function NavButton({ name, tabRef }: NavButtonProps) {
  const { activeTab, changeActiveTab } = useActiveTab()
  return (
    <Button
      color="inherit"
      fontSize="inherit"
      fontWeight="400"
      size="sm"
      opacity={activeTab === tabRef ? 1 : 0.7}
      _active={{
        bg: 'atom_dark.700',
      }}
      _hover={{
        bg: 'atom_dark.700',
      }}
      my={[1, null, 0]}
      onClick={() => changeActiveTab(tabRef)}
    >
      {name}
    </Button>
  )
}
