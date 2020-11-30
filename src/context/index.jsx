import React from 'react'
import { LanguageProvider } from './languageContext'
import { ThemeProvider } from './themeContext'

class GlobalContextProvider extends React.Component {

  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          {this.props.children}
        </LanguageProvider>
      </ThemeProvider>
    )
  }
}

export { GlobalContextProvider }