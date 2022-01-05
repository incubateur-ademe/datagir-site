import React from 'react'

import Tile from 'src/components/layout/Tile'
import Section from 'src/components/layout/Section'
import NumSubscribers from './datagir/NumSubscribers'
import NumEmbeds from './datagir/NumEmbeds'
import NumVisitors from './datagir/NumVisitors'

export default function Misc() {
  return (
    <Section>
      <Section.Title>Datagir en chiffres</Section.Title>
      <Tile.Wrapper>
        <NumSubscribers />
        <NumEmbeds />
        <NumVisitors />
      </Tile.Wrapper>
    </Section>
  )
}
