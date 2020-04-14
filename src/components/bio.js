import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import avatar from '../../content/assets/profile-pic.jpg'
import avatarBlue from '../../content/assets/profile-pic-blue.jpg'
import { rhythm } from '../utils/typography'
import Social from './social'

const Bio = () => {
  const [image, toggleImage] = React.useState(false)
  const data = useStaticQuery(graphql`
    query BioQuery {
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

  /* eslint-disable */
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
          onClick={() => toggleImage((i) => !i)}
          src={image ? avatarBlue : avatar}
          alt={author.name}
          style={{
            width: rhythm(2.5),
            height: rhythm(2.5),
            borderRadius: '50%',
            margin: 0,
            marginRight: '20px',
            padding: 2,
            border: '2px solid var(--main-color)',
            cursor: 'pointer',
            outline: 'none',
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
