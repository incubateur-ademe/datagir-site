import React from 'react'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import Tile from 'src/components/layout/Tile'

export default function Blog(props) {
  console.log(props.data)
  return (
    <Web title={'Blog'}>
      <Section>
        <Section.Title>Notre Blog</Section.Title>
        <Tile.Wrapper>
          {props.data.allMdx.edges
            .filter((post) =>
              !props.sector
                ? true
                : ['all', props.sector].includes(post.node.frontmatter.sector)
            )
            .map((post) => (
              <Tile
                key={post.node.fields.slug}
                title={post.node.frontmatter.title}
                image={post.node.frontmatter.image}
                link={`/blog${post.node.fields.slug}`}
              />
            ))}
        </Tile.Wrapper>
      </Section>
    </Web>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childrenImageSharp {
                fluid(maxWidth: 384, maxHeight: 212) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
          }
        }
      }
    }
  }
`
