import React from 'react'
import styled from 'styled-components'

import Tile from 'src/components/layout/Tile'
import Newsletter from './misc/Newsletter'

const Title = styled.h2`
  text-align: center;
`
export default function Misc() {
  return (
    <>
      <Title>Datagir</Title>
      <Tile.Wrapper>
        <Newsletter />
      </Tile.Wrapper>
    </>
  )
}
