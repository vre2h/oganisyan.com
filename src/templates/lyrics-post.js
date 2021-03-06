import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import princeJump from '../../content/assets/prince-jump.png'
import ShareToSocial from '../components/shareToSocial'

const matchHtmlTags = /<(\/?)\w+>/gi

const LyricsPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  useEffect(() => {
    const image = document.querySelector('.gatsby-resp-image-wrapper')
    if (image) {
      image.style['max-width'] = 'initial'
    }
  }, [])

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      identifier: location.pathname,
      title: post.frontmatter.title,
    },
  }

  const titleWithoutTags = post.frontmatter.title.replace(matchHtmlTags, '')
  const desc = post.frontmatter.description || post.excerpt
  const descWithoutTags = desc.replace(matchHtmlTags, '')

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={titleWithoutTags} description={descWithoutTags} />

      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
            dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
          />
          <p
            style={{
              display: 'block',
              marginBottom: 0,
            }}
          >
            <small style={{ color: '#a0a0a0' }}>
              {post.frontmatter.author}{' '}
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
              <Link
                to={`lyrics/${previous.fields.slug}`}
                rel="prev"
                dangerouslySetInnerHTML={{
                  __html: `← ${previous.frontmatter.title}`,
                }}
              />
            )}
          </li>
          <li>
            {next && (
              <Link
                to={`lyrics/${next.fields.slug}`}
                rel="next"
                dangerouslySetInnerHTML={{
                  __html: `${next.frontmatter.title} →`,
                }}
              />
            )}
          </li>
        </ul>
      </nav>
      {/* eslint-disable-next-line */}
      <DiscussionEmbed {...disqusConfig} />
      <a href="#top">
        <img src={princeJump} alt="^" className="jump-to-top" />
      </a>
    </Layout>
  )
}

export default LyricsPostTemplate

export const pageQuery = graphql`
  query LyricsPostBySlug($slug: String!) {
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
        date(formatString: "MMMM DD, YYYY")
        description
        author
      }
    }
  }
`
