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
  return (
    <Wrapper>
      <Background color={props.sector} />
      <Title sector={props.sector}>
        {props.sector.charAt(0).toUpperCase() + props.sector.slice(1)}
      </Title>
      <Flex>
        <Subtitle>{props.subtitle}</Subtitle>
        <Content>
          <Text>{props.text}</Text>
          <ButtonWrapper>
            {props.buttons.map((button) => (
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
