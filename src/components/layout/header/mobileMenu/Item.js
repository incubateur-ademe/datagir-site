import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  position: relative;
  display: block;
  overflow: hidden;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.main};
  text-decoration: none;

  ${(props) => props.theme.mq.small} {
    font-size: 0.875em;
  }
`
export default function Item(props) {
  return <Wrapper to={props.to}>{props.children}</Wrapper>
}
