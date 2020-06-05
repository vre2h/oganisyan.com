import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

import { Twitter, Linkedin, FB, VK } from './icons'

export default ({ pageUrl, title, style }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <div style={style}>
      <nav
        style={{
          display: 'flex',
          textAlign: 'center',
          fontSize: `${rhythm(1.3)}`,
          color: '#555',
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
        className="social"
      >
        <a
          href={`http://www.facebook.com/sharer/sharer.php?u=${siteUrl}${pageUrl}`}
          title="share to FB"
          className="link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FB width="25" classNameName="icon" />
        </a>
        <a
          href={`https://vk.com/share.php?url=${siteUrl}${pageUrl}`}
          title="share to VK"
          className="link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <VK width="25" classNameName="icon" />
        </a>
        <a
          href={`https://twitter.com/share?url=${siteUrl}${pageUrl}&amp;text=${title} on`}
          title="share to Twitter"
          className="link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter width="25" classNameName="icon" />
        </a>
        <a
          href={`https://www.linkedin.com/cws/share?url=${siteUrl}${pageUrl}`}
          title="share to LinkedIn"
          className="link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin width="25" classNameName="icon" />
        </a>
      </nav>
    </div>
  )
}
