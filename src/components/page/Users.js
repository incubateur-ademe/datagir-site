import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import MagicLink from 'src/components/base/MagicLink'
import Section from 'src/components/layout/Section'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -0.5rem;
`
const User = styled(MagicLink)`
  width: 5.25rem;
  margin: 0.5rem;
`
export default function Users(props) {
  console.log(props)
  return props.users ? (
    <Section id='users' medium>
      <Section.Title>
        Ses {props.forks ? 'Déclinaisons' : 'Réutilisateurs'}
      </Section.Title>
      <Wrapper>
        {props.users.map((user) => (
          <User to={user.link}>
            <Img
              fluid={user.image.childrenImageSharp[0].fluid}
              alt={user.title}
            />
          </User>
        ))}
      </Wrapper>
    </Section>
  ) : (
    ''
  )
}
