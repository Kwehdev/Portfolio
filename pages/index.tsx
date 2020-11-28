import Head from 'next/head'
import React, { useMemo } from 'react'
import AboutMe from '../src/client/components/AboutMe'
import Contact from '../src/client/components/Contact'
import Footer from '../src/client/components/Footer'
import Header from '../src/client/components/Header'
import Navbar from '../src/client/components/Navbar'
import Projects from '../src/client/components/Projects'
import useActiveTab from '../src/hooks/useActiveTab'

export default function Home() {
  const { activeTab } = useActiveTab()

  const ActiveTabComponent = useMemo(() => {
    switch (activeTab) {
      case 'About_Me':
        return <AboutMe />
      case 'Projects':
        return <Projects />
      case 'Contact':
        return <Contact />
      default:
        return <AboutMe />
    }
  }, [activeTab])

  return (
    <>
      <Head>
        <title>Tom Whiting - Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Navbar />
      {ActiveTabComponent}
      <Footer />
    </>
  )
}
