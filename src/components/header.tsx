import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#fff`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <h1
        className="header_h1"
        style={{ display: 'inline-block', margin: 0, width: '50%' }}
      >
        <Link
          to="/"
          style={{
            color: `#2E404C`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className="social_list">
        <li>
          <a href="https://github.com/edhedges">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/1165441/edhedges">
            <i className="fab fa-stack-overflow" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eddiehedges">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
      </ul>
      <br />
      <hr />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
