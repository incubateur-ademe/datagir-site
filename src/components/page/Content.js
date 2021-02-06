import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Wrapper = styled.div`
  max-width: 36.5rem;
  margin: 0 auto 5.5rem;

  img {
    width: 49rem;
  }
`
export default function Content(props) {
  return (
    <Wrapper>
      <MDXRenderer>{props.children}</MDXRenderer>
    </Wrapper>
  )
}
