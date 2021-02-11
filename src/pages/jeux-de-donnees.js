import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'
import Block from 'src/components/layout/Block'
import Button from 'src/components/base/Button'
import FancyLanding from 'src/components/page/FancyLanding'

export default function Alimentation(props) {
  return (
    <Web title={'Alimentation'}>
      <FancyLanding
        color='main'
        title='Jeux de données'
        subtitle={`Des données ouvertes pour une alimentation moins émettrice en CO2.`}
        text={`Utilisez les données d'impact de plus de 2 500 aliments dans vos produits et services. Accessibles en OpenData, les données de la base Agribalyse sont disponibles en simple consultation ou peuvent être réutilisées dans vos applications ou services !`}
        buttons={[
          {
            label: `Voir les jeux de données`,
            to: `https://data.ademe.fr`,
          },
          {
            label: `Voir la documentation`,
            to: `https://datagir.gitbook.io/documentation`,
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
          <Block.Content>
            <Block.Title>Agribalyse</Block.Title>
            <Block.Text>
              AGRIBALYSE® est une base de données de référence des indicateurs
              d'impacts environnementaux des produits agricoles produits en
              France et des produits alimentaires consommés en France.
            </Block.Text>
            <Block.Text>
              Ces données ont vocation à contribuer à la transition
              environnementale des systèmes agricoles et alimentaires. Elles
              sont fondées sur la méthode de l’Analyse du Cycle de Vie (ACV),
              qui fournit des indicateurs d’impacts environnementaux des
              produits, incluant toutes les étapes (du champ à l’assiette) et
              les différents enjeux (climat, eau, air, sol…). Elles sont
              construites à partir d'un certains nombres d'hypothèses et selon
              un cadre méthodologique précis.
            </Block.Text>
            <Block.Buttons>
              <Button to='https://www.agribalyse.fr/' hollow>
                Voir la documentation
              </Button>
              <Button to='https://agribalyse.ademe.fr/' hollow>
                Voir les données
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
          <Block.Content left>
            <Block.Title>Base Carbone</Block.Title>
            <Block.Text>
              La Base Carbone ® est une base de données publique de facteurs
              d'émissions, nécessaires à la réalisation d’un bilan d’émissions
              de gaz à effet de serre (GES) et plus généralement tout exercice
              de comptabilité carbone.
            </Block.Text>
            <Block.Text>
              Elle est la base de données de référence de l’article 75 de la loi
              Grenelle II, relatif à l’obligation de réalisation d’un Bilan Gaz
              à Effet de Serre (GES) pour les entreprises de plus de 500
              salariés, les établissements publics de plus de 250 agents et les
              collectivités de plus de 50 000 habitants. Administrée par
              l’ADEME, sa gouvernance est multi acteurs (14 organismes publics
              comme privés).
            </Block.Text>
            <Block.Buttons>
              <Button
                to='https://www.bilans-ges.ademe.fr/fr/accueil/contenu/index/page/presentation/siGras/0'
                hollow
              >
                Voir la documentation
              </Button>
              <Button
                to='https://data.ademe.fr/datasets/base-carbone(r)'
                hollow
              >
                Voir les données
              </Button>
            </Block.Buttons>
          </Block.Content>
        </Block>
      </Section>
    </Web>
  )
}
export const pageQuery = graphql`
  query databasePage {
    image1: file(relativePath: { eq: "agribalyse.png" }) {
      childrenImageSharp {
        fluid(maxWidth: 684, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "basecarbone.png" }) {
      childrenImageSharp {
        fluid(maxWidth: 684, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
