import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0.5rem;
  font-weight: 300;
  text-decoration: none;

  &:hover {
    span {
      transform: translateY(-100%);
    }
  }
`
const Normal = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.text};
  transition: transform 200ms ease-out;
`
const Hover = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  display: block;
  color: ${(props) => props.theme.colors.main};
  transition: transform 200ms ease-out;
`
export default function Item(props) {
  return (
    <Wrapper to={props.to}>
      <Normal>{props.children}</Normal>
      <Hover>{props.children}</Hover>
    </Wrapper>
  )
}
