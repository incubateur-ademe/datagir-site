import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Marianne from 'src/components/base/Marianne'
import Logo from 'src/components/misc/Logo'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Ademe = styled(Link)`
  width: 4.9375rem;
  height: auto;
  ${(props) => props.theme.mq.small} {
    width: 2.75rem;
  }
`
const StyledLink = styled(Link)`
  margin-left: 1rem;

  ${(props) => props.theme.mq.small} {
    margin-left: 0.5rem;
  }
`
const StyledLogo = styled(Logo)`
  ${(props) => props.theme.mq.small} {
    width: 4rem;
    height: auto;
  }
`
export default function Logos() {
  const data = useStaticQuery(
    graphql`
      query {
        ademe: file(relativePath: { eq: "logos/ademe.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 90, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper>
      <Link to='/'>
        <Marianne />
      </Link>
      <Ademe to='/'>
        <Img
          fadeIn={false}
          fluid={data.ademe.childImageSharp.fluid}
          alt='ADEME'
        />
      </Ademe>
      <StyledLink to='/'>
        <StyledLogo link />
      </StyledLink>
    </Wrapper>
  )
}
