import { Flex, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Flex
      fontSize="1.1em"
      h="8vh"
      bgColor={'atom_dark.800'}
      color="white"
      alignItems="center"
      justifyContent={['center', null, 'initial']}
      px={[0, null, '2%']}
      w="100%"
    >
      <Text>&copy; 2020 Thomas Whiting</Text>
    </Flex>
  )
}
