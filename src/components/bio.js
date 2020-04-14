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
          flexDirection: image ? 'row-reverse' : 'row',
        }}
      >
        <img
          onClick={() => toggleImage((i) => !i)}
          src={image ? avatarBlue : avatar}
          alt={author.name}
          style={{
            width: rhythm(2.5),
            height: rhythm(2.5),
            marginRight: !image ? 20 : 0,
            marginLeft: image ? 20 : 0,
          }}
          className="bio-image"
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
