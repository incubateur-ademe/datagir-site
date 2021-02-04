import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import Block from 'src/components/layout/Block'
import Landing from 'src/components/home/Landing'
import Content from 'src/components/page/Content'

export default function Datagir(props) {
  console.log(props.data.mdx)
  return (
    <Web title={'Qui Sommes Nous'}>
      <Landing noButton />
      <Section>
        <Block>
          <Block.Image>
            <Img
              fluid={props.data.image1.childrenImageSharp[0].fluid}
              alt={props.title}
            />
          </Block.Image>
          <Block.Content color={'alimentation'}>
            <Block.Title>{props.data.mdx.frontmatter.title}</Block.Title>
            <Block.Text
              dangerouslySetInnerHTML={{
                __html: props.data.mdx.frontmatter.introduction,
              }}
            />
          </Block.Content>
        </Block>
      </Section>
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
