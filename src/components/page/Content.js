import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Wrapper = styled.div`
  max-width: 49rem;
  margin: 0 auto 5.5rem;

  img {
    max-width: 100%;
  }
`
export default function Content(props) {
  return (
    <Wrapper>
      <MDXRenderer>{props.children}</MDXRenderer>
    </Wrapper>
  )
}
