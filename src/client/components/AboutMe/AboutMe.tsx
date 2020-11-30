import { Box, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function AboutMe() {
  return (
    <Flex
      as="main"
      bgColor="atom_dark.700"
      color="white"
      p={12}
      flexDir="column"
    >
      <Heading pb={6}>Hi, I'm Tom</Heading>
      <Flex>
        <Flex w="60%" px={4} flexDir="column" fontSize={20}>
          <Stack spacing={4}>
            <Text>
              I am a British self-taught full-stack Developer, and I have been
              studying development for 3 years. My background is in IT Technical
              Support, though several years ago I made the decision to
              transition to Development, as I held a passion for it since I was
              young.
            </Text>
            <Text>
              Since August 2020, I have been studying with Integrify. I
              currently serve as one of the Team Leaders for my group, as well
              as tech lead. I suggest technologies and give demonstrations on
              their use, and assist with debugging/code structuring and best
              practices where I can apply them in my peers' code.
            </Text>
            <Text>
              I am most passionate about Open-Source software, and I prioritize
              readable, well-documented code. I typically push myself out of my
              comfort zone and adopt technologies I am unfamiliar with, and I
              have developed a strong foundation as well as skills with various
              libraries, such as Graphql, Next.js & Chakra UI.
            </Text>
          </Stack>
        </Flex>
        <Flex w="40%" px={2} boxSize="lg">
          <Box>
            <Image
              borderRadius="full"
              src="/assets/Portrait.png"
              alt="Thomas Whiting"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
