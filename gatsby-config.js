module.exports = {
  siteMetadata: {
    // edit below
    title: `Datagir`,
    author: `Datagir`,
    description: `Vous accompagner dans la compréhension et l’intégration des données ouvertes environnementales de l’ADEME afin de créer de nouvelles fonctionnalités ou applications.`,
    siteUrl: `http://datagir.netlify.app`,
    keywords: ['datagir', 'ademe', 'agribalyse'],
    social: {
      twitter: `_datagir`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-use-query-params',
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/applications`,
        name: `applications`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/users`,
        name: `users`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 784,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          { resolve: 'gatsby-remark-external-links' },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '128',
        matomoUrl: 'https://stats.data.gouv.fr',
        siteUrl: 'https://datagir.ademe.fr',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Datagir`,
        short_name: `Datagir`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1FC58E`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`josefin sans\:700&text=datgir`],
        display: 'auto',
      },
    },
  ],
}
