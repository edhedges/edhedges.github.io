import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

interface BlogPostData {
  markdownRemark: {
    html: string
    frontmatter: {
      date: string
      path: string
      title: string
      tags: string[]
    }
  }
}

const BlogTemplate: React.FC<PageProps<BlogPostData>> = ({ data }) => {
  const { markdownRemark } = data

  // Handle missing data gracefully
  if (!markdownRemark) {
    return (
      <Layout>
        <SEO title="Post Not Found" keywords={[]} />
        <div>
          <h1>Post Not Found</h1>
          <p>Sorry, this blog post could not be found.</p>
          <p><a href="/blog">Return to blog archives</a></p>
        </div>
      </Layout>
    )
  }

  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={frontmatter.tags} />
      <div>
        <div>
          <div style={{ padding: `0 0 2rem 0` }}>
            Want to read more posts? Go back to the <a href="/blog">archives</a>
            .
          </div>
        </div>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1 className="blog-post-title">{frontmatter.title}</h1>
            <h2 className="blog-post-date">{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
