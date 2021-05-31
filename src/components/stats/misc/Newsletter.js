import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import Tile from 'src/components/layout/Tile'

export default function Newsletter() {
  const { data } = useQuery('numSubscribers', () =>
    axios.get('/.netlify/functions/getNumSubscribers').then((res) => res.data)
  )
  console.log(data)
  return (
    <Tile.Tile>
      <Tile.Content>{data && data.totalSubscribers}</Tile.Content>
    </Tile.Tile>
  )
}
