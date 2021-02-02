import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled(Link)`
  margin: 0.5rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: color 200ms ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`
export default function Item(props) {
  return <Wrapper to={props.to}>{props.children}</Wrapper>
}
