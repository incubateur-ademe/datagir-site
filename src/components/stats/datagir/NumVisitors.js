import React from 'react'
import styled from 'styled-components'
import { useDatagirAverageDailyVisits } from 'src/utils/matomo'

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
export default function Newsletter() {
  const { data } = useDatagirAverageDailyVisits()

  return (
    <Tile.Tile>
      <Tile.Content>
        <Number>{data && Math.round(data)}</Number>
        <Label>
          visites quotidiennes
          <br />
          sur datagir.ademe.fr
        </Label>
      </Tile.Content>
    </Tile.Tile>
  )
}
