/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import Date from '../components/date'
import useScrollToTop from '../hooks/useScrollToTop'
import princeJump from '../../content/assets/prince-jump.png'
import ShareToSocial from '../components/shareToSocial'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const [showScrollToTop, scrollToTop] = useScrollToTop()

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: location.pathname,
      title: post.frontmatter.title,
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              display: 'block',
              marginBottom: 0,
            }}
          >
            <Date date={post.frontmatter.date} />
          </p>
          <ShareToSocial
            title={post.frontmatter.title}
            pageUrl={location.pathname}
            style={{ marginBottom: 20 }}
          />
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      {/* eslint-disable-next-line */}
      <DiscussionEmbed {...disqusConfig} />
      <img
        onClick={scrollToTop}
        src={princeJump}
        alt="^"
        style={{
          position: 'fixed',
          right: '30px',
          bottom: 0,
          display: showScrollToTop ? 'block' : 'none',
          width: '50px',
          cursor: 'pointer',
        }}
      />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`