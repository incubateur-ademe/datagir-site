import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import ButtonLink from 'src/components/base/ButtonLink'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 49rem;
  margin: 0 auto 6rem;
  padding-right: 6.25rem;

  &:before {
    content: '';
    width: 5.25rem;
    margin-right: 1rem;
    background-color: ${(props) => props.color};
  }
`
const Content = styled.div``
const Title = styled.h1`
  color: ${(props) => props.color};
`
const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 -0.5rem;

  a {
    margin: 0 0.5rem;
  }
`
export default function Landing(props) {
  return (
    <Wrapper color={props.frontmatter.color}>
      <Content>
        <Title color={props.frontmatter.color}>{props.frontmatter.title}</Title>
        <MDXRenderer>{props.body}</MDXRenderer>
        <ButtonWrapper>
          {props.frontmatter.liens.map((button) => (
            <ButtonLink hollow color={props.frontmatter.color} to={button.lien}>
              {button.label}
            </ButtonLink>
          ))}
        </ButtonWrapper>
      </Content>
    </Wrapper>
  )
}
