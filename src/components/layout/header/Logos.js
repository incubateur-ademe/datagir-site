import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Logo from 'src/components/misc/Logo'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const StyledLink = styled(Link)`
  margin-left: 1rem;
`
export default function Logos() {
  const data = useStaticQuery(
    graphql`
      query {
        repu: file(relativePath: { eq: "logos/repufrancaise.jpg" }) {
          childImageSharp {
            fixed(height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        ademe: file(relativePath: { eq: "logos/ademe.jpg" }) {
          childImageSharp {
            fixed(height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper>
      <Img fixed={data.repu.childImageSharp.fixed} alt='République Française' />
      <Img fixed={data.ademe.childImageSharp.fixed} alt='ADEME' />
      <StyledLink to='/'>
        <Logo link />
      </StyledLink>
    </Wrapper>
  )
}
