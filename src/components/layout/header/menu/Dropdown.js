import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  position: relative;
  margin: 0 0.5rem;
  padding: 0.5rem 0;

  &:hover > nav {
    opacity: 1;
    pointer-events: inherit;

    &:before {
      transform: scaleY(1);
    }

    a {
      transform: translateX(0);
      opacity: 1;
    }
  }
`
const Title = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  cursor: s-resize;
  transition: color 200ms ease-out;

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
  &:after {
    content: 'ˇ';
    position: relative;
    top: 0.4em;
    margin-left: 0.2em;
    font-weight: 700;
  }
`
const Menu = styled.nav`
  position: absolute;
  overflow: hidden;
  top: 100%;
  left: 0;
  padding-left: 0.3125rem;
  background-color: white;
  opacity: 0;
  pointer-events: none;

  &:before {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0.3125rem;
    transform: scaleY(0);
    transform-origin: top;
    background-color: ${(props) => props.theme.colors.main};
    transition: transform 400ms ease-out;
  }
`
const Option = styled(Link)`
  display: block;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: all 200ms ease-out;
  word-break: keep-all;
  opacity: 0;
  transform: translateX(-2em);
  transition: opacity 500ms ${(props) => props.index * 100}ms,
    transform 500ms ${(props) => props.index * 100}ms;

  &:hover {
    color: ${(props) => props.theme.colors.main};
    background-color: ${(props) => props.theme.colors.tile};
  }
`
export default function Dropdown(props) {
  return (
    <Wrapper>
      <Title to={props.to}>{props.title}</Title>
      <Menu>
        {props.options.map((option, index) => (
          <Option key={option.to} to={option.to} index={index}>
            {option.label.replace(/ /g, '\u00a0')}
          </Option>
        ))}
      </Menu>
    </Wrapper>
  )
}
