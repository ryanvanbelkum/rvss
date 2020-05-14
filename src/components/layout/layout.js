import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Header from "../header/header"
import "./layout.scss"

const Layout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          abvTitle
        }
      }
    }
  `)

  console.log(data)
  return (
    <div className={className}>
      <Header siteTitle={data.site.siteMetadata.title} mobileTitle={data.site.siteMetadata.abvTitle} />
      <div className="layout__child-container">
        <main>{children}</main>
        <footer>
          <span className="logo">{data.site.siteMetadata.title}</span>
          <div className="contact">
            <a href="mailto:hello@ryanvanbelkum.me">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="tel:816-344-1719">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
