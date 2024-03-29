import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding-top: 7.5rem;
  font-size: 6.25em;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1.16;

  ${(props) => props.theme.mq.medium} {
    padding-top: 7vw;
  }
  ${(props) => props.theme.mq.small} {
    font-size: 20vw;
    padding: 16vw 0;
  }
`
const White = styled.span`
  width: calc(24rem - 0.39em);
  color: ${(props) => props.theme.colors.background};
  text-align: right;
  transform: translateX(${(props) => (props.mounted ? '0' : '50%')});
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: transform 1000ms 300ms, opacity 1000ms 300ms;

  ${(props) => props.theme.mq.medium} {
    width: calc(41.6666667vw - 0.39em);
  }
  ${(props) => props.theme.mq.small} {
    width: calc(50vw - 0.39em - 0.5rem);
  }
`
const Arrow = styled.svg`
  width: 0.78em;
  height: auto;
  margin-top: -0.08em;
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 1000ms 1050ms;
`
const PathColor = styled.path`
  fill: ${(props) => props.theme.colors.main};
`
const PathWhite = styled.path`
  fill: ${(props) => props.theme.colors.background};
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
  transform: translateX(${(props) => (props.mounted ? '0' : '-100%')});
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: transform 1000ms 300ms, opacity 1000ms 300ms;
`
export default function Title(props) {
  return (
    <Wrapper mounted={props.mounted}>
      <White mounted={props.mounted}>dat</White>
      <Arrow
        alt='A'
        width='78'
        height='91'
        viewBox='0 0 78 91'
        fill='none'
        mounted={props.mounted}
        role='img'
        aria-label='A'
      >
        <PathColor d='M0 91L39 0L78 91H65L39 27L12 91H0Z' />
        <PathWhite d='M0 91L39 0V27L12.5 91H0Z' />
      </Arrow>
      <Color mounted={props.mounted}>gir</Color>
    </Wrapper>
  )
}
