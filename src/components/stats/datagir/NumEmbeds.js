import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Tile from 'src/components/layout/Tile'

const Number = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 800;
  line-height: 1;
  text-align: center;
  color: ${(props) => props.color || props.theme.colors.main};
  transition: color 500ms ease-out;
`
const Label = styled.span`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
`
export default function NumEmbeds() {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(filter: { fileAbsolutePath: { regex: "/applications/" } }) {
          edges {
            node {
              frontmatter {
                users {
                  title
                }
              }
            }
          }
        }
      }
    `
  )
  const numEmbeds = data.allMdx.edges.reduce(
    (acc, cur) => acc + cur.node.frontmatter.users.length,
    0
  )
  return (
    <Tile.Tile>
      <Tile.Content>
        <Number>{data && numEmbeds}</Number>
        <Label>
          intégrations
          <br />
          de nos simulateurs
        </Label>
      </Tile.Content>
    </Tile.Tile>
  )
}
