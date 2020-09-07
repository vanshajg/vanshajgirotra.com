import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ route }) => {
  const data = useStaticQuery(
    graphql`
    query{
        
        file(name: {eq:"header_icon"}) {
          header_url :publicURL
        } 
      }
    `
  )
  const { file: { header_url } } = data
  return (
    <header className="header">
      <h1 className="header__text">
        {`${route}`} <img src={header_url} />
      </h1>
    </header>
  )
}

Header.propTypes = {
  route: PropTypes.string,
}

Header.defaultProps = {
  route: '~',
}

export default Header
