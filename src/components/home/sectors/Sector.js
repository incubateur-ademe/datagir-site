import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24rem;
  margin: 0.5rem;
  padding: 1.5rem;
  color: white;
  background-color: ${(props) => props.theme.colors[props.color]};
`
const Top = styled.div``
const Title = styled.h2`
  margin-bottom: 0.675em;
  color: white;
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
`
export default function Sector(props) {
  return (
    <Wrapper color={props.color}>
      <Top>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <Text>{props.text}</Text>
      </Top>
      <StyledLink to={`/${props.slug}`}>En savoir +</StyledLink>
    </Wrapper>
  )
}
