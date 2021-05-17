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

const Wrapper = styled.div`
  width: 66.666%;

  ${(props) => props.theme.mq.medium} {
    width: 100%;
  }
`
const ChartWrapper = styled.div`
  height: 22rem;
`
export default function AreaWeekly(props) {
  const [data, setData] = useState(null)
  useEffect(() => {
    let dates = Object.keys(props.chart)
    dates.length--
    setData(
      dates.map((date) => {
        let points = { date }
        points['Visiteurs'] = props.chart[date]
        return points
      })
    )
  }, [props.chart, props.sites])

  return data ? (
    <Wrapper>
      <Search
        period={props.period}
        date={props.date}
        setPeriod={props.setPeriod}
        setDate={props.setDate}
        color={props.color}
      />
      <ChartWrapper>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <XAxis dataKey='date' tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey={'Visiteurs'}
              stroke={props.color}
              fill={props.color}
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Wrapper>
  ) : null
}
