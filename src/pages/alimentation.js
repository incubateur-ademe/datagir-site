import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import Block from 'src/components/layout/Block'
import Button from 'src/components/base/Button'
import FancyLanding from 'src/components/page/FancyLanding'
import Applications from 'src/components/Applications'
import Users from 'src/components/sector/Users'
import Contact from 'src/components/Contact'
import Newsletter from 'src/components/Newsletter'

export default function Alimentation(props) {
  return (
    <Web title={'Alimentation'}>
      <FancyLanding
        color='alimentation'
        title='Alimentation'
        subtitle={`Des données ouvertes pour une alimentation moins émettrice en CO2.`}
        text={`Utilisez les données d'impact de plus de 2 500 aliments dans vos produits et services. Accessibles en OpenData, les données de la base Agribalyse sont disponibles en simple consultation ou peuvent être réutilisées dans vos applications ou services !`}
        buttons={[
          {
            label: `Voir la documentation`,
            to: `https://datagir.gitbook.io/documentation/se-nourrir/se-nourrir-reutiliser-les-donnees`,
          },
          { label: `Voir les simulateurs`, to: `#applications` },
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
          <Block.Content color={'alimentation'}>
            <Block.Title>
              Présent dans les applications préférées des français
            </Block.Title>
            <Block.Text>
              Que ce soit dans Yuka, Marmiton, Open Food Facts ou FoodChéri, ces
              données sont directement mises à disposition de leurs utilisateurs
              via par exemple l'Eco‑score.
            </Block.Text>
            <Block.Buttons>
              <Button
                to='https://docs.score-environnemental.com/'
                hollow
                color={'alimentation'}
              >
                En savoir +
              </Button>
            </Block.Buttons>
          </Block.Content>
        </Block>
        <Block left>
          <Block.Image>
            <Img
              fluid={props.data.image2.childrenImageSharp[0].fluid}
              alt={props.title}
            />
          </Block.Image>
          <Block.Content left color={'alimentation'}>
            <Block.Title>Un guide pour les développeurs</Block.Title>
            <Block.Text>
              Format CSV, API, retrouvez toutes les informations techniques sur
              les méthodes d’intégrations dans notre documentation.
            </Block.Text>
            <Block.Buttons>
              <Button
                to='https://datagir.gitbook.io/documentation/se-nourrir/se-nourrir-reutiliser-les-donnees'
                hollow
                color={'alimentation'}
              >
                Voir la documentation
              </Button>
            </Block.Buttons>
          </Block.Content>
        </Block>
      </Section>
      <Applications sector='alimentation' />
      <Users sector='alimentation' />
      <Contact sector='alimentation' />
      <Newsletter sector='alimentation' />
    </Web>
  )
}
export const pageQuery = graphql`
  query alimentationPage {
    image1: file(relativePath: { eq: "alimentation1.jpg" }) {
      childrenImageSharp {
        fluid(maxWidth: 684, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "alimentation2.jpg" }) {
      childrenImageSharp {
        fluid(maxWidth: 684, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
