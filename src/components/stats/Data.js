import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import {
  useChart,
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
import Evolution from './data/Evolution'
import Sources from './data/Sources'
import Selector from './data/Selector'
import Chart from './data/Chart'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
  }
`
export default function Data(props) {
  const { themes, theme } = useContext(StyleContext)

  const [current, setCurrent] = useState('total')

  const [chartDate, setChartDate] = useState(14)
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
          {chart && (
            <Chart
              chart={chart[current]}
              color={color}
              period={chartPeriod}
              date={chartDate}
              setPeriod={setChartPeriod}
              setDate={setChartDate}
            />
          )}
        </Wrapper>
        <Sources
          total={total[current]}
          websites={websites[current]}
          oldWebsites={oldWebsites[current]}
          socials={socials[current]}
          keywords={keywords[current]}
        />
      </Section>
    </>
  ) : null
}
