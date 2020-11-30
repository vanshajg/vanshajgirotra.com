import React from 'react'
import { themes } from '../contants/theme'



const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => { }
})

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }))
    }

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
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