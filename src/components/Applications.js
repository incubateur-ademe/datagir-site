import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Section from 'src/components/layout/Section'
import Tile from 'src/components/layout/Tile'

export default function Applications(props) {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: frontmatter___order }
          filter: { fileAbsolutePath: { regex: "/applications/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                image {
                  childrenImageSharp {
                    fluid(maxWidth: 384, maxHeight: 212, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                buttons {
                  link
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

  return (
    <Section id='applications'>
      <Tile.Wrapper>
        {data.allMdx.edges
          .filter((application) =>
            ['Nos Gestes Climat', 'Impact CO2'].includes(
              application.node.frontmatter.title
            )
          )
          .sort((a) =>
            !props.sector
              ? 1
              : a.node.frontmatter.sector === props.sector
              ? -1
              : 1
          )
          .map((application) => (
            <Tile
              key={application.node.fields.slug}
              title={application.node.frontmatter.title}
              image={application.node.frontmatter.image}
              link={`${application.node.frontmatter.buttons[0].link}`}
              color={
                application.node.frontmatter.sector !== 'all'
                  ? application.node.frontmatter.sector
                  : null
              }
              linkLabel='Découvrir'
            />
          ))}
      </Tile.Wrapper>
    </Section>
  )
}
