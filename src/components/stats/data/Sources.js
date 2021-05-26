import React from 'react'
import styled from 'styled-components'

import Tile from 'src/components/layout/Tile'
import Table from './sources/Table'

const Title = styled.h2`
  text-align: center;
`
export default function Sources(props) {
  return (
    <>
      <Title>Origine des visites</Title>
      <Tile.Wrapper>
        <Table title='Sites Web' data={props.websites} total={props.total} />
        <Table
          title='Réseaux Sociaux'
          data={props.socials}
          total={props.total}
        />
        <Table title='Recherches' data={props.keywords} total={props.total} />
      </Tile.Wrapper>
    </>
  )
}
