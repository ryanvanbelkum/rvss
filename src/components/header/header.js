import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container row">
      <p className="logo">{siteTitle}</p>
      <div className="social">
        <a href="https://medium.com/@hello_62448">
          <img src="https://img.icons8.com/ios-filled/50/000000/medium-new.png" alt="medium" />
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
