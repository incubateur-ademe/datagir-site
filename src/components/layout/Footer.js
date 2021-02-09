import React from 'react'
import styled from 'styled-components'

import MagicLink from 'src/components/base/MagicLink'
import Social from 'src/components/misc/Social'
import Logos from './header/Logos'

const Wrapper = styled.header`
  position: relative;
  border-top: 2px solid ${(props) => props.theme.colors.main};
  padding-top: 2rem;

  ${(props) => props.theme.mq.small} {
    display: none;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 75em;
  margin: 0 auto 2rem;
  padding: 0 0.5em;
`
const Right = styled.div`
  max-width: 42.75rem;
`
const Description = styled.p``
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`
const MenuItem = styled(MagicLink)`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`
const LinksWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.footer};
`
const Links = styled.div`
  display: flex;
  max-width: 75em;
  margin: 0 auto;
  padding: 1rem 0;
`
const Link = styled(MagicLink)`
  display: block;
  margin-right: 1rem;
  padding-right: 1rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.footer};
  text-decoration: none;
  border-right: 1px solid ${(props) => props.theme.colors.input};

  &:last-child {
    margin: 0;
    padding: 0;
    border: none;
  }
`
export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Logos />
        <Right>
          <Description>
            Datagir accompagne les entreprises, associations ou collectifs dans
            la compréhension et l’intégration des données ouvertes
            environnementales de l’ADEME afin de créer de nouvelles
            fonctionnalités ou applications.
          </Description>
          <Social />
          <Menu>
            <MenuItem to='https://www.legifrance.gouv.fr/'>
              legifrance.gouv.fr
            </MenuItem>
            <MenuItem to='https://www.gouvernement.fr/'>
              gouvernement.fr
            </MenuItem>
            <MenuItem to='https://www.service-public.fr/'>
              service-public.fr
            </MenuItem>
            <MenuItem to='https://www.data.gouv.fr/'>data.gouv.fr</MenuItem>
          </Menu>
        </Right>
      </Content>
      <LinksWrapper>
        <Links>
          <Link to='/mentions-legales'>accessibilité : non conforme</Link>
          <Link to='/mentions-legales'>mentions légales</Link>
          <Link to='/mentions-legales'>données personnelles</Link>
          <Link to='/mentions-legales'>gestion des cookies</Link>
        </Links>
      </LinksWrapper>
    </Wrapper>
  )
}
