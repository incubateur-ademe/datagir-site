import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1.5em;
  font-weight: bold;
  color: ${(props) =>
    props.hollow ? props.color || props.theme.colors.main : 'white'};
  background-color: ${(props) =>
    props.hollow ? 'white' : props.color || props.theme.colors.main};
  border: 1px solid ${(props) => props.color || props.theme.colors.main};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'inherit')};
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    background-color: ${(props) =>
      props.hollow ? props.color || props.theme.colors.main : 'transparent'};
    color: ${(props) =>
      props.hollow ? 'white' : props.color || props.theme.colors.main};
  }

  &:focus {
    outline: none;
  }
`
export default function Button(props) {
  return (
    <Wrapper
      theme={props.theme}
      onClick={props.onClick}
      disabled={props.disabled}
      hollow={props.hollow}
      color={props.color}
    >
      {props.children}
    </Wrapper>
  )
}
