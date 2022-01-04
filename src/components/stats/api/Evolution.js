import React from 'react'
import styled from 'styled-components'

import { useApiMitTotal } from 'utils/matomo'

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
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1;
  color: ${(props) => props.color || props.theme.colors.main};
  transition: color 500ms ease-out;
`
const BigNumber = styled(Number)`
  font-size: 5rem;
`
export default function Evolution(props) {
  const { data } = useApiMitTotal()

  return (
    <Wrapper>
      <Block>
        <BigNumber color={props.color}>
          {data?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
        </BigNumber>{' '}
        appels depuis le lancement
      </Block>
    </Wrapper>
  )
}
