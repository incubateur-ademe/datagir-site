import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Section from 'src/components/layout/Section'
import Tile from 'src/components/layout/tile'

export default function Applications() {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(filter: { fileAbsolutePath: { regex: "/applications/" } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                image {
                  childrenImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                sector
                title
              }
            }
          }
        }
      }
    `
  )
  console.log(data)
  return (
    <Section>
      <Section.Title>Nos Simulateurs</Section.Title>
      <Tile.Wrapper>
        {data.allMdx.edges.map((application) => (
          <Tile
            key={application.node.fields.slug}
            title={application.node.frontmatter.title}
            image={application.node.frontmatter.image}
            link={`apps${application.node.fields.slug}`}
            color={
              application.node.frontmatter.sector !== 'all'
                ? application.node.frontmatter.sector
                : null
            }
          />
        ))}
      </Tile.Wrapper>
    </Section>
  )
}
