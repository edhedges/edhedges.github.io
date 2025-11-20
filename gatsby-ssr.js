/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="netlify-identity-widget"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    />,
  ])
}
