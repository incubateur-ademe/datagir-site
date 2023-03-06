import React from 'react'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Landing from 'src/components/page/Landing'
import Embed from 'src/components/page/Embed'
import Content from 'src/components/page/Content'
import Users from 'src/components/page/Users'

export default function Application(props) {
  return (
    <Web title={props.data.mdx.frontmatter.title}>
      <Landing {...props.data.mdx} />
      {props.data.mdx.frontmatter.script && (
        <Embed
          embed={props.data.mdx.frontmatter.script}
          scroll={props.data.mdx.frontmatter.title === 'Nos Gestes Climat'}
        />
      )}
      <Content>{props.data.mdx.body}</Content>
      <Users users={props.data.mdx.frontmatter.users} />
      <Users users={props.data.mdx.frontmatter.forks} forks />
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
        users {
          title
          image {
            childrenImageSharp {
              fluid(maxWidth: 84, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
        forks {
          title
          image {
            childrenImageSharp {
              fluid(maxWidth: 84, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
      }
    }
  }
`
