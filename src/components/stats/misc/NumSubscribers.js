import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'

import Tile from 'src/components/layout/Tile'

const Number = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 800;
  line-height: 1;
  text-align: center;
  color: ${(props) => props.color || props.theme.colors.main};
  transition: color 500ms ease-out;
`
const Label = styled.span`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
`
export default function NumSubscribers() {
  const { data } = useQuery('numSubscribers', () =>
    axios.get('/.netlify/functions/getNumSubscribers').then((res) => res.data)
  )
  return (
    <Tile.Tile>
      <Tile.Content>
        <Number>{data ? data.totalSubscribers : 1587}</Number>
        <Label>
          personnes inscrites
          <br />à la newsletter
        </Label>
      </Tile.Content>
    </Tile.Tile>
  )
}
