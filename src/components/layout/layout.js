/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
          title
        }
      }
    }
  `)

  return (
    <div className={className}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="layout__child-container">
        <main>{children}</main>
        <footer>
          <span className="logo">{"Ryan VanBelkum {Software Services}"}</span>
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
