import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'

import {
  SiCss3,
  SiGatsby,
  SiHtml5,
  SiJavascript,
  SiNextDotJs,
  SiReact,
  SiRedux,
  SiTypescript,
} from 'react-icons/si'

import React from 'react'
import {
  ChakraIcon,
  CSS3Icon,
  GatsbyIcon,
  HTML5Icon,
  JavaScriptIcon,
  NextJSIcon,
  ReactIcon,
  ReduxIcon,
  TypeScriptIcon,
} from '../TechIcon'

export default function AboutMe() {
  return (
    <Flex
      as="main"
      bgColor="atom_dark.700"
      color="white"
      p={12}
      flexDir="column"
    >
      <Heading pt={6} pb={8}>
        Hi, I'm Tom
      </Heading>
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
        <Flex w="40%" px={2} boxSize="md" ml="auto" mb="auto">
          <Box>
            <Image
              borderRadius="full"
              src="/assets/Portrait.png"
              alt="Thomas Whiting"
            />
          </Box>
        </Flex>
      </Flex>
      <Flex
        bgColor="white"
        mx="10%"
        color="atom_dark.900"
        py={12}
        mt={4}
        borderRadius="30px"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          align="center"
          w="100%"
          px={8}
          fontSize="1em"
        >
          <Stack
            align="center"
            textAlign="center"
            flex="1 0"
            direction="column"
            spacing={8}
            divider={<StackDivider />}
          >
            <Heading fontSize="1.5em">Front-End</Heading>
            <Text>
              I prioritize accessible, clean UI. I typically write my own CSS,
              using Chakra-UI for reusability and efficiency.
            </Text>
            <Heading fontSize="1.4em">Tech Stack</Heading>
            <List spacing={2} textAlign="initial">
              <ListItem>
                <ListIcon as={HTML5Icon} />
                HTML5
              </ListItem>
              <ListItem>
                <ListIcon as={CSS3Icon} />
                CSS3
              </ListItem>
              <ListItem>
                <ListIcon as={JavaScriptIcon} />
                JavaScript
              </ListItem>
              <ListItem>
                <ListIcon as={TypeScriptIcon} />
                TypeScript
              </ListItem>
              <ListItem>
                <ListIcon as={ReactIcon} />
                React
              </ListItem>
              <ListItem>
                <ListIcon as={ReduxIcon} />
                Redux
              </ListItem>
              <ListItem>
                <ListIcon as={GatsbyIcon} />
                Gatsby
              </ListItem>
              <ListItem>
                <ListIcon as={NextJSIcon} />
                Next.js
              </ListItem>
              <ListItem>
                <ListIcon as={ChakraIcon} />
                Chakra UI
              </ListItem>
            </List>
          </Stack>

          <Stack
            flex="1 0"
            direction="column"
            divider={<StackDivider />}
          ></Stack>
        </Stack>
      </Flex>
    </Flex>
  )
}
