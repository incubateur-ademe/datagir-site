import React from 'react'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/sector/Landing'

export default function Index() {
  return (
    <Web>
      <Landing
        sector='404'
        subtitle={`Oups...`}
        text={`Cette page n'existe pas (ou plus).`}
        buttons={[{ label: `Revenir à l'accueil`, to: `/` }]}
      />
    </Web>
  )
}
