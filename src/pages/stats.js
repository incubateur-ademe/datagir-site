import React from 'react'
import { graphql } from 'gatsby'
import Web from 'src/components/layout/Web'

export default function Dashboard(props) {
  return (
      <Web
        title={'Statistiques'}
        image={props.data.metaimage.childImageSharp.resize}
      >
        <div><a target='_blank' rel="noreferrer" href='https://impactco2.fr/stats' title='Stats Impact CO2'>Stats Impact CO2</a></div>
        <div><a target='_blank' rel="noreferrer" href='https://nosgestesclimat.fr/stats' title='Stats Impact CO2'>Stats Nos Gestes Climat</a></div>
      </Web>
  )
}
export const pageQuery = graphql`
  query dashboard {
    metaimage: file(relativePath: { eq: "stats.png" }) {
      childImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }
  }
`
