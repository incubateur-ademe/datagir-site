import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Item = styled(MagicLink)`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`
export default function MainLinks() {
  return (
    <Wrapper>
      <Item to='https://www.ademe.fr/'>ademe.fr</Item>
      <Item to='https://beta.gouv.fr/'>beta.gouv.fr</Item>
      <Item to='https://data.ademe.fr/'>data.ademe.fr</Item>
    </Wrapper>
  )
}
