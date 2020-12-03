import { Flex } from '@chakra-ui/react'
import { useMemo } from 'react'
import ProjectCard from '../ProjectCard'

//Could be retrieved via API Call in future. I want to leave this possibility open.
const projectData = [
  {
    name: 'Portfolio',
    image: '/assets/projects/portfolio/Portfolio-desktop.PNG',
    description:
      'My personal portfolio website. This utilizes Chakra UI for custom CSS, NextJS, and TypeScript. This website features accessibility and responsive design, and is hosted on Vercel with a custom domain.',
    ghLink: 'https://github.com/Kwehdev/portfolio',
    liveLink: 'https://kwehdev.fi',
  },
]

export default function Projects() {
  const ProjectCards = useMemo(
    () =>
      projectData.map((project, i) => (
        <ProjectCard key={`Project_${i}`} {...project} />
      )),
    [projectData]
  )
  return (
    <Flex
      as="main"
      bgColor="atom_dark.700"
      color="white"
      p={[8, 10, 12, 14]}
      flexDir={['column', null, 'row']}
      flexWrap="wrap"
    >
      {ProjectCards}
    </Flex>
  )
}
