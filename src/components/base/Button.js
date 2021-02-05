import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
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
  border: 1px solid
    ${(props) =>
      props.theme.colors[props.color] ||
      props.color ||
      props.theme.colors.main};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'inherit')};
  cursor: pointer;
  transition: all 200ms ease-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: ${(props) => (props.hollow ? 'left' : 'right')};
    background-color: ${(props) =>
      props.hollow
        ? props.theme.colors[props.color] ||
          props.color ||
          props.theme.colors.main
        : props.theme.colors.background};
    transition: transform 200ms ease-out;
  }
  &:hover {
    color: ${(props) =>
      props.hollow
        ? 'white'
        : props.theme.colors[props.color] ||
          props.color ||
          props.theme.colors.main};

    &:before {
      transform: scaleX(1);
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
      color={props.color}
    >
      <span>{props.children}</span>
    </Wrapper>
  )
}
