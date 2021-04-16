import React from 'react'
import styled from 'styled-components'

import { GlobalStyle } from 'src/utils/styles'
import SEO from './web/SEO'
import ThemeToggle from 'src/components/misc/ThemeToggle'
import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div``
const Content = styled.div`
  max-width: 75em;
  margin: 0 auto 2em;
  padding: 0 0.5em;

  ${(props) => props.theme.mq.medium} {
    padding: 0 0.5rem;
  }
`
export default function Web(props) {
  return (
    <Wrapper>
      <SEO title={props.title} image={props.image} />
      <GlobalStyle />
      <ThemeToggle />
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Wrapper>
  )
}
