import React from 'react'
import styled from 'styled-components'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/home/Landing'
import Applications from 'src/components/Applications'

const Text = styled.p`
  font-size: 1.25rem;
`
export default function Index() {
  return (
    <Web title={'Datagir'}>
      <Landing />
      <Applications />
      <Text>
        Découvrez également{' '}
        <a
          href='https://beta.gouv.fr/startups/?incubateur=ademe'
          target='_blank'
        >
          toutes les réalisations de l'incubateur
        </a>
        .
      </Text>
    </Web>
  )
}
