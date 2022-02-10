import React from 'react'
import { languages } from '../contants/languages'

const LanguageContext = React.createContext({
  language: languages.en,
  changeLanguage: () => {},
})

class LanguageProvider extends React.Component {
  constructor(props) {
    super(props)

    this.changeLanguage = language => {
      this.setState(() => ({
        language,
      }))
    }

    this.state = {
      language: languages.en,
      changeLanguage: this.changeLanguage,
    }
  }
  render() {
    return (
      <LanguageContext.Provider value={this.state}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export { LanguageProvider, LanguageContext }
