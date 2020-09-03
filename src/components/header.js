import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './styles/header.scss'

const Header = ({ route }) => (
  <header className="header">
    <div>
      <h1 className="header__text">
        {`${route}>`}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  route: PropTypes.string,
}

Header.defaultProps = {
  route: ``,
}

export default Header
