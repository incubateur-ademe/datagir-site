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

import { useChartAgribalyse } from 'src/utils/matomo'
import MagicLink from 'src/components/base/MagicLink'
import Section from 'src/components/layout/Section'
import CustomTooltip from './applications/chart/CustomTooltip'

const ChartWrapper = styled.div`
  height: 22rem;
`
const StyledLink = styled(MagicLink)`
  color: #eb5b25;
`
export default function Agribalyse() {
  const { data: chart } = useChartAgribalyse()

  const [data, setData] = useState(null)
  useEffect(() => {
    if (chart) {
      let dates = Object.keys(chart)
      dates.length--
      setData(
        dates.map((date) => {
          let points = { date }
          points['Visiteurs'] = chart[date]
          return points
        })
      )
    }
  }, [chart])

  return (
    data && (
      <Section>
        <Section.Title>
          Évolution des visites sur{' '}
          <StyledLink to='https://agribalyse.ademe.fr/app'>
            Agribalyse
          </StyledLink>
        </Section.Title>
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
              <YAxis tickFormatter={(tick) => tick.toLocaleString('fr-fr')} />
              <Tooltip content={<CustomTooltip period={'week'} />} />
              <Area
                type='monotone'
                dataKey={'Visiteurs'}
                stroke={'#eb5b25'}
                fill={'#eb5b25'}
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </Section>
    )
  )
}
