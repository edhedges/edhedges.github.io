import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import resume from '../pdf/Resume.pdf'
import './index.css'
import PostLink from '../components/post-link'

const getPosts = (edges, count) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>{Posts.slice(0, count)}</div>
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" keywords={[`Eddie`, `Hedges`]} />
    <div>
      <div style={{ padding: `0 0 2rem 0` }}>
        Welcome to my personal website! I'm always open to working with like
        minded people that are passionate about technology. If that's you{' '}
        <a href="mailto:eddiehedges@gmail.com">let's talk business</a>.
      </div>
      <div className={'home_container'}>
        <div className={'home_row'}>
          <div className={'home_col'}>
            <h2>About</h2>
            <hr />
            <p>
              I am living a privileged life in{' '}
              <a href="https://www.gardnerkansas.gov/">Gardner, KS</a> with my
              beautiful wife Katie, my amazing daughter Nora Eve, my dogs Ellie
              and Maeby, and my cats Theo and Lucy. I am employed by{' '}
              <a href="https://bloom.co/">Bloom</a> as a full stack software
              developer where we're building a decentralized identity and credit
              protocol on top of Ethereum.
            </p>
            <p>
              I graduated from{' '}
              <a href="https://www.k-state.edu/">Kansas State University</a> in
              December 2012 with a bachelor's degree in{' '}
              <a href="https://www.k-state.edu/careercenter/students/exploration/majorin/infosys.html">
                Information Systems
              </a>{' '}
              and a minor in{' '}
              <a href="https://cba.k-state.edu/academics/undergraduate/business-minor.html">
                Business
              </a>
              .
            </p>
            <p>
              I truly enjoy my life, my line of work, and am always looking for
              ways to challenge and improve myself.
            </p>
          </div>
          <div className={'home_col'}>
            <div>
              <h2 style={{ display: 'inline-block' }}>Blog</h2>
              <span
                style={{
                  display: 'inline-block',
                  float: 'right',
                }}
              >
                <a href="/blog">Archives</a>
              </span>
              <span style={{ clear: 'both' }} />
            </div>
            <hr />
            {getPosts(edges, 4)}
          </div>
        </div>
        <div className={'home_row'}>
          <div className={'home_col'}>
            <h2>Methodology</h2>
            <hr />
            <p>
              The following three principles have been extremely helpful to me
              when solving business problems through software:
            </p>
            <ul>
              <li>
                <a href="http://en.wikipedia.org/wiki/KISS_principle">
                  Keep It Simple Stupid
                </a>
              </li>
              <li>
                <a href="http://en.wikipedia.org/wiki/Don't_repeat_yourself">
                  Don't Repeat Yourself
                </a>
              </li>
              <li>
                <a href="http://c2.com/cgi/wiki?PrematureOptimization">
                  Premature optimization is the root of all evil
                </a>
              </li>
            </ul>
            <p>
              Personal methodologies aside, take a look at my résumé (it's under
              the Portfolio section) to see a detailed description of my
              professional experiences.
            </p>
          </div>
          <div className={'home_col'}>
            <h2>Portfolio</h2>
            <hr />
            <h3>Qualifications</h3>
            <p>
              <a href={resume}>Résumé</a>
            </p>
            <h3>Past Work</h3>
            <ul>
              <li>
                Full stack development at{' '}
                <a href="https://911datamaster.com/">911 Datamaster, Inc.</a>{' '}
                focusing on{' '}
                <a href="https://911datamaster.com/datanexus/">DataNexus</a>.
              </li>
              <li>
                Backend services and internal tools/applications related to
                various products including{' '}
                <a href="http://software.garmin.com/en-US/express.html">
                  Garmin Express
                </a>
                .
              </li>
              <li>
                Full stack web applications for various ScriptPro produts,
                including{' '}
                <a href="http://www.scriptpro.com/Products/SP-Central-Pharmacy-Management-System/">
                  Pharmacy Management Software System
                </a>{' '}
                and{' '}
                <a href="http://www.scriptpro.com/Products/SP-Central-Workflow-System/">
                  SP Central Workflow System
                </a>
                .
              </li>
            </ul>
          </div>
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
