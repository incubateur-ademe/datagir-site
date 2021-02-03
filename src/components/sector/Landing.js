import React from 'react'
import styled from 'styled-components'

import ButtonLink from 'src/components/base/ButtonLink'
import Title from './landing/Title'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 6rem;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 24rem;
  height: 100%;
  background-color: ${(props) => props.theme.colors[props.color]};
`

const Flex = styled.div`
  display: flex;
`
const Subtitle = styled.div`
  position: relative;
  width: 24rem;
  padding: 0 1rem 0 2rem;
  font-size: 1.5em;
  font-weight: 700;
  text-align: right;
  color: ${(props) => props.theme.colors.background};
`
const Content = styled.div`
  width: 30.25rem;
  margin: 0.25em 0 0 1rem;
`
const Text = styled.p`
  font-weight: 300;
`
const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 -0.5rem;

  a {
    margin: 0 0.5rem;
  }
`
export default function Landing(props) {
  const sectors = {
    alimentation: {
      subtitle: `Des données ouvertes pour une alimentation moins émettrice en CO2.`,
      text: `Utilisez les données d'impact de plus de 2500 aliments dans vos
            produits et services. Disponibles en OpenData, elles sont libres, en
            simple consultation, ou pour être réutilisées dans votre service`,
      buttons: [
        { label: `Voir la documentation`, to: `` },
        { label: `Voir les simulateurs`, to: `` },
      ],
    },
    transport: {
      subtitle: `Des données ouvertes pour une mobilité moins émettrice en CO2`,
      text: `Sed in enim ac odio consequat pellentesque at et mi. Donec sed finibus lacus, sed pretium nunc. Sed sit amet vestibulum turpis. Curabitur nec interdum dui. Phasellus blandit.`,
      buttons: [
        { label: `Voir la documentation`, to: `` },
        { label: `Voir les jeux de données`, to: `` },
      ],
    },
    logement: {
      subtitle: `Faciliter par les données, la rénovation et la décarbonation du secteur du bâtiment`,
      text: `Sed in enim ac odio consequat pellentesque at et mi. Donec sed finibus lacus, sed pretium nunc. Sed sit amet vestibulum turpis. Curabitur nec interdum dui. Phasellus blandit auctor cursus. Sed sit amet vestibulum turpis.`,
      buttons: [{ label: `Voir la documentation`, to: `` }],
    },
  }
  return (
    <Wrapper>
      <Background color={props.sector} />
      <Title sector={props.sector}>
        {props.sector.charAt(0).toUpperCase() + props.sector.slice(1)}
      </Title>
      <Flex>
        <Subtitle>{sectors[props.sector].subtitle}</Subtitle>
        <Content>
          <Text>{sectors[props.sector].text}</Text>
          <ButtonWrapper>
            {sectors[props.sector].buttons.map((button) => (
              <ButtonLink hollow color={props.sector} to={button.to}>
                {button.label}
              </ButtonLink>
            ))}
          </ButtonWrapper>
        </Content>
      </Flex>
    </Wrapper>
  )
}
