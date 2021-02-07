import React from 'react'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/home/Landing'
import Sectors from 'src/components/home/Sectors'
import Applications from 'src/components/Applications'
import Users from 'src/components/Users'
import Databases from 'src/components/Databases'
import Contact from 'src/components/Contact'
import Newsletter from '../components/Newsletter'

export default function Index() {
  console.log('test')
  return (
    <Web title={'Accueil'}>
      <Landing />
      <Sectors />
      <Applications />
      <Users />
      <Databases />
      <Contact />
      <Newsletter />
    </Web>
  )
}
