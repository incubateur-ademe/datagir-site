import React from 'react'
import styled from 'styled-components'

import FancySelect from 'src/components/base/FancySelect'

const Wrapper = styled.h1`
  margin-bottom: 3.5rem;
  font-size: 2.75rem;

  ${(props) => props.theme.mq.medium} {
    font-size: 2rem;
    text-align: center;
  }
  ${(props) => props.theme.mq.small} {
    font-size: 1.75rem;
    text-align: center;
  }
`
export default function Selector(props) {
  return (
    <Wrapper>
      Statistiques pour{' '}
      <FancySelect
        fancy
        value={String(props.current)}
        onChange={(value) => props.setCurrent(value)}
        options={[
          { value: 'total', label: 'tous les simulateurs' },
          ...props.sites.map((site) => ({
            value: String(site.node.frontmatter.matomo),
            label: site.node.frontmatter.title,
          })),
        ]}
        color={props.color}
      />
    </Wrapper>
  )
}
