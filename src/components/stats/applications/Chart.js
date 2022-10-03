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

import Search from './chart/Search'
import CustomTooltip from './chart/CustomTooltip'

const Title = styled.h3`
  text-align: center;
`
const ChartWrapper = styled.div`
  height: 22rem;
  margin-bottom: 3rem;
`
export default function Chart(props) {
  const [data, setData] = useState(null)
  useEffect(() => {
    let dates = Object.keys(props.chart)
    dates.length--
    setData(
      dates.map((date) => {
        let points = { date }
        points['Visiteurs'] = props.chart[date]
        points['Visiteurs Actifs'] = props.chartInteractions
          ? props.chartInteractions[date].find((event) =>
              ['Click', 'click', 'Clic CTA accueil'].includes(event.label)
            )?.nb_visits
          : 0
        return points
      })
    )
  }, [props.chart, props.chartInteractions])

  return data ? (
    <>
      <Search
        period={props.period}
        date={props.date}
        setPeriod={props.setPeriod}
        setDate={props.setDate}
        color={props.color}
      />
      <Title>Nombre de visite</Title>
      <ChartWrapper>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <XAxis
              dataKey='date'
              tick={{ fontSize: 12 }}
              tickFormatter={(tick) => {
                const date = new Date(tick.split(',')[0])
                return props.period === 'month'
                  ? date.toLocaleDateString('fr-fr', {
                      month: 'long',
                      year: 'numeric',
                    })
                  : date.toLocaleDateString('fr-fr', {
                      day: '2-digit',
                      month: '2-digit',
                    })
              }}
              interval={'preserveStartEnd'}
              minTickGap={1}
            />
            <YAxis
              tickFormatter={(tick) =>
                tick.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')
              }
            />
            <Tooltip content={<CustomTooltip period={props.period} />} />
            <Area
              type='monotone'
              dataKey={'Visiteurs'}
              stroke={props.color}
              fill={props.color}
              fillOpacity={data[data.length - 1]['Visiteurs Actifs'] ? 0.5 : 1}
            />
            <Area
              type='monotone'
              dataKey={'Visiteurs Actifs'}
              stroke={props.color}
              fill={props.color}
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </>
  ) : null
}
