import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Section from 'src/components/layout/Section'
import Tile from 'src/components/layout/Tile'

export default function Users(props) {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___order }
        filter: { fileAbsolutePath: { regex: "/users/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              sector
              home
              link
              image {
                childrenImageSharp {
                  fluid(maxWidth: 384, quality: 90) {
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
  `)
  return data.allMdx.edges.find(
    (user) => user.node.frontmatter.sector === props.sector
  ) ? (
    <Section id='users'>
      <Section.Title>
        Nos Réutilisateurs{' '}
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
          .filter((user) => user.node.frontmatter.sector === props.sector)
          .map((user) => (
            <Tile
              key={user.node.fields.slug}
              title={user.node.frontmatter.title}
              text={user.node.frontmatter.description}
              image={user.node.frontmatter.image}
              link={user.node.frontmatter.link}
              color={
                user.node.frontmatter.sector !== 'all'
                  ? user.node.frontmatter.sector
                  : null
              }
              margin
            />
          ))}
      </Tile.Wrapper>
    </Section>
  ) : (
    ''
  )
}
