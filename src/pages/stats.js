import React from 'react'
import { graphql } from 'gatsby'
import { QueryClient, QueryClientProvider } from 'react-query'

import Web from 'src/components/layout/Web'
import Applications from 'src/components/stats/Applications'
import Api from 'src/components/stats/Api'
import Datagir from 'src/components/stats/Datagir'
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

export default function Dashboard(props) {
  let sites = [...props.data.allMdx.edges]

  sites = sites
    .filter((site) => site.node.frontmatter.matomo !== 153)
    .sort((a, b) =>
      a.node.frontmatter.order > b.node.frontmatter.order ? 1 : -1
    )
  console.log(sites)
  return (
    <QueryClientProvider client={queryClient}>
      <Web
        title={'Statistiques'}
        image={props.data.metaimage.childImageSharp.resize}
      >
        <Applications sites={sites} />
        <Api />
        <Datagir />
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
