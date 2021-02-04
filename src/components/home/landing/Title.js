import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 7.5rem 0 0;
  font-size: 6.25em;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.16;
`
const White = styled.span`
  width: calc(24rem - 0.39em);
  color: ${(props) => props.theme.colors.background};
  text-align: right;
`
const Arrow = styled.svg`
  width: 0.78em;
  height: auto;
  margin-top: -0.06em;
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
`
export default function Title() {
  return (
    <Wrapper>
      <White>dat</White>
      <Arrow
        width='78'
        height='91'
        viewBox='0 0 78 91'
        fill='none'
        xmlns='http://www.w3.org/2000/Arrow'
      >
        <path d='M0 91L39 0L78 91H65L39 27L12 91H0Z' fill='#1FC58E' />
        <path d='M0 91L39 0V27L12.5 91H0Z' fill='white' />
      </Arrow>
      <Color>gir</Color>
    </Wrapper>
  )
}
