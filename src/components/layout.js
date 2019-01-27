import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import forkme from '../images/forkme.png'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="forkme">
          <a href="https://github.com/edhedges">
            <img src={forkme} alt="Fork me on GitHub" />
          </a>
        </div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <br />
          <br />
          <hr />
          <footer style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()}, Built by Eddie Hedges with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {` `}
            and hosted on <a href="https://pages.github.com/">GitHub Pages</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
