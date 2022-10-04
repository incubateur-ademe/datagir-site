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

const colors = [
  '#004c6d',
  '#006083',
  '#007599',
  '#087DA1',
  '#008bad',
  '#00a1c1',
  '#00b8d3',
  '#00cfe3',
  '#00e7f2',
  '#00ffff',
]
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
          (acc, cur) => acc + Number(cur.nb_visits),
          0
        )
        for (let duration of props.visitsDuration[date]) {
          points[duration.label] = Number(duration.nb_visits) / total
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

            {Object.keys(data[0])
              .filter((key) => key !== 'date')
              .map((key, index) => (
                <Area
                  stackId='1'
                  type='monotone'
                  dataKey={key}
                  stroke={colors[index]}
                  fill={colors[index]}
                  fillOpacity={1}
                />
              ))}
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </>
  ) : null
}
