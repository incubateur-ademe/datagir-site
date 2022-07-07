import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'

const StyledSection = styled(Section)`
  blockquote {
    border-left: 4px solid ${(props) => props.theme.colors.main};
    padding: 0.5rem;
    background: ${(props) => props.theme.colors.tile};
  }
`
export default function Index(props) {
  return (
    <Web title={'Budget'}>
      <StyledSection>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </StyledSection>
    </Web>
  )
}
export const pageQuery = graphql`
  query budget {
    mdx(slug: { eq: "budget" }) {
      body
    }
  }
`
