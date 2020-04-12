import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        marginBottom: rhythm(1),
      }}
      className="bio"
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
          className="image"
        />
        <p style={{ marginBottom: 0 }}>{author.summary}</p>
      </div>
      <div className="social-wrapper">
        <Social />
      </div>
    </div>
  )
}

export default Bio
