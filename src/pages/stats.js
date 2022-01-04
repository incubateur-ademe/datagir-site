import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { QueryClient, QueryClientProvider } from 'react-query'

import Web from 'src/components/layout/Web'
import Applications from 'src/components/stats/Applications'
import Api from 'src/components/stats/Api'
import Misc from 'src/components/stats/Misc'
import Agribalyse from 'src/components/stats/Agribalyse'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    },
  },
})

const Title = styled.h1`
  font-size: 5.5rem;
  text-align: center;
`
export default function Dashboard(props) {
  let sites = [...props.data.allMdx.edges]

  sites.sort((a, b) =>
    a.node.frontmatter.order > b.node.frontmatter.order ? 1 : -1
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Web
        title={'Statistiques'}
        image={props.data.metaimage.childImageSharp.resize}
      >
        <Title>Statistiques</Title>
        <Applications sites={sites} />
        <Api />
        <Misc />
        <Agribalyse />
      </Web>
    </QueryClientProvider>
  )
}
export const pageQuery = graphql`
  query dashboard {
    allMdx(filter: { fileAbsolutePath: { regex: "/applications/" } }) {
      edges {
        node {
          slug
          frontmatter {
            matomo
            title
            color
            order
            visitors
          }
        }
      }
    }
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
