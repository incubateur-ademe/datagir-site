import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Wrapper = styled.div`
  max-width: 36.5rem;
  margin: 0 auto 5.5rem;

  img {
    max-width: 100%;
  }

  .gatsby-resp-image-wrapper {
    margin: 1rem 0;
  }

  blockquote {
    margin-left: 0;
    padding-left: 0.5rem;
    border-left: solid 2rem ${(props) => props.theme.colors.main};
  }
`
export default function Content(props) {
  return (
    <Wrapper>
      <MDXRenderer>{props.children}</MDXRenderer>
    </Wrapper>
  )
}
