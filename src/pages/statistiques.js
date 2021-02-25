import React from 'react'
import styled from 'styled-components'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'

const Title = styled.h3``
export default function Stats() {
  return (
    <Web title={'Statistiques'}>
      <Section medium>
        <Section.Title>Statistiques</Section.Title>
        <Title>Site Datagir</Title>
        <iframe
          width='100%'
          height='300'
          src='https://stats.data.gouv.fr/index.php?module=Widgetize&action=iframe&forceView=1&viewDataTable=graphEvolution&disableLink=0&widget=1&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=128&period=day&date=yesterday&disableLink=1&widget=1'
          scrolling='yes'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
        ></iframe>
        <Title>Nos GEStes Climats</Title>
        <iframe
          width='100%'
          height='300'
          src='https://stats.data.gouv.fr/index.php?module=Widgetize&action=iframe&forceView=1&viewDataTable=graphEvolution&disableLink=0&widget=1&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=153&period=day&date=yesterday&disableLink=1&widget=1'
          scrolling='yes'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
        ></iframe>
        <Title>Mon Impact Transport</Title>
        <iframe
          width='100%'
          height='300'
          src='https://stats.data.gouv.fr/index.php?module=Widgetize&action=iframe&forceView=1&viewDataTable=graphEvolution&disableLink=0&widget=1&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=155&period=day&date=yesterday&disableLink=1&widget=1'
          scrolling='yes'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
        ></iframe>
        <Title>Mes Fruits et Légumes de Saison</Title>
        <iframe
          width='100%'
          height='300'
          src='https://stats.data.gouv.fr/index.php?module=Widgetize&action=iframe&forceView=1&viewDataTable=graphEvolution&disableLink=0&widget=1&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=154&period=day&date=yesterday&disableLink=1&widget=1'
          scrolling='yes'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
        ></iframe>
        <Title>Mon Convertisseur CO2</Title>
        <iframe
          width='100%'
          height='300'
          src='https://stats.data.gouv.fr/index.php?module=Widgetize&action=iframe&forceView=1&viewDataTable=graphEvolution&disableLink=0&widget=1&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=156&period=day&date=yesterday&disableLink=1&widget=1'
          scrolling='yes'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
        ></iframe>
      </Section>
    </Web>
  )
}
