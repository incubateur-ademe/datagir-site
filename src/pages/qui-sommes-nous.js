import React from 'react'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'

import Landing from 'src/components/home/Landing'
import Content from 'src/components/page/Content'

export default function Datagir(props) {
  return (
    <Web>
      <Landing noButton />
      <Content>{props.data.mdx.body}</Content>
    </Web>
  )
}

export const pageQuery = graphql`
  query datagirPage {
    mdx(slug: { eq: "datagir" }) {
      body
    }
  }
`
