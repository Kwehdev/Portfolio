import React from 'react'
import { Flex, VStack } from '@chakra-ui/layout'
import MockComponentText from '../MockComponentText'
import SocialMediaBar from '../SocialMediaBar'
import DownArrow from '../DownArrow'

export default function Splash(): JSX.Element {
  return (
    <Flex
      h='100vh'
      w='100%'
      bg='radial-gradient(circle, #282c34, #1f292d, #1a2424, #181f1c, #181a15)'
      pos='relative'
    >
      <SocialMediaBar
        pos='absolute'
        right={8}
        top={8}
        direction='row'
        spacing={4}
      />
      <VStack
        m='auto'
        color='gray.300'
        fontFamily="'Ubuntu Mono', monospace"
        textAlign='center'
        alignItems='center'
        justifyContent='center'
        spacing={[8, 6, 4, 2]}
        px={8}
      >
        <MockComponentText
          componentName='Heading'
          content="Hi, I'm Tom"
          fontSize={['3xl', '4xl', '5xl', '6xl']}
        />
        <MockComponentText
          componentName='Text'
          content='I am a passionate Self-Taught Full-Stack Developer based in Turku, Finland.'
          fontSize={['xl', '2xl', '3xl', '4xl']}
          maxW='70ch'
        />
        <DownArrow pos='absolute' bottom={20} />
      </VStack>
    </Flex>
  )
}
