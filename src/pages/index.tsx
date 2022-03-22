import React from 'react'
import Head from 'next/head'

import rocketseatLogo from '../assets/rocketseatLogo.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <img src={rocketseatLogo} alt="rocketseatLogo" />
        <h1>Hello World!</h1>
      </main>

    </div>
  )
}

export default Home
