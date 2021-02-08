import React from 'react'
import styled from 'styled-components'

import useMounted from 'src/hooks/useMounted'

import Button from 'src/components/base/Button'
import Title from './landing/Title'

const Wrapper = styled.div`
  position: relative;
  min-height: 24rem;
  margin-bottom: 6em;

  ${(props) => props.theme.mq.medium} {
    min-height: 41.6666667vw;
  }
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 24rem;
  height: 24rem;
  background-color: ${(props) => props.theme.colors.main};

  ${(props) => props.theme.mq.medium} {
    width: 41.6666667vw;
    height: 41.6666667vw;
  }
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
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 1400ms 1400ms;

  ${(props) => props.theme.mq.medium} {
    width: 41.6666667vw;
    padding: 0 1.33333333vw 0;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 30.25rem;
  margin: 0.25em 0 0 1rem;
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 1400ms 1800ms;

  ${(props) => props.theme.mq.medium} {
    width: auto;
    margin: 0.25em 0 0 1.33333333vw;
  }
`
const Text = styled.p`
  font-weight: 300;
`
export default function Landing(props) {
  const mounted = useMounted()
  return (
    <Wrapper>
      <Background />
      <Title mounted={mounted} />
      <Flex>
        <Subtitle mounted={mounted}>
          Apporter l'information environnementale au plus près des citoyens
        </Subtitle>
        <Content mounted={mounted}>
          <Text>
            Datagir vous accompagne dans la compréhension et l’intégration des
            données ouvertes environnementales de l’ADEME afin de vous aider à
            créer de nouvelles fonctionnalités et applications.
          </Text>
          <Button hollow to={'/qui-sommes-nous'}>
            En savoir +
          </Button>
        </Content>
      </Flex>
    </Wrapper>
  )
}
