import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Flex from '../components/Flex'
import { rhythm } from '../utils/typography'
import Bio from '../components/bio'
import { QuoteIcon } from '../components/icons'

const ReviewCard = ({ author, text, position }) => (
  <section style={{ marginBottom: rhythm(1.5) }}>
    <p style={{ marginBottom: 0 }}>
      <QuoteIcon
        width="40"
        style={{
          fill: 'var(--main-color)',
          marginRight: 10,
          cursor: 'pointer',
        }}
      />
      {text}
    </p>
    <Flex justifyContent="flex-end" alignItems="center">
      <div style={{ color: 'var(--main-color)' }}>
        — {author}, {position}
      </div>
    </Flex>
  </section>
)

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { testimonials } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Testimonials" />
      <Bio />
      <Flex justifyContent="space-between" alignItems="baseline">
        <h1 style={{ margin: `${rhythm(1 / 3)}`, marginLeft: 0 }}>
          Testimonials
        </h1>
      </Flex>
      <main style={{ marginTop: rhythm(1) }}>
        {testimonials.map(({ author, text, position }) => (
          <ReviewCard
            key={author}
            author={author}
            text={text}
            position={position}
          />
        ))}
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        testimonials {
          author
          text
          position
        }
      }
    }
  }
`
