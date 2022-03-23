import React from 'react'
import Head from 'next/head'

import rocketseatLogo from '../assets/rocketseatLogo.svg'

import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <img src={rocketseatLogo} alt="rocketseatLogo" />
      <h1>ReactJs Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </Container>
  )
}

export default Home
