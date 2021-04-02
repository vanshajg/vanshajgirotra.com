import React from 'react'
import { themes } from '../contants/theme'


const prefersDarkMode = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches === true;
}
const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => { }
})

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      const theme = this.state.theme === themes.dark ? themes.light : themes.dark
      localStorage.setItem('theme', theme)
      this.setState({ theme })
    }
    const theme = localStorage.getItem('theme') || (prefersDarkMode() ? themes.dark : themes.light)
    this.state = {
      toggleTheme: this.toggleTheme,
      theme
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export { ThemeProvider, ThemeContext }