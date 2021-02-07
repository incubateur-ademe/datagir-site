import React from 'react'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import Contact from 'src/components/Contact'

export default function Blog() {
  return (
    <Web title={'Blog'}>
      <Section>
        <Section.Title>En cours de développement.</Section.Title>
      </Section>
      <Contact />
    </Web>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/applications/" } }) {
      edges {
        node {
          frontmatter {
            title
            image
            description
          }
        }
      }
    }
  }
`
