import { Flex, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Flex
      fontSize="1.1em"
      isFullWidth="true"
      h="8vh"
      bgColor={'atom_dark.800'}
      color="white"
      alignItems="center"
      justifyContent={['center', null, 'initial']}
      px={[0, null, '2%']}
    >
      <Text>&copy; 2020 Thomas Whiting</Text>
    </Flex>
  )
}
