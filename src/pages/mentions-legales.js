import React from 'react'
import styled from 'styled-components'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import Contact from 'src/components/Contact'

const Wrapper = styled.div`
  display: flex;

  &:before {
    content: '';
    position: relative;
    width: 11.5rem;
    margin-right: 1rem;
    background-color: ${(props) => props.theme.colors.main};
  }
`
export default function Blog() {
  return (
    <Web title={'Blog'}>
      <Section>
        <Section.Title>Mentions légales</Section.Title>
        <Wrapper>
          <div>
            <h2>Informations légales</h2>
            <p>
              Ecolab est un service créé par l'
              <a href='https://www.ademe.fr' target='_blank'>
                ADEME
              </a>{' '}
              en partenariat avec{' '}
              <a href='https://beta.gouv.fr/' target='_blank'>
                Beta.gouv.fr
              </a>
              .
            </p>
            <p>
              Siège social de l'ADEME :<br />
              20, avenue du Grésillé
              <br />
              BP 90406
              <br />
              49004 Angers Cedex 01
              <br />
              Tél. : 02 41 20 41 20
              <br />
            </p>

            <h2>Directeur de publication</h2>
            <p>Martin Régner - ADEME</p>

            <h2>Prestataire d'hébergement</h2>
            <p>
              Netlify, Inc
              <br />
              2325 3rd Street, Suite 296,
              <br />
              San Francisco, California 94107
            </p>
            <p>Les données sont hébergées en Europe.</p>
          </div>
        </Wrapper>
      </Section>
      <Contact />
    </Web>
  )
}
