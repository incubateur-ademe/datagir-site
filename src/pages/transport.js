import React from 'react'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/sector/Landing'
import Presentation from 'src/components/sector/Presentation'
import Applications from 'src/components/Applications'
import Users from 'src/components/Users'
import Databases from 'src/components/Databases'
import Contact from 'src/components/Contact'

export default function Transport() {
  return (
    <Web>
      <Landing
        sector='transport'
        subtitle={`Des données ouvertes pour une mobilité moins émettrice en CO2`}
        text={`Sed in enim ac odio consequat pellentesque at et mi. Donec sed finibus lacus, sed pretium nunc. Sed sit amet vestibulum turpis. Curabitur nec interdum dui. Phasellus blandit.`}
        buttons={[
          { label: `Voir la documentation`, to: `` },
          { label: `Voir les jeux de données`, to: `` },
        ]}
      />
      <Presentation sector='transport' />
      <Applications sector='transport' />
      <Databases sector='transport' />
      <Users sector='transport' />
      <Contact sector='transport' />
    </Web>
  )
}
