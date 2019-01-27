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
      <ul
        className="social_list"
        style={{ display: 'inline-block', margin: 0, width: '50%' }}
      >
        <li className="githubicon">
          <a
            title="GitHub"
            className="octoicon"
            href="https://github.com/edhedges"
            // style={{ bc }}
          />
        </li>
        <li>
          <a
            title="StackExchange"
            className="stackexchangeicon"
            href="http://stackexchange.com/users/1193099/edhedges?tab=accounts"
          />
        </li>
        <li>
          <a
            title="LinkedIn"
            className="linkedinicon"
            href="http://www.linkedin.com/pub/eddie-hedges/3b/167/168"
          />
        </li>
        {/* <li>
          <a title="RSS Feed" className="rssicon" href="/atom.xml" />
        </li> */}
      </ul>
      <br />
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
