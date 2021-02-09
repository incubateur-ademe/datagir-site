import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/base/Button'
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

  ${(props) => props.theme.mq.medium} {
    width: 41.6666667vw;
  }

  ${(props) => props.theme.mq.small} {
    width: calc(50vw - 0.6666666666666667vw);
    height: calc(50vw - 0.6666666666666667vw);
  }
`

const Flex = styled.div`
  display: flex;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
  }
`
const Subtitle = styled.div`
  position: relative;
  width: 24rem;
  margin-bottom: 1rem;
  padding: 0 1rem 0 2rem;
  font-size: 1.5em;
  font-weight: 700;
  text-align: right;
  color: ${(props) => props.theme.colors.background};

  ${(props) => props.theme.mq.medium} {
    width: 41.6666667vw;
    padding: 0 1.33333333vw 0;
  }

  ${(props) => props.theme.mq.small} {
    width: auto;
    color: ${(props) => props.theme.colors.text};
    text-align: left;
  }
`
const Content = styled.div`
  flex: 1;
  max-width: 30.25rem;
  margin: 0.25em 0 0 1rem;

  ${(props) => props.theme.mq.small} {
    align-items: center;
  }
`
const Text = styled.p`
  font-weight: 300;
`
const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 -0.5rem;

  > * {
    margin: 0 0.5rem;
  }

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
    align-items: flex-start;

    > * {
      margin: 0 0 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
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
              <Button
                key={button.label}
                hollow
                color={props.sector}
                to={button.to}
              >
                {button.label}
              </Button>
            ))}
          </ButtonWrapper>
        </Content>
      </Flex>
    </Wrapper>
  )
}
