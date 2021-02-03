import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import fonts from './fonts'

export const themes = {
  default: {
    name: 'Défaut',
    colors: {
      main: '#1FC58E',
      alimentation: '#FF6A3D',
      transport: '#361999',
      logement: '#FF4C82',
      background: '#fff',
      tile: '#F9F8F6',
      input: '#F0F0F0',
      title: '#1E1E1E',
      text: '#383838',
    },
    fonts: '"Marianne", Arial, sans-serif',
    mq: {
      small: `@media screen and (max-width: ${730}px)`,
      medium: `@media screen and (max-width: ${1260}px)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${1260}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${1260}px)`,
      large: `@media screen and (min-width: ${1800}px)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  ${fonts}

  html {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts};
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.4;
  } 

  *, *:before, *:after {
    margin-top: 0;
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-weight: 800;
    line-height: 1.2;
    color: ${(props) => props.theme.colors.title};
  }

  h1 {
    font-size: 3em;
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 2.5em;
    margin-bottom: 0.8em;
  }
  h3 {
    font-size: 1.5em;
    margin-bottom: 1em;
  }

  a {
    color: ${(props) => props.theme.colors.main};
  }
  input, select, textarea {
    color: ${(props) => props.theme.colors.text};
  }
`
