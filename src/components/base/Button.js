import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.expand ? '100%' : 'auto')};
  padding: 0.5em 1.5em;
  font-weight: bold;
  color: ${(props) =>
    props.hollow
      ? props.theme.colors[props.color] ||
        props.color ||
        props.theme.colors.main
      : 'white'};
  text-decoration: none;
  background-color: ${(props) =>
    props.hollow
      ? 'transparent'
      : props.theme.colors[props.color] ||
        props.color ||
        props.theme.colors.main};
  border: ${(props) => (props.thick ? '2px' : '1px')} solid
    ${(props) =>
      props.theme.colors[props.color] ||
      props.color ||
      props.theme.colors.main};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'inherit')};
  cursor: pointer;

  ${(props) => props.theme.mq.small} {
    width: ${(props) => (props.noExpand ? 'auto' : '100%')};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%) rotate(-45deg);
    background-color: ${(props) =>
      props.hollow
        ? props.theme.colors[props.color] ||
          props.color ||
          props.theme.colors.main
        : props.theme.colors.background};
    opacity: 0.4;
  }
  &:hover {
    &:before {
      transform: translateX(100%) rotate(-45deg);
      transition: transform ${(props) => props.animationSpeed}ms ease-out;
    }
  }

  &:focus {
    outline: none;
  }

  & span {
    position: relative;
  }
`
export default function Button(props) {
  return (
    <Wrapper
      theme={props.theme}
      to={props.to}
      onClick={props.onClick}
      disabled={props.disabled}
      hollow={props.hollow ? 1 : 0}
      thick={props.thick ? 1 : 0}
      expand={props.expand ? 1 : 0}
      noExpand={props.noExpand ? 1 : 0}
      color={props.color}
      animationSpeed={
        props.children.length * 20 > 350 ? props.children.length * 25 : 350
      }
    >
      <span>{props.children}</span>
    </Wrapper>
  )
}
