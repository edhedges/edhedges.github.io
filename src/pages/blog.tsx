import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostLink from '../components/post-link'
import { graphql } from 'gatsby'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(JSON.stringify(edges.map(edge => edge.node.frontmatter.tags)))
  return (
    <Layout>
      <SEO title="Blog" keywords={[`blog`, `archives`]} />
      <div>
        <br />
        <h2>Blog Archives</h2>
        <hr />
      </div>
      <div>
        {edges.map(edge => (
          <PostLink key={edge.node.id} post={edge.node} />
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

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
