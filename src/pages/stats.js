import React from 'react'
import { graphql } from 'gatsby'
import { QueryClient, QueryClientProvider } from 'react-query'

import Web from 'src/components/layout/Web'
import Data from 'src/components/stats/Data'

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

  sites.sort((a, b) =>
    a.node.frontmatter.order > b.node.frontmatter.order ? 1 : -1
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Web
        title={'Statistiques'}
        image={props.data.metaimage.childImageSharp.resize}
      >
        <Data sites={sites} />
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
