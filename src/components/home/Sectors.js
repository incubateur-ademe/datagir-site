import React from 'react'

import Tile from 'src/components/layout/tile'
import Section from 'src/components/layout/Section'
import Sector from './sectors/Sector'

export default function Sectors() {
  return (
    <Section>
      <Tile.Wrapper>
        <Sector
          title={'Alimentation'}
          subtitle={
            'Aidez vos utilisateurs à découvrir l’impact environnemental de leur assiette.'
          }
          text={`Utilisez les données d'impact de plus de 2500 aliments dans vos produits et services. Disponibles en OpenData, elles sont libres, en simple consultation, ou pour être réutilisées dans votre service`}
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
          text={`Utilisez les données d'impact de plus de 2500 aliments dans vos produits et services. Disponibles en OpenData, elles sont libres, en simple consultation, ou pour être réutilisées dans votre service`}
          color={'logement'}
          slug={'logement'}
        />
      </Tile.Wrapper>
    </Section>
  )
}
