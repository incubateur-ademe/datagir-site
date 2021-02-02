import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  position: relative;
  margin: 0 0.5rem;
  padding: 0.5rem 0;

  &:hover > div {
    color: ${(props) => props.theme.colors.main};
  }

  &:hover > nav {
    opacity: 1;
    pointer-events: inherit;
  }
`
const Title = styled.div`
  cursor: default;
  transition: color 200ms ease-out;

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
  top: 100%;
  left: 0;
  padding-left: 0.3125rem;
  background-color: white;
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0.3125rem;
    background-color: ${(props) => props.theme.colors.main};
  }
`
const Option = styled(Link)`
  display: block;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: all 200ms ease-out;
  word-break: keep-all;

  &:hover {
    color: ${(props) => props.theme.colors.main};
    background-color: ${(props) => props.theme.colors.tile};
  }
`
export default function Dropdown(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Menu>
        {props.options.map((option) => (
          <Option key={option.to} to={option.to}>
            {option.label.replaceAll(/ /g, '\u00a0')}
          </Option>
        ))}
      </Menu>
    </Wrapper>
  )
}
