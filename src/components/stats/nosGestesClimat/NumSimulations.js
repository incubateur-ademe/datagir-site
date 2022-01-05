import React from 'react'
import styled from 'styled-components'

import { useTotalNgcSimulations } from 'utils/matomo'
import Tile from 'src/components/layout/Tile'

const StyledTile = styled(Tile.Tile)`
  width: 50rem;
`
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
  // We didn't track this stat at the beginning so we're guessing based on todays average completion
  const base = 32015

  const { data } = useTotalNgcSimulations()

  return (
    <StyledTile>
      <Tile.Content color='#46479f'>
        <Number color='#46479f'>
          {(data?.nb_visits + base)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
        </Number>
        <Label>simulations terminées</Label>
      </Tile.Content>
    </StyledTile>
  )
}
