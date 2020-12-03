import {
  Box,
  Heading,
  Image,
  Flex,
  Text,
  Stack,
  Link,
  Icon,
  StackDivider,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

type ProjectCardProps = {
  name: string
  image: string
  description: string
  ghLink: string
  liveLink: string
}

export default function ProjectCard({
  name,
  image,
  description,
  ghLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <Flex
      border="2px solid white"
      borderRadius="20px"
      p={[6, 4, 2]}
      flexDir="column"
      mx={[0, null, '2%']}
      my={'2%'}
      w={['100%', null, '46%', '29%']}
      alignItems="center"
    >
      <Heading py={4}>{name}</Heading>
      <Box w="90%" py={4}>
        <Image borderRadius="10px" alt={`${name} image`} src={image} />
      </Box>
      <Text w="80%" py={4}>
        {description}
      </Text>
      <Stack mt="auto" direction="row" fontSize="1.8em" spacing={4}>
        <Link _hover={{ opacity: 0.6 }} href={ghLink} isExternal>
          <Icon as={AiFillGithub} />
        </Link>
        <Link _hover={{ opacity: 0.6 }} href={liveLink} isExternal>
          <Icon as={ExternalLinkIcon} />
        </Link>
      </Stack>
    </Flex>
  )
}
