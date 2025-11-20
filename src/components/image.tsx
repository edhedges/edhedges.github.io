import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

/*
 * This component is built using `gatsby-plugin-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery` hook.
 *
 * For more information, see the docs:
 * - `gatsby-plugin-image`: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `)

  const image = getImage(data.placeholderImage)

  if (!image) {
    return null
  }

  return <GatsbyImage image={image} alt="Gatsby Astronaut" />
}

export default Image
