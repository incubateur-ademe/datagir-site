import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 33.333%;
  text-align: center;

  ${(props) => props.theme.mq.medium} {
    width: 100%;
  }
`
const Block = styled.div`
  margin-bottom: 2rem;
`
const Number = styled.span`
  display: block;
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
  color: ${(props) => props.color || props.theme.colors.main};
  transition: color 500ms ease-out;
`
const BigNumber = styled(Number)`
  font-size: 6rem;
`
const Small = styled.span`
  font-size: 0.75rem;
`
export default function Evolution(props) {
  const [percent, setPercent] = useState(0)
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
        (acc, cur) => acc + cur.nb_visits,
        0
      )
      const totalPages = props.pages.reduce(
        (acc, cur) => acc + cur.nb_visits,
        0
      )
      setIframe((totalIframe / totalPages) * 100)
    }
  }, [props.pages])

  return (
    <Wrapper>
      <Block>
        <BigNumber color={props.color}>
          {props.allTime.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
        </BigNumber>{' '}
        visiteurs depuis le lancement
      </Block>
      <Block>
        <Number color={props.color}>
          {percent > 0 && '+'}
          {Math.round(percent * 10) / 10}%
        </Number>
        de visiteurs ce mois ci
        <br />
        <Small>(par rapport au mois d'avant)</Small>
      </Block>
      <Block>
        <Number color={props.color}>{Math.round(iframe * 10) / 10}%</Number>{' '}
        d'affichage en iframe
      </Block>
    </Wrapper>
  )
}
