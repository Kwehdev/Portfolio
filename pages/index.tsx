import Head from 'next/head'
import Header from '../src/client/components/Header'
import Navbar from '../src/client/components/Navbar'

export default function Home() {
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
    </>
  )
}
