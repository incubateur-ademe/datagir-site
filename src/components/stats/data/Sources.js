import React from 'react'

import Tile from 'src/components/layout/Tile'
import Table from './sources/Table'

export default function Sources(props) {
  return (
    <>
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
