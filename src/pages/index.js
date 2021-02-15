import React from 'react'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/home/Landing'
import Sectors from 'src/components/home/Sectors'
import Applications from 'src/components/Applications'
import Users from 'src/components/home/Users'
import Newsletter from '../components/Newsletter'
import Contact from 'src/components/Contact'

export default function Index() {
  return (
    <Web title={'Accueil'}>
      <Landing />
      <Sectors />
      <Applications />
      <Users />
      <Newsletter />
      <Contact />
    </Web>
  )
}
