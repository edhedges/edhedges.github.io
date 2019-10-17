import React from 'react'
import PostLink from './post-link'

const getPosts = (edges: any, count: number) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>{posts.slice(0, count)}</div>
}
type TProps = {
  edges: any
  postCount: number
}
const LatestBlogs: React.FC<TProps> = props => {
  return (
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
      {getPosts(props.edges, props.postCount)}
    </div>
  )
}

export default LatestBlogs
