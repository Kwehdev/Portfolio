import { Button } from '@chakra-ui/react'

type NavButtonProps = {
  name: string
  btnRef: string
}

export default function NavButton({ name, btnRef }: NavButtonProps) {
  return (
    <Button
      color="inherit"
      fontSize="inherit"
      fontWeight="400"
      size="sm"
      _active={{
        bg: 'atom_dark.700',
      }}
      _hover={{
        bg: 'atom_dark.700',
      }}
      my={[1, null, 0]}
    >
      {name}
    </Button>
  )
}
