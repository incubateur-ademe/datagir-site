import React from 'react'

import Tile from 'src/components/layout/Tile'
import Section from 'src/components/layout/Section'
import Sector from './sectors/Sector'

export default function Sectors() {
  return (
    <Section id='sectors'>
      <Tile.Wrapper>
        <Sector
          title={'Alimentation'}
          subtitle={
            'Aidez vos utilisateurs à découvrir l’impact environnemental de leur assiette.'
          }
          text={`Utilisez les données d'impact de plus de 2500 aliments dans vos produits et services. Accessibles en OpenData, elles sont disponibles en simple consultation ou peuvent être réutilisées dans vos applications ou services !`}
          color={'alimentation'}
          slug={'alimentation'}
        />
        <Sector
          title={'Transport'}
          subtitle={
            'Aidez vos utilisateurs à découvrir l’impact environnemental de leur assiette.'
          }
          text={`Utilisez des données ouvertes pour comparer les principaux modes de transport et encourager une mobilité moins émettrice de CO2 !`}
          color={'transport'}
          slug={'transport'}
        />
        <Sector
          title={'Logement'}
          subtitle={
            'Aidez vos utilisateurs à découvrir l’impact environnemental de leur assiette.'
          }
          text={`Utilisez les données des diagnostics de performance énergétique (DPE) pour apporter de nouvelles informations à vos utilisateurs !`}
          color={'logement'}
          slug={'logement'}
        />
      </Tile.Wrapper>
    </Section>
  )
}
