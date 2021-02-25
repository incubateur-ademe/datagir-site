import React, { useEffect } from 'react'
import styled from 'styled-components'

import Web from 'src/components/layout/Web'
import Section from 'src/components/layout/Section'

const Title = styled.h3``
export default function Stats() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.text = `!function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");`
    document.body.appendChild(script)
  }, [])
  return (
    <Web title={'Statistiques'}>
      <Section medium>
        <Section.Title>Statistiques</Section.Title>
        <div
          class='infogram-embed'
          data-id='6927d008-7eb4-4cc3-a1ee-85e64d7722ec'
          data-type='interactive'
          data-title='Statistiques Ecolab'
        />

        <Title>Site Datagir</Title>
        <iframe
          title='Site Datagir'
          width='100%'
          height='300'
          src='https://stats.data.gouv.fr/index.php?module=Widgetize&action=iframe&forceView=1&viewDataTable=graphEvolution&disableLink=0&widget=1&moduleToWidgetize=VisitsSummary&actionToWidgetize=getEvolutionGraph&idSite=128&period=day&date=yesterday&disableLink=1&widget=1'
          scrolling='yes'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
        ></iframe>
        <Title>Nos GEStes Climat</Title>
        <iframe
          title='Nos GEStes Climat'
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
          title='Mon Impact Transport'
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
          title='Mes Fruits et Légumes de Saison'
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
          title='Mon Convertisseur CO2'
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
