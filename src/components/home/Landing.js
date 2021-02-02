import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/base/Button'
import Title from './landing/Title'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 6em;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 24rem;
  height: 24rem;
  background-color: ${(props) => props.theme.colors.main};
`
const Flex = styled.div`
  display: flex;
`
const Subtitle = styled.div`
  position: relative;
  width: 24rem;
  padding: 0 1rem 0;
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
export default function Landing() {
  return (
    <Wrapper>
      <Background />
      <Title />
      <Flex>
        <Subtitle>
          Apporter l'information environnementale au plus près des citoyens
        </Subtitle>
        <Content>
          <Text>
            Datagir accompagne les entreprises, associations ou collectifs dans
            la compréhension et l’intégration des données environnementales de
            l’ADEME afin de créer de nouvelles fonctionnalités ou applications.
          </Text>
          <Button hollow>En savoir +</Button>
        </Content>
      </Flex>
    </Wrapper>
  )
}
