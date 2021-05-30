import React from 'react'
import styled from 'styled-components'
import IframeResizer from 'iframe-resizer-react'

const Wrapper = styled(IframeResizer)`
  display: block;
  width: 100%;
  max-width: 49rem;
  margin: 0 auto 5.5rem;
  border: none;
`
export default function Embed(props) {
  return (
    <Wrapper
      src={props.embed}
      allowfullscreen={true}
      webkitallowfullscreen={true}
      mozallowfullscreen={true}
    />
  )
}
