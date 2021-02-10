import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  z-index: 121;
  overflow: hidden;
  display: none;
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.colors.main};
  cursor: pointer;

  ${(props) => props.theme.mq.medium} {
    display: block;
  }
`
const Bar = styled.div`
  position: absolute;
  left: 4.8px;
  width: 22.4px;
  height: 4px;
  background-color: ${(props) => props.theme.colors.background};
  transition: transform 300ms ease-out, opacity 300ms;
`
const Top = styled(Bar)`
  top: 4.8px;
  transform: ${(props) =>
    props.open ? 'rotate(45deg) translate(6.4px, 6.4px) scaleX(1)' : 'none'};
`
const Middle = styled(Bar)`
  top: 50%;
  transform: ${(props) =>
    props.open ? 'translate(200%, -50%)' : 'translateY(-50%)'};
`
const Bottom = styled(Bar)`
  bottom: 4.8px;
  transform: ${(props) =>
    props.open ? 'rotate(-45deg) translate(6.4px, -6.4px) scaleX(1)' : 'none'};
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
