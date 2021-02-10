import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Logo from 'src/components/misc/Logo'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const StyledRepu = styled(Img)`
  width: 6.1875rem;
  height: 5.625rem;

  ${(props) => props.theme.mq.small} {
    width: 3.09375rem;
    height: 2.8125rem;
  }
`
const StyledADEME = styled(Img)`
  width: 4.9375rem;
  height: 5.625rem;

  ${(props) => props.theme.mq.small} {
    width: 2.46875rem;
    height: 2.8125rem;
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
        repu: file(relativePath: { eq: "logos/repufrancaise.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 99, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ademe: file(relativePath: { eq: "logos/ademe.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 79, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper>
      <StyledRepu
        fluid={data.repu.childImageSharp.fluid}
        alt='République Française'
      />

      <StyledADEME fluid={data.ademe.childImageSharp.fluid} alt='ADEME' />
      <StyledLink to='/'>
        <StyledLogo link />
      </StyledLink>
    </Wrapper>
  )
}
