import React from 'react'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/home/Landing'
import Applications from 'src/components/Applications'

export default function Index() {
  return (
    <Web title={'Datagir'}>
      <Landing />
      <Applications />
    </Web>
  )
}
