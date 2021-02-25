import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Logo from 'src/components/misc/Logo'
import Social from 'src/components/misc/Social'
import Web from 'src/components/layout/Web'
import Block from 'src/components/layout/Block'
import Section from 'src/components/layout/Section'
import Tile from 'src/components/layout/Tile'
import TileColor from 'src/components/layout/TileColor'
import Profile from 'src/components/misc/Profile'

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 16rem;
  margin: 0 auto 1rem;
`
const StyledLogo = styled(Logo)`
  width: 100%;
  height: auto;
  margin: 0 0 1em;
`
export default function Datagir(props) {
  return (
    <Web
      title={'Qui Sommes Nous'}
      description='(Ré)Concilier défi planétaire et vie quotidienne'
    >
      <Section>
        <Block large>
          <Block.Image large>
            <Img
              fluid={props.data.image1.childrenImageSharp[0].fluid}
              alt={props.title}
            />
          </Block.Image>
          <Block.Content large>
            <LogoWrapper>
              <StyledLogo />
              <Social />
            </LogoWrapper>
            <Block.MainTitle
              dangerouslySetInnerHTML={{
                __html:
                  'Apporter l’information environnementale au plus près des&nbsp;citoyens.',
              }}
            />
            <Block.Text>
              Datagir est un <b>service public gratuit</b>, porté par l’ADEME et
              l’incubateur de la DINUM beta.gouv.fr.
            </Block.Text>
            <Block.Text>
              Il est né du constat que les Français se déclarent de plus en plus
              nombreux à vouloir <b>agir en faveur de l'environnement</b> : ils
              veulent désormais que les services et applications qu’ils
              utilisent au quotidien les aident dans leurs choix et les guident
              dans leurs actions. Malheureusement pour ces acteurs (médias,
              applications, entreprises, associations…), l’
              <b>
                accès et la maîtrise de données environnementales fiables et à
                jour
              </b>{' '}
              peut s’avérer difficile.
            </Block.Text>
            <Block.Text>
              Notre mission est de{' '}
              <b>
                diffuser les informations et données environnementales en
                open-data de l’ADEME
              </b>{' '}
              pour encourager l’amélioration continue et l’innovation. Pour
              cela,{' '}
              <b>
                nous accompagnons toutes les applications & services dans leur
                démarche responsable
              </b>{' '}
              par l'appropriation et l’intégration de ces données afin
              d’apporter l’information au plus près des citoyens.
            </Block.Text>
          </Block.Content>
        </Block>
      </Section>
      <Section>
        <Section.Title>Notre offre</Section.Title>
        <Tile.Wrapper>
          <TileColor
            title={'Des jeux de données'}
            small
            subtitle={
              'Des données ouvertes et fiables pour alimenter vos applications.'
            }
            text={`Datagir vous aiguille dans la consultation des jeux de données de l'ADEME pour faire évoluer vos services et applications.`}
            color={'main'}
            link={'jeux-de-donnees'}
          />
          <TileColor
            title={'Des simulateurs'}
            small
            subtitle={'Des outils de référence facilement intégrables.'}
            text={`Datagir vous propose des simulateurs déjà développés que vous pouvez librement partager, intégrer dans vos services, ou reprendre techniquement.`}
            color={'main'}
            link={'#applications'}
          />
          <TileColor
            title={'Une expertise'}
            small
            subtitle={
              'Notre équipe est composée de développeurs et s’appuie sur des experts de l’ADEME.'
            }
            text={`Datagir vous accompagne dans la compréhension et l’intégration de ces données afin de vous aider à créer de nouvelles fonctionnalités et applications pour la transition écologique.`}
            color={'main'}
            link={'#contact'}
            label={'Nous contacter'}
          />
        </Tile.Wrapper>
      </Section>
      <Section>
        <Section.Title>Vous êtes</Section.Title>
        <Tile.Wrapper>
          <Profile
            title='Développeur.se, Product Owner...'
            quote={`Je veux développer une nouvelle fonctionnaité dans mon application pour apporter l'info CO2 : j'ai besoin de la librairie de calcul et des données fiables`}
            link={'jeux-de-donnees'}
            label={'Découvrir nos jeux de données'}
          />
          <Profile
            title='Responsable de Contenu Web, Journaliste...'
            quote={`Je veux proposer un calculateur CO2 simple et fiable aux visiteurs de mon site, mais je n'ai pas les compétences pour le développer : j'ai besoin de quelque chose de facile à intégrer.`}
            link={'#applications'}
            label={'Découvrir nos simulateurs'}
          />
        </Tile.Wrapper>
      </Section>
    </Web>
  )
}

export const pageQuery = graphql`
  query datagirPage {
    image1: file(relativePath: { eq: "datagir.jpg" }) {
      childrenImageSharp {
        fluid(maxWidth: 684) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
