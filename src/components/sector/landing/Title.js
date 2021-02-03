import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  position: relative;
  margin: 0 0 0 ${(props) => props.margin}rem;
  font-size: 5.5rem;
  line-height: 1.2;
`
const Color = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  padding-top: 6.25rem;
  color: ${(props) => props.theme.colors[props.color]};
`
const White = styled.span`
  position: relative;
  display: block;
  padding-top: 6.25rem;
  width: calc(24rem - ${(props) => props.margin}rem);
  color: ${(props) => props.theme.colors.background};
  overflow: hidden;
`
export default function Title(props) {
  const margin =
    props.sector === 'alimentation'
      ? 9.75
      : props.sector === 'transport'
      ? 10.75
      : 8.9375
  return (
    <Wrapper margin={margin}>
      <Color color={props.sector}>{props.children}</Color>
      <White margin={margin}>{props.children}</White>
    </Wrapper>
  )
}
