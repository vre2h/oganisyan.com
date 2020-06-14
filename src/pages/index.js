import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import Bio from '../components/bio'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(0.2),
                }}
              >
                <Link
                  style={{ boxShadow: 'none' }}
                  to={`/blog${node.fields.slug}`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </h3>
              <small style={{ color: '#a0a0a0' }}>
                {node.frontmatter.date}{' '}
                <span
                  style={{ color: 'var(--main-color)', fontSize: rhythm(0.5) }}
                >
                  •
                </span>{' '}
                {node.timeToRead} min
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
