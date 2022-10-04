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

import Checkbox from 'components/base/Checkbox'
import Search from './chart/Search'
import CustomTooltip from './chart/CustomTooltip'

const Title = styled.h3`
  text-align: center;
`
const ChartWrapper = styled.div`
  height: 22rem;
`
const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
  font-size: 0.75rem;
`
export default function Chart(props) {
  const [data, setData] = useState(null)

  const [hideDatagir, setHideDatagir] = useState(false)

  useEffect(() => {
    let dates = Object.keys(props.chart)
    dates.length--
    setData(
      dates.map((date) => {
        let points = { date }
        points['Visiteurs'] = props.chart[date]
        points['Visiteurs (sans datagir.ademe.fr)'] =
          props.chart[date] -
          (props.chartFromDatagir
            ? props.chartFromDatagir[date].find(
                (website) => website.label === 'datagir.ademe.fr'
              )?.nb_visits
            : 0)
        points['Visiteurs Actifs'] = props.chartInteractions
          ? props.chartInteractions[date].find((event) =>
              ['Click', 'click', 'Clic CTA accueil'].includes(event.label)
            )?.nb_visits
          : 0

        return points
      })
    )
  }, [
    props.chart,
    props.chartFromDatagir,
    props.chartInteractions,
    hideDatagir,
  ])

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
              stroke={'transparent'}
              fill={props.color}
              fillOpacity={
                hideDatagir
                  ? 0
                  : data[data.length - 1]['Visiteurs Actifs']
                  ? 0.5
                  : 1
              }
            />
            <Area
              type='monotone'
              dataKey={'Visiteurs (sans datagir.ademe.fr)'}
              stroke={'transparent'}
              fill={props.color}
              fillOpacity={hideDatagir ? 1 : 0}
            />
            <Area
              type='monotone'
              dataKey={'Visiteurs Actifs'}
              stroke={props.color}
              fill={props.color}
              fillOpacity={hideDatagir ? 0 : 1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
      {props.chartFromDatagir ? (
        <CheckboxWrapper>
          <Checkbox checked={hideDatagir} onChange={setHideDatagir}>
            Cacher les visites venant de datagir.ademe.fr
          </Checkbox>
        </CheckboxWrapper>
      ) : null}
    </>
  ) : null
}
