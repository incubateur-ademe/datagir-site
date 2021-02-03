const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const Application = path.resolve(`./src/templates/application.js`)
  return graphql(
    `
      {
        allMdx(filter: { fileAbsolutePath: { regex: "/applications/" } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMdx.edges.forEach((application) => {
      createPage({
        path: `apps${application.node.fields.slug}`,
        component: Application,
        context: {
          slug: application.node.fields.slug
            .replace(/\//g, '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''),
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
