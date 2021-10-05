import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import StyleContext from 'src/utils/StyleContext'
import { themes } from 'src/utils/styles'

const StyleProvider = (props) => {
  const [theme, setTheme] = useState('default')

  return (
    <StyleContext.Provider
      value={{
        themes,
        theme,
        setTheme,
      }}
    >
      <ThemeProvider theme={{ ...themes[theme] }}>
        {props.children}
      </ThemeProvider>
    </StyleContext.Provider>
  )
}

const StyleProviderFunction = ({ element }) => (
  <StyleProvider>{element}</StyleProvider>
)

export default StyleProviderFunction
