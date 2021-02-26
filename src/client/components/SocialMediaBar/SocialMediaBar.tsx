import React from 'react'

import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai'
import { Link, StackProps } from '@chakra-ui/layout'
import { Icon, Stack } from '@chakra-ui/react'

export default function SocialMediaBar({
  ...chakraProps
}: StackProps): JSX.Element {
  return (
    <Stack {...chakraProps}>
      <Link href='https://github.com/Kwehdev/'>
        <Icon
          boxSize={10}
          color='gray.300'
          as={AiFillGithub}
          _hover={{
            opacity: '.4',
          }}
        />
      </Link>
      <Link href='https://www.linkedin.com/in/tom-whiting-bbbb491a0/'>
        <Icon
          boxSize={10}
          color='blue.500'
          as={AiFillLinkedin}
          _hover={{
            opacity: '.4',
          }}
        />
      </Link>
      <Link href='/assets/Thomas_Whiting-CV.pdf'>
        <Icon
          boxSize={10}
          color='orange.500'
          as={AiOutlineDownload}
          _hover={{
            opacity: '.4',
          }}
        />
      </Link>
    </Stack>
  )
}
