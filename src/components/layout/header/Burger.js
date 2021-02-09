import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  z-index: 120;
  overflow: hidden;
  display: none;
  top: 0.6666666666666667vw;
  right: 0.6666666666666667vw;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme.colors.main};
  cursor: pointer;

  ${(props) => props.theme.mq.medium} {
    display: block;
  }
`
const Bar = styled.div`
  position: absolute;
  left: 0.3rem;
  width: 1.4rem;
  height: 0.25rem;
  background-color: ${(props) => props.theme.colors.background};
  transition: transform 300ms ease-out, opacity 300ms;
`
const Top = styled(Bar)`
  top: 0.3rem;
  transform: ${(props) =>
    props.open ? 'rotate(45deg) translate(0.4rem, 0.4em) scaleX(1)' : 'none'};
`
const Middle = styled(Bar)`
  top: 50%;
  transform: ${(props) =>
    props.open ? 'translate(200%, -50%)' : 'translateY(-50%)'};
`
const Bottom = styled(Bar)`
  bottom: 0.3rem;
  transform: ${(props) =>
    props.open ? 'rotate(-45deg) translate(0.4rem, -0.4em) scaleX(1)' : 'none'};
`
export default function Burger(props) {
  return (
    <Wrapper onClick={() => props.setOpen((open) => !open)}>
      <Top open={props.open} />
      <Middle open={props.open} />
      <Bottom open={props.open} />
    </Wrapper>
  )
}
