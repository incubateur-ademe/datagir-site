import React from 'react'

import Section from 'src/components/layout/Section'
import Tile from 'src/components/layout/Tile'

export default function Databases(props) {
  return (
    <Section>
      <Section.Title>
        Nos Jeux de Données{' '}
        {props.sector && (
          <Section.Sector color={props.sector}>
            {props.sector.charAt(0).toUpperCase() + props.sector.slice(1)}
          </Section.Sector>
        )}
      </Section.Title>
      <Tile.Wrapper>
        <Tile
          title={'Base Carbone'}
          link={'/simulateurs/monimpacttransport'}
          margin
        />
        <Tile
          title={'Agribalyse'}
          link={'/simulateurs/monimpacttransport'}
          color={'alimentation'}
          margin
        />
      </Tile.Wrapper>
    </Section>
  )
}
