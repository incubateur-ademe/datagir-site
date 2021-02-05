import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem;

  ${(props) => props.theme.mq.medium} {
    width: 33.3333vw;
    padding: 0 0.6666666666666667vw;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1.5rem;
  color: white;
  background-color: ${(props) => props.theme.colors[props.color]};

  ${(props) => props.theme.mq.medium} {
    padding: 2vw;
  }
`
const Top = styled.div``
const Title = styled.h2`
  margin-bottom: 0.675em;
  color: white;

  ${(props) => props.theme.mq.medium} {
    font-size: 1.75em;
  }
`
const Subtitle = styled.p`
  font-weight: 700;
`
const Text = styled.p`
  margin-bottom: 1.5rem;
`
const StyledLink = styled(Link)`
  font-size: 2em;
  font-weight: 800;
  text-align: right;
  color: white;
  line-height: 1;
  text-decoration: none;

  ${(props) => props.theme.mq.medium} {
    font-size: 1.25em;
  }
`
export default function Sector(props) {
  return (
    <Wrapper>
      <Content color={props.color}>
        <Top>
          <Title>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
          <Text>{props.text}</Text>
        </Top>
        <StyledLink to={`/${props.slug}`}>En savoir +</StyledLink>
      </Content>
    </Wrapper>
  )
}
