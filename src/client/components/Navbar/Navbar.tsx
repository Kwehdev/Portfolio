import {
  Box,
  ButtonGroup,
  Flex,
  Icon,
  Link,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import React, { useMemo, useState } from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai'
import { ActiveTabRef } from '../../utils/typings'
import NavButton from '../NavButton'

type NavButtonData = {
  name: string
  tabRef: ActiveTabRef
}

const navButtonDataImpl: NavButtonData[] = [
  {
    name: 'About Me',
    tabRef: 'About_Me',
  },
  {
    name: 'Projects',
    tabRef: 'Projects',
  },
  {
    name: 'Contact',
    tabRef: 'Contact',
  },
]

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false)

  const handleToggle = () => setDisplayMenu(!displayMenu)

  const NavButtons = useMemo(
    () =>
      navButtonDataImpl.map((buttonData) => (
        <NavButton key={`NavBtn_${buttonData.name}`} {...buttonData} />
      )),
    []
  )

  return (
    <Flex
      as="nav"
      w="100%"
      h="8vh"
      bgColor={'atom_dark.800'}
      color="white"
      alignItems="center"
      px={4}
      fontSize="1.1em"
      pos={['relative', null, 'initial']}
    >
      <Text
        display="inline-block"
        fontWeight="400"
        pr={4}
        borderRight="2px solid white"
      >
        KwehDev
      </Text>
      <Box display={['block', null, 'none']} ml="auto" onClick={handleToggle}>
        <svg
          fill="white"
          width="1.3em"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Stack
        direction={['column', null, 'row']}
        ml={[0, null, 2]}
        display={[displayMenu ? 'flex' : 'none', null, 'flex']}
        pos={['absolute', null, 'initial']}
        top={['100%', null, 'initial']}
        left={[0, null, 'initial']}
        bg="inherit"
        zIndex={1}
        alignItems="center"
        w="100%"
        pb={[4, null, 0]}
      >
        <ButtonGroup
          variant="ghost"
          spacing={0}
          w="100%"
          alignItems="center"
          flexDir={['column', null, 'row']}
        >
          {NavButtons}
        </ButtonGroup>

        <Stack
          alignItems="center"
          direction="row"
          spacing={[3, 2, 1]}
          ml={[null, null, 'auto']}
          divider={
            <StackDivider orientation="horizontal" opacity={[null, null, 0]} />
          }
        >
          <Link
            href="https://github.com/kwehdev"
            h="100%"
            display="flex"
            alignItems="center"
          >
            <Icon
              as={AiFillGithub}
              boxSize={8}
              _hover={{
                opacity: 0.6,
              }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tom-whiting-bbbb491a0/"
            h="100%"
            display="flex"
            alignItems="center"
          >
            <Icon
              as={AiFillLinkedin}
              boxSize={8}
              _hover={{
                opacity: 0.6,
              }}
              color="blue.400"
            />
          </Link>
          <Link
            href="/assets/Thomas_Whiting-CV.pdf"
            h="100%"
            display="flex"
            alignItems="center"
          >
            <Icon
              as={AiOutlineDownload}
              boxSize={8}
              _hover={{
                opacity: 0.6,
              }}
              color="orange.600"
            />
          </Link>
        </Stack>
      </Stack>
    </Flex>
  )
}
