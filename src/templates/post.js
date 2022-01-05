import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Web from 'src/components/layout/Web'
import Block from 'src/components/layout/Block'
import Content from 'src/components/page/Content'

const Return = styled(Link)`
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
  text-decoration: none;
  vertical-align: bottom;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: translateX(-100%);
    background-color: ${(props) => props.theme.colors.main};
  }
  &:hover {
    &:before {
      transform: translateX(100%);
      transition: transform 300ms ease-out;
    }
  }
`
export default function Databases(props) {
  return (
    <Web
      title={props.data.mdx.frontmatter.title}
      image={props.data.mdx.frontmatter.image.childImageSharp.resize}
    >
      <Block top>
        <Block.Image top>
          <Img
            fluid={props.data.mdx.frontmatter.image.childImageSharp.fluid}
            alt={props.data.mdx.frontmatter.title}
          />
        </Block.Image>
        <Block.Content top>
          <Return to='/blog'>← Retour à la liste des articles</Return>
          <Block.MainTitle>{props.data.mdx.frontmatter.title}</Block.MainTitle>
          <Block.Date>
            Publié le{' '}
            {new Intl.DateTimeFormat('fr-FR').format(
              new Date(props.data.mdx.frontmatter.date)
            )}
          </Block.Date>
          <Block.Text
            dangerouslySetInnerHTML={{
              __html: props.data.mdx.frontmatter.description,
            }}
          />
        </Block.Content>
      </Block>
      <Content>{props.data.mdx.body}</Content>
    </Web>
  )
}

export const pageQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 684, quality: 90) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        date
        description
      }
    }
  }
`
