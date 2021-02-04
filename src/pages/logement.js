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
        sector='logement'
        subtitle={`Faciliter par les données, la rénovation et la décarbonation du secteur du bâtiment`}
        text={`Sed in enim ac odio consequat pellentesque at et mi. Donec sed finibus lacus, sed pretium nunc. Sed sit amet vestibulum turpis. Curabitur nec interdum dui. Phasellus blandit auctor cursus. Sed sit amet vestibulum turpis.`}
        buttons={[{ label: `Voir la documentation`, to: `` }]}
      />
      <Presentation sector='logement' />
      <Applications sector='logement' />
      <Databases sector='logement' />
      <Users sector='logement' />
      <Contact sector='logement' />
    </Web>
  )
}
