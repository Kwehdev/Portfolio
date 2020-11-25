import { Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex
      as="header"
      alignItems="center"
      px={8}
      bgImage="url('assets/Header-bg.jpg')"
      bgSize="cover"
      w="100%"
      h="100vh"
    >
      <Flex
        flexDir="column"
        alignItems={['center', 'initial']}
        color={'atom_dark.800'}
      >
        <Heading
          fontSize={['38px', '46px', '52px']}
          fontFamily='"Patua One", cursive'
          fontWeight="400"
          letterSpacing="1.6px"
        >
          Thomas Whiting
        </Heading>
        <Text
          as="h2"
          fontSize={['24px', '28px', '32px']}
          w={['100%', '90%', '80%', '50%']}
          fontFamily={'subHeading'}
          fontWeight="500"
          textAlign={['center', 'initial']}
          letterSpacing="1.3px"
          px={[0, 4, 8]}
        >
          My name is Thomas Whiting, and I am a self-taught Full-Stack Developer
          based in Turku, Finland
        </Text>
      </Flex>
    </Flex>
  )
}
