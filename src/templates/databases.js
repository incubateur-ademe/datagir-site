import React from 'react'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/page/Landing'
import Content from 'src/components/page/Content'

export default function Databases(props) {
  return (
    <Web title={props.data.mdx.frontmatter.title}>
      <Landing {...props.data.mdx} />
      <Content>{props.data.mdx.body}</Content>
    </Web>
  )
}

export const pageQuery = graphql`
  query applicationBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        introduction
        sector
        buttons {
          label
          link
        }
      }
    }
  }
`
