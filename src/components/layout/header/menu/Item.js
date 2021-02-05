import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0.5rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: color 300ms ease-out;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: translateX(-100%);
    background-color: ${(props) => props.theme.colors.main};
  }
  &:hover {
    color: ${(props) => props.theme.colors.main};
    &:before {
      transform: translateX(100%);
      transition: transform 300ms ease-out;
    }
  }
`
export default function Item(props) {
  return <Wrapper to={props.to}>{props.children}</Wrapper>
}
