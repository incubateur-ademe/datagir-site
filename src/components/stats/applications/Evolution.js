import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useTotalNgcSimulations } from 'utils/matomo'
import Tile from 'src/components/layout/Tile'

const Number = styled.span`
  display: block;
  font-size: 4rem;
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

export default function Evolution(props) {
  const [, setPercent] = useState(0)
  useEffect(() => {
    const lastPeriod = props.reference - props.period
    const difference = props.period - lastPeriod
    setPercent((difference / lastPeriod) * 100)
  }, [props.period, props.reference])

  const [iframe, setIframe] = useState(0)
  useEffect(() => {
    if (props.pages) {
      const iframePages = props.pages.filter(
        (page) => page.label.includes('embed') || page.label.includes('iframe')
      )
      const totalIframe = iframePages.reduce(
        (acc, cur) => acc + cur.entry_nb_visits,
        0
      )
      const totalPages = props.pages.reduce(
        (acc, cur) => acc + cur.entry_nb_visits,
        0
      )
      setIframe((totalIframe / totalPages) * 100)
    }
  }, [props.pages])

  // We didn't track this stat at the beginning so we're guessing based on todays average completion
  const baseSimulations = 32015
  const { data: simulations } = useTotalNgcSimulations()

  return (
    <Tile.Wrapper large>
      <Tile.Tile>
        <Tile.Content>
          <Number color={props.color}>
            {props.allTime.toLocaleString('fr-fr')}
          </Number>{' '}
          <Label>visites depuis le lancement</Label>
        </Tile.Content>
      </Tile.Tile>
      {props.id[0] !== 'total' && (
        <Tile.Tile>
          <Tile.Content>
            <Number color={props.color}>{Math.round(iframe)} %</Number>{' '}
            <Label>d'affichage en iframe</Label>
          </Tile.Content>
        </Tile.Tile>
      )}

      {props.id[0] === '153' && (
        <Tile.Tile>
          <Tile.Content>
            <Number color={props.color}>
              {(simulations?.nb_visits + baseSimulations).toLocaleString(
                'fr-fr'
              )}
            </Number>{' '}
            <Label>simulations terminées depuis le lancement</Label>
          </Tile.Content>
        </Tile.Tile>
      )}
    </Tile.Wrapper>
  )
}
