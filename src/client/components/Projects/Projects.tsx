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
  {
    name: 'CountryApp',
    image: '/assets/projects/countryapp/CountryApp-desktop.PNG',
    description:
      'A Front-End project developed while at Integrify. I used TypeScript, React, and Redux / Redux Saga to create this project. This app retrieves data from an external API and presents it to a user, who can sort countries by various filters, can search countries, or favourite countries and find more information about them.',
    ghLink: 'https://github.com/Kwehdev/integrify-redux-ts-assignment',
    liveLink: 'https://goofy-tesla-9252cb.netlify.app/',
  },
  {
    name: 'LibraryApp',
    image: '/assets/projects/libraryapp/LibraryApp-desktop.PNG',
    description:
      'A Full-Stack app developed while at Integrify, using TS, NextJS, GraphQL and MongoDB. A User is able to sign in and borrow/return books, and an admin may create/delete/update books, users, and authors.',
    ghLink: 'https://github.com/Kwehdev/integrify-library-app',
    liveLink:
      'https://fast-track-5-typescript-men-boilerplate-ika03ncjl.vercel.app/',
  },
  {
    name: "Tico's Quest",
    image: '/assets/projects/ticosquest/Ticos-quest-desktop.PNG',
    description:
      'A Browser game Written in React. The objective is to collect coins while avoiding monsters, eventually reaching a bone. This was my first project using React. I intend to remake it in the future, utilizing Canvas & TypeScript, as well as making it responsive.',
    ghLink: 'https://github.com/Tomppa-FI/Ticos-Bone',
    liveLink: 'https://enigmatic-peak-53768.herokuapp.com/',
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
