import React from 'react'
import { TextProps, Text, chakra } from '@chakra-ui/react'

type MockComponentTextProps = TextProps & {
  componentName: string
  content: string
}

export default function MockComponentText({
  componentName,
  content,
  ...chakraProps
}: MockComponentTextProps): JSX.Element {
  return (
    <Text {...chakraProps}>
      {'<'}
      <chakra.span color='#e5c07b'>{componentName} </chakra.span>
      <chakra.span color='#d19a66'>content=</chakra.span>
      <chakra.span color='#98c379'>&quot;{content}&quot;</chakra.span>
      {' />'}
    </Text>
  )
}
