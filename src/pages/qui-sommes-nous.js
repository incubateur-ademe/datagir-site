import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Logo from 'src/components/misc/Logo'
import Web from 'src/components/layout/Web'
import Block from 'src/components/layout/Block'
import Content from 'src/components/page/Content'

const StyledLogo = styled(Logo)`
  width: 17.75em;
  height: auto;
  margin-bottom: 1.5em;
`
export default function Datagir(props) {
  return (
    <Web title={'Qui Sommes Nous'}>
      <Block top>
        <Block.Image top>
          <Img
            fluid={props.data.image1.childrenImageSharp[0].fluid}
            alt={props.title}
          />
        </Block.Image>
        <Block.Content top>
          <StyledLogo />
          <Block.Title>{props.data.mdx.frontmatter.title}</Block.Title>
          <Block.Text
            dangerouslySetInnerHTML={{
              __html: props.data.mdx.frontmatter.introduction,
            }}
          />
        </Block.Content>
      </Block>
      <Content>{props.data.mdx.body}</Content>
    </Web>
  )
}

export const pageQuery = graphql`
  query datagirPage {
    mdx(slug: { eq: "datagir" }) {
      body
      frontmatter {
        title
        introduction
      }
    }
    image1: file(relativePath: { eq: "datagir.jpg" }) {
      childrenImageSharp {
        fluid(maxWidth: 684) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
