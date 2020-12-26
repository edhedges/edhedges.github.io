import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about'
import LatestBlogs from '../components/latestBlogs'
import Methodology from '../components/methodology'
import Portfolio from '../components/portfolio'
import './index.css'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" keywords={[`Eddie`, `Hedges`]} />
    <div>
      <div style={{ padding: `0 0 2rem 0` }}>
        Welcome to my personal website! I'm always open to meeting people that
        are passionate about technology. I'm specifically interested in
        software, economics, and love building in general. If that sounds
        interesting to you <a href="mailto:eddiehedges@gmail.com">let's chat</a>
        .
      </div>
      <div className={'home_container'}>
        <div className={'home_row'}>
          <About />
          <LatestBlogs edges={edges} postCount={4} />
        </div>
        <div className={'home_row'}>
          <Methodology />
          <Portfolio />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
          }
        }
      }
    }
  }
`
