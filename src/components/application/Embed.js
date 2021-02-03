import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 49rem;
  margin: 0 auto 5.5rem;
`
export default function Embed(props) {
  return <Wrapper dangerouslySetInnerHTML={{ __html: props.embed }} />
}
