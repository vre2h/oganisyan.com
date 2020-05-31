/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import { get } from 'lodash'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import useScrollToTop from '../hooks/useScrollToTop'
import princeJump from '../../content/assets/prince-jump.png'
import ShareToSocial from '../components/shareToSocial'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const [showScrollToTop, scrollToTop] = useScrollToTop()
  const featuredImgFluid = get(
    post,
    'frontmatter.featuredImage.childImageSharp.fluid',
  )

  useEffect(() => {
    document.querySelector('.gatsby-resp-image-wrapper').style['max-width'] =
      'initial'
  }, [])

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
        postImage={featuredImgFluid}
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
            <small style={{ color: '#a0a0a0' }}>
              {post.frontmatter.date}{' '}
              <span
                style={{ color: 'var(--main-color)', fontSize: rhythm(0.5) }}
              >
                •
              </span>{' '}
              {post.timeToRead} min
            </small>
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
            marginTop: rhythm(2),
            marginBottom: rhythm(2),
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
              <Link to={`blog/${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog/${next.fields.slug}`} rel="next">
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
      timeToRead
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
