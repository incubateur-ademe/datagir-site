import React from 'react'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/page/Landing'
import Embed from 'src/components/page/Embed'
import Content from 'src/components/page/Content'

export default function Application(props) {
  return (
    <Web title={props.data.mdx.frontmatter.title}>
      <Landing {...props.data.mdx} />
      {props.data.mdx.frontmatter.script && (
        <Embed embed={props.data.mdx.frontmatter.script} />
      )}
      <Content>{props.data.mdx.body}</Content>
    </Web>
  )
}

export const pageQuery = graphql`
  query databaseBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        introduction
        color
        script
        sector
        buttons {
          label
          link
        }
      }
    }
  }
`
