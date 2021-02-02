import React from 'react'
import styled from 'styled-components'

import Logos from './header/Logos'
import Menu from './header/Menu'

const Wrapper = styled.header`
  position: relative;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 75em;
  margin: 0 auto 5.5em;
  padding: 0 0.5em;
  background-color: white;
`
export default function Header() {
  return (
    <Wrapper>
      <Logos />
      <Menu />
    </Wrapper>
  )
}
