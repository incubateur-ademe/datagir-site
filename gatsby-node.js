const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const Application = path.resolve(`./src/templates/application.js`)
  const Post = path.resolve(`./src/templates/post.js`)
  return graphql(
    `
      {
        apps: allMdx(
          filter: { fileAbsolutePath: { regex: "/applications/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        posts: allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
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

    result.data.apps.edges.forEach((page) => {
      createPage({
        path: `apps${page.node.fields.slug}`,
        component: Application,
        context: {
          slug: page.node.fields.slug
            .replace(/\//g, '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''),
        },
      })
    })
    result.data.posts.edges.forEach((post) => {
      createPage({
        path: `blog${post.node.fields.slug}`,
        component: Post,
        context: {
          slug: post.node.fields.slug
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
