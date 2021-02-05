import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import Block from 'src/components/layout/Block'
import Landing from 'src/components/sector/Landing'
import Applications from 'src/components/Applications'
import Users from 'src/components/Users'
import Databases from 'src/components/Databases'
import Contact from 'src/components/Contact'
import Newsletter from '../components/Newsletter'

export default function Transport(props) {
  return (
    <Web title={'Logement'}>
      <Landing
        sector='logement'
        subtitle={`Faciliter par les données, la rénovation et la décarbonation du secteur du bâtiment`}
        text={`Sed in enim ac odio consequat pellentesque at et mi. Donec sed finibus lacus, sed pretium nunc. Sed sit amet vestibulum turpis. Curabitur nec interdum dui. Phasellus blandit auctor cursus. Sed sit amet vestibulum turpis.`}
        buttons={[
          {
            label: `Voir la documentation`,
            to: `https://datagir.gitbook.io/documentation/`,
          },
        ]}
      />
      <Section>
        <Block>
          <Block.Image>
            <Img
              fluid={props.data.image1.childrenImageSharp[0].fluid}
              alt={props.title}
            />
          </Block.Image>
          <Block.Content color={'logement'}>
            <Block.Title>
              Diagnostics de performance énergétique (DPE) pour les logements
            </Block.Title>
            <Block.Text>
              Utilisez ces données pour apporter de nouvelles informations à vos
              utilisateurs ! <br />
              <br />À noter : les données du DPE réalisé ne reflètent pas
              nécessairement la qualité énergétique du bien actuellement. Entre
              la date de réalisation du DPE et aujourd’hui, des travaux
              d’amélioration ont pu être réalisés.
            </Block.Text>
          </Block.Content>
        </Block>
      </Section>
      <Applications sector='logement' />
      <Databases sector='logement' />
      <Users sector='logement' />
      <Contact sector='logement' />
      <Newsletter sector='logement' />
    </Web>
  )
}
export const pageQuery = graphql`
  query logementPage {
    image1: file(relativePath: { eq: "logement1.jpg" }) {
      childrenImageSharp {
        fluid(maxWidth: 684) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
