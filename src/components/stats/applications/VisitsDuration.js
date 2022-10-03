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

import CustomTooltip from './chart/CustomTooltip'

const Title = styled.h3`
  text-align: center;
`
const ChartWrapper = styled.div`
  height: 22rem;
  margin-bottom: 3rem;
`
export default function VisitsDuration(props) {
  const [data, setData] = useState(null)
  useEffect(() => {
    let dates = Object.keys(props.visitsDuration)
    dates.length--
    setData(
      dates.map((date) => {
        let points = { date }
        let total = props.visitsDuration[date].reduce(
          (acc, cur) => acc + cur.nb_visits,
          0
        )
        for (let duration of props.visitsDuration[date]) {
          points[duration.label] = duration.nb_visits / total
        }
        return points
      })
    )
  }, [props.visitsDuration, props.sites])

  return data ? (
    <>
      <Title>Durée des visites</Title>
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
                tick.toLocaleString('fr-fr', { style: 'percent' })
              }
              domain={[0, 1]}
            />
            <Tooltip
              content={<CustomTooltip period={props.period} percent />}
            />
            <Area
              stackId='1'
              type='monotone'
              dataKey={'0-10s'}
              stroke={'#004c6d'}
              fill={'#004c6d'}
              fillOpacity={1}
            />
            <Area
              stackId='1'
              type='monotone'
              dataKey={'11-30s'}
              stroke={'#006083'}
              fill={'#006083'}
              fillOpacity={1}
            />
            <Area
              stackId='1'
              type='monotone'
              dataKey={'31-60s'}
              stroke={'#007599'}
              fill={'#007599'}
              fillOpacity={1}
            />
            <Area
              stackId='1'
              type='monotone'
              dataKey={'1-2 min'}
              stroke={'#087DA1'}
              fill={'#087DA1'}
              fillOpacity={1}
            />
            <Area
              stackId='1'
              type='monotone'
              dataKey={'2-4 min'}
              stroke={'#008bad'}
              fill={'#008bad'}
              fillOpacity={1}
            />
            <Area
              stackId='1'
              type='monotone'
              dataKey={'4-7 min'}
              stroke={'#00a1c1'}
              fill={'#00a1c1'}
              fillOpacity={1}
            />
            <Area
              stackId='1'
              type='monotone'
              dataKey={'7-10 min'}
              stroke={'#00b8d3'}
              fill={'#00b8d3'}
              fillOpacity={1}
            />
            <Area
              stackId='1'
              type='monotone'
              dataKey={'10-15 min'}
              stroke={'#00cfe3'}
              fill={'#00cfe3'}
              fillOpacity={1}
            />
            <Area
              stackId='1'
              type='monotone'
              dataKey={'15-30 min'}
              stroke={'#00e7f2'}
              fill={'#00e7f2'}
              fillOpacity={1}
            />
            <Area
              stackId='1'
              type='monotone'
              dataKey={'30+ min'}
              stroke={'#00ffff'}
              fill={'#00ffff'}
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </>
  ) : null
}
