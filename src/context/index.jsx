import React from 'react'
import { ThemeProvider } from './themeContext'

class GlobalContextProvider extends React.Component {

  render() {
    return (
      <ThemeProvider>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

export { GlobalContextProvider }