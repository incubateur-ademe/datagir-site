import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/application/Landing'
import Embed from 'src/components/application/Embed'

export default function Application(props) {
  return (
    <Web>
      <Landing {...props.data.mdx} />
      {props.data.mdx.frontmatter.script && (
        <Embed embed={props.data.mdx.frontmatter.script} />
      )}
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
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
        color
        script
        sector
        buttons {
          label
          link
        }
        color
      }
    }
  }
`
