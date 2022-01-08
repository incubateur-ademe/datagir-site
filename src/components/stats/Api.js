import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { useApiMit } from 'src/utils/matomo'
import MagicLink from 'src/components/base/MagicLink'
import Section from 'src/components/layout/Section'
import CustomTooltip from './applications/chart/CustomTooltip'
import Evolution from './api/Evolution'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
  }
`
const ChartWrapper = styled.div`
  height: 22rem;
  width: 66.666%;

  ${(props) => props.theme.mq.medium} {
    width: 100%;
  }

  svg {
    overflow: visible;
  }
`
const StyledLink = styled(MagicLink)`
  color: #ef0d50;
`
export default function Api() {
  const { data: chart } = useApiMit()

  const [data, setData] = useState(null)
  useEffect(() => {
    if (chart) {
      let dates = Object.keys(chart)
      dates.length--
      setData(
        dates.map((date) => {
          let points = { date }
          points['Appels'] = chart[date].reduce(
            (acc, cur) => (acc += cur.nb_hits),
            0
          )
          return points
        })
      )
    }
  }, [chart])

  return (
    data && (
      <Section>
        <Section.Title>
          Appels à l'
          <StyledLink to='https://github.com/datagir/monimpacttransport'>
            API Mon Impact Transport
          </StyledLink>
        </Section.Title>
        <Wrapper>
          <Evolution data={data} color='#ef0d50' />
          <ChartWrapper>
            <ResponsiveContainer>
              <AreaChart data={data}>
                <XAxis
                  dataKey='date'
                  tick={{ fontSize: 12 }}
                  tickFormatter={(tick) => {
                    const date = new Date(tick.split(',')[0])
                    return date.toLocaleDateString('fr-fr', {
                      day: '2-digit',
                      month: '2-digit',
                    })
                  }}
                  interval={'preserveStartEnd'}
                  minTickGap={1}
                />
                <YAxis
                  tickFormatter={(tick) =>
                    tick.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                  }
                />
                <Tooltip
                  content={<CustomTooltip period={'week'} naming='Appels' />}
                />
                <Area
                  type='monotone'
                  dataKey={'Appels'}
                  stroke={'#EF0D50'}
                  fill={'#EF0D50'}
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Wrapper>
      </Section>
    )
  )
}
