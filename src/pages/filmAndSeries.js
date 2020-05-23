import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Bio from '../components/bio'
import { rhythm } from '../utils/typography'

export default ({ data, location }) => {
  const { title: siteTitle } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />

      <h1 style={{ margin: `${rhythm(1 / 2)} 0 ${rhythm(2)} 0` }}>
        Movies and TV Shows
      </h1>

      <main style={{ marginTop: rhythm(1) }}>
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            id="movies"
            href="https://letterboxd.com/vre2h"
          >
            Movies{' '}
            <span role="img" aria-label="popcorn">
              🍿
            </span>
          </a>
        </h3>
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            id="tvshows"
            href="https://myshows.me/m/Vrezh10"
          >
            TV Shows{' '}
            <span role="img" aria-label="tv">
              📺
            </span>
          </a>
        </h3>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
