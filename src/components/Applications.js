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
                    fluid(maxWidth: 384, maxHeight: 212) {
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

  return (
    <Section id='applications'>
      <Section.Title>
        Nos Simulateurs{' '}
        {props.sector && (
          <Section.Sector color={props.sector}>
            {props.sector.charAt(0).toUpperCase() + props.sector.slice(1)}
          </Section.Sector>
        )}
      </Section.Title>
      <Tile.Wrapper>
        {data.allMdx.edges
          .filter((application) =>
            !props.sector
              ? true
              : ['all', props.sector].includes(
                  application.node.frontmatter.sector
                )
          )
          .map((application) => (
            <Tile
              key={application.node.fields.slug}
              title={application.node.frontmatter.title}
              image={application.node.frontmatter.image}
              link={`/apps${application.node.fields.slug}`}
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
