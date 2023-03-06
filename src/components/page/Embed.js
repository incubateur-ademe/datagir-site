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
const IframeNgc = styled.iframe`
  border-radius: 1rem;
  display: block;
  margin: 10px auto;
  height: 800px;
  max-width: 450px;
  max-height: 80vh;
  width: 100%;
  border: 8px solid #32337b;

  ${(props) => props.theme.mq.small} {
    border: none;
  }
`
export default function Embed(props) {
  return props.scroll ? (
    <IframeNgc
      src='https://nosgestesclimat.fr/?iframe&amp;integratorUrl=https%3A%2F%datagir.ademe.fr'
      allowfullscreen='true'
      webkitallowfullscreen='true'
      mozallowfullscreen='true'
      allow='fullscreen'
      id='iframeNGC'
    ></IframeNgc>
  ) : (
    <Wrapper
      src={props.embed}
      allowfullscreen={true}
      webkitallowfullscreen={true}
      mozallowfullscreen={true}
      title='simulateur'
    />
  )
}
