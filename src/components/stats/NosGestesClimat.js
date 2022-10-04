import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'
import Tile from 'src/components/layout/Tile'
import Section from 'src/components/layout/Section'
import NumSimulations from './nosGestesClimat/NumSimulations'
import NumForks from './nosGestesClimat/NumForks'

const StyledLink = styled(MagicLink)`
  color: #46479f;
`
export default function Misc() {
  return (
    <Section>
      <Section.Title>
        <StyledLink to='http://nosgestesclimat.fr/'>
          Nos Gestes Climat
        </StyledLink>{' '}
        en chiffres
      </Section.Title>
      <Tile.Wrapper>
        <NumSimulations />
        <NumForks />
      </Tile.Wrapper>
    </Section>
  )
}
