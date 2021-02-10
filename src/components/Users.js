import React from 'react'
import styled from 'styled-components'

import Section from 'src/components/layout/Section'

const Wrapper = styled.div``
export default function Users(props) {
  return (
    <Section id='users'>
      <Section.Title>
        Nos Réutilisateurs{' '}
        {props.sector && (
          <>
            liés {props.sector === 'alimentation' ? "à l'" : 'au '}
            <Section.Sector color={props.sector}>
              {props.sector.charAt(0).toUpperCase() + props.sector.slice(1)}
            </Section.Sector>
          </>
        )}
      </Section.Title>
      <Wrapper>En cours de développement</Wrapper>
    </Section>
  )
}
