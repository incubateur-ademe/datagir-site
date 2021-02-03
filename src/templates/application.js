import React from 'react'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/application/Landing'
import Embed from 'src/components/application/Embed'

export default function Application(props) {
  return (
    <Web>
      <Landing {...props.data.mdx} />
      {props.data.mdx && <Embed embed={props.data.mdx.frontmatter.script} />}
    </Web>
  )
}

export const pageQuery = graphql`
  query applicationBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        color
        script
        sector
        liens {
          label
          lien
        }
        color
      }
    }
  }
`
