import React from 'react'
import styled from 'styled-components'

import FancySelect from 'src/components/base/FancySelect'

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  text-align: right;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
    text-align: center;
  }
`
const Input = styled.input`
  width: 2rem;
  padding: 0;
  color: ${(props) => props.color || props.theme.colors.main};
  background-color: transparent;
  box-shadow: 0px 0.1em 0px 0px
    ${(props) => props.color || props.theme.colors.main};
  border: none;
  border-radius: 0.25rem 0.25rem 0 0;
`
export default function Search(props) {
  return (
    <Wrapper>
      Nombre de visites pour les{' '}
      <FancySelect
        fancy
        value={props.date}
        onChange={(e) => {
          console.log(e)
          props.setDate(e)
        }}
        options={[
          { value: '4', label: '4' },
          { value: '5', label: '5' },
          { value: '6', label: '6' },
          { value: '7', label: '7' },
          { value: '8', label: '8' },
          { value: '9', label: '9' },
          { value: '10', label: '10' },
          { value: '11', label: '11' },
          { value: '12', label: '12' },
        ]}
        color={props.color}
      />{' '}
      derni
      {props.period === 'week' ? 'ère' : 'er'}s{' '}
      <FancySelect
        fancy
        value={props.period}
        onChange={props.setPeriod}
        options={[
          { value: 'day', label: 'jours' },
          { value: 'week', label: 'semaines' },
          { value: 'month', label: 'mois' },
        ]}
        color={props.color}
      />
    </Wrapper>
  )
}
