import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import useWindowSize from '../hooks/useWindowSize'
import avatar from '../../content/assets/profile-pic.jpg'
import { rhythm } from '../utils/typography'
import Social from './social'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const { width } = useWindowSize()

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        marginBottom: rhythm(1),
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={avatar}
          alt={author.name}
          style={{
            width: rhythm(2.5),
            height: rhythm(2.5),
            borderRadius: '50%',
            margin: 0,
            marginRight: '20px',
          }}
        />
        <p style={{ marginBottom: 0 }}>{author.summary}</p>
      </div>
      <div style={Number(width) > 450 ? { alignSelf: 'flex-end' } : {}}>
        <Social />
      </div>
    </div>
  )
}

export default Bio
