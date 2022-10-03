import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import {
  useChart,
  useChartInteractions,
  useVisitsDuration,
  useTotal,
  useWebsites,
  useOldWebsites,
  useSocials,
  useKeywords,
  usePeriod,
  useReference,
  usePages,
  useAllTime,
} from 'src/utils/matomo'
import StyleContext from 'src/utils/StyleContext'
import Section from 'src/components/layout/Section'
import Evolution from './applications/Evolution'
import Sources from './applications/Sources'
import Selector from './applications/Selector'
import Chart from './applications/Chart'
import VisitsDuration from './applications/VisitsDuration'
import Loader from './applications/Loader'

const Wrapper = styled.div``
export default function Data(props) {
  const { themes, theme } = useContext(StyleContext)

  const [current, setCurrent] = useState('total')

  const [chartDate, setChartDate] = useState('12')
  const [chartPeriod, setChartPeriod] = useState('week')

  const [color, setColor] = useState(themes[theme].colors.main)
  useEffect(() => {
    setColor(
      props.sites.find(
        (site) => site.node.frontmatter.matomo === Number(current)
      )?.node.frontmatter.color || themes[theme].colors.main
    )
  }, [props.sites, current, themes, theme])

  const { data: chart } = useChart({
    sites: props.sites,
    chartDate: Number(chartDate) + 1,
    chartPeriod,
  })
  const { data: chartInteractions } = useChartInteractions({
    sites: props.sites,
    chartDate: Number(chartDate) + 1,
    chartPeriod,
  })
  const { data: visitsDuration } = useVisitsDuration({
    sites: props.sites,
    chartDate: Number(chartDate) + 1,
    chartPeriod,
  })
  const { data: total } = useTotal({ sites: props.sites })
  const { data: websites } = useWebsites({ sites: props.sites })
  const { data: oldWebsites } = useOldWebsites({ sites: props.sites })
  const { data: socials } = useSocials({ sites: props.sites })
  const { data: keywords } = useKeywords({ sites: props.sites })
  const { data: period } = usePeriod({ sites: props.sites })
  const { data: reference } = useReference({ sites: props.sites })
  const { data: pages } = usePages({ sites: props.sites })
  const { data: allTime } = useAllTime({ sites: props.sites })

  return total &&
    websites &&
    oldWebsites &&
    socials &&
    keywords &&
    period &&
    reference &&
    pages &&
    allTime ? (
    <>
      <Selector
        sites={props.sites}
        current={current}
        setCurrent={setCurrent}
        color={color}
      />
      <Section>
        <Wrapper>
          <Evolution
            period={period[current]}
            reference={reference[current]}
            pages={pages[current]}
            allTime={allTime[current]}
            sites={props.sites}
            id={[current]}
            color={color}
          />
          {chart && chartInteractions && (
            <Chart
              chart={chart[current]}
              chartInteractions={chartInteractions[current]}
              color={color}
              period={chartPeriod}
              date={chartDate}
              setPeriod={setChartPeriod}
              setDate={setChartDate}
            />
          )}
        </Wrapper>
        {visitsDuration && current !== 'total' && (
          <VisitsDuration
            chart={chart[current]}
            visitsDuration={visitsDuration[current]}
            color={color}
            period={chartPeriod}
            date={chartDate}
          />
        )}
        <Sources
          total={total[current]}
          websites={websites[current]}
          oldWebsites={oldWebsites[current]}
          socials={socials[current]}
          keywords={keywords[current]}
        />
      </Section>
    </>
  ) : (
    <Loader />
  )
}
