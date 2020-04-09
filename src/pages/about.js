import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Social from '../components/social'
import Flex from '../components/Flex'
import { rhythm } from '../utils/typography'
import aboutPhoto from '../../content/assets/about-photo.jpg'
import useWindowSize from '../hooks/useWindowSize'

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { width } = useWindowSize()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <Flex justifyContent="space-between" alignItems="baseline">
        <h1 style={{ margin: `${rhythm(1 / 2)}`, marginLeft: 0 }}>About me</h1>
        <Social />
      </Flex>
      <main style={{ marginTop: rhythm(1.5) }}>
        <h3>Ahoy!</h3>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          flexWrap={Number(width) < 600 ? 'wrap' : 'no-wrap'}
        >
          <div
            style={{
              marginRight: rhythm(1 / 2),
            }}
          >
            <p>
              I’m Vrezh, Software Engineer with a keen interest in design,
              management and education.
            </p>
          </div>
          <img src={aboutPhoto} alt="" height="340" />
        </Flex>
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
