import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Section from 'src/components/layout/Section'
import Tile from 'src/components/layout/Tile'

export default function Databases(props) {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(filter: { fileAbsolutePath: { regex: "/databases/" } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                image {
                  childrenImageSharp {
                    fluid(quality: 90) {
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
    <Section id='databases'>
      <Section.Title>
        Nos Jeux de Données{' '}
        {props.sector && (
          <>
            liés {props.sector === 'alimentation' ? "à l'" : 'au '}
            <Section.Sector color={props.sector}>
              {props.sector.charAt(0).toUpperCase() + props.sector.slice(1)}
            </Section.Sector>
          </>
        )}
      </Section.Title>
      <Tile.Wrapper>
        {data.allMdx.edges
          .filter((database) =>
            !props.sector
              ? true
              : ['all', props.sector].includes(database.node.frontmatter.sector)
          )
          .map((database) => (
            <Tile
              key={database.node.fields.slug}
              title={database.node.frontmatter.title}
              image={database.node.frontmatter.image}
              link={`/databases${database.node.fields.slug}`}
              color={
                database.node.frontmatter.sector !== 'all'
                  ? database.node.frontmatter.sector
                  : null
              }
              margin
            />
          ))}
      </Tile.Wrapper>
    </Section>
  )
}
