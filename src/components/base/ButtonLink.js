import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1.5em;
  font-weight: bold;
  color: ${(props) =>
    props.hollow
      ? props.theme.colors[props.color] || props.theme.colors.main
      : 'white'};
  text-decoration: none;
  background-color: ${(props) =>
    props.hollow
      ? 'white'
      : props.theme.colors[props.color] || props.theme.colors.main};
  border: 1px solid
    ${(props) => props.theme.colors[props.color] || props.theme.colors.main};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'inherit')};
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    background-color: ${(props) =>
      props.hollow
        ? props.theme.colors[props.color] || props.theme.colors.main
        : 'transparent'};
    color: ${(props) =>
      props.hollow
        ? 'white'
        : props.theme.colors[props.color] || props.theme.colors.main};
  }

  &:focus {
    outline: none;
  }
`
export default function ButtonLink(props) {
  return (
    <Wrapper
      theme={props.theme}
      to={props.to}
      disabled={props.disabled}
      hollow={props.hollow}
      color={props.color}
    >
      {props.children}
    </Wrapper>
  )
}
