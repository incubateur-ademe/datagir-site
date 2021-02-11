import React from 'react'

import Web from 'src/components/layout/Web'

import FancyLanding from 'src/components/page/FancyLanding'

export default function Index() {
  return (
    <Web>
      <FancyLanding
        color='main'
        title='404'
        subtitle={`Oups...`}
        text={`Cette page n'existe pas (ou plus).`}
        buttons={[{ label: `Revenir à l'accueil`, to: `/` }]}
      />
    </Web>
  )
}
