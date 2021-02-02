import React from 'react'

import Section from 'src/components/layout/Section'
import Tile from 'src/components/layout/tile'

export default function Applications() {
  return (
    <Section>
      <Section.Title>Nos Simulateurs</Section.Title>
      <Tile.Wrapper>
        <Tile
          title={'Mon Impact Transport'}
          image={'https://fakeimg.pl/250x100/'}
          link={'/simulateurs/monimpacttransport'}
          color={'transport'}
        />
        <Tile
          title={'Mes Fruits et Légumes de Saison'}
          image={'https://fakeimg.pl/250x100/'}
          link={'/simulateurs/monimpacttransport'}
          color={'alimentation'}
        />
        <Tile
          title={'Nos Gestes Climat'}
          image={'https://fakeimg.pl/250x100/'}
          link={'/simulateurs/monimpacttransport'}
        />
        <Tile
          title={'Mon Convertisseur CO2'}
          image={'https://fakeimg.pl/250x100/'}
          link={'/simulateurs/monimpacttransport'}
        />
      </Tile.Wrapper>
    </Section>
  )
}
