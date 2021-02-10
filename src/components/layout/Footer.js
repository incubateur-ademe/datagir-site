import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Logos from './header/Logos'
import Menu from './footer/Menu'
import MainLinks from './footer/MainLinks'
import Links from './footer/Links'

const Wrapper = styled.footer`
  position: relative;
  border-top: 2px solid ${(props) => props.theme.colors.main};
  padding-top: 2rem;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 75em;
  margin: 0 auto 2rem;
  padding: 0 0.5em;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column;
  }
`
const Right = styled.div`
  max-width: 42.75rem;
`
const Description = styled.p`
  ${(props) => props.theme.mq.medium} {
    margin-top: 1rem;
  }
`

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        applications: allMdx(
          sort: { fields: frontmatter___order }
          filter: { fileAbsolutePath: { regex: "/applications/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        databases: allMdx(
          filter: { fileAbsolutePath: { regex: "/databases/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <Menu data={data} />
      <Content>
        <Logos />
        <Right>
          <Description>
            Datagir accompagne les entreprises, associations ou collectifs dans
            la compréhension et l’intégration des données ouvertes
            environnementales de l’ADEME afin de créer de nouvelles
            fonctionnalités ou applications.
          </Description>
          <MainLinks />
        </Right>
      </Content>
      <Links />
    </Wrapper>
  )
}
