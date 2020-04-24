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

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  /* eslint-disable jsx-a11y/click-events-have-key-events */
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
          width="70"
          height="70"
          style={{
            width: rhythm(2.5),
            height: rhythm(2.5),
            marginRight: !image ? 20 : 0,
            marginLeft: image ? 20 : 0,
          }}
          className="bio-image"
        />
        <div>
          <p style={{ marginBottom: 0, fontStyle: 'italic' }}>
            2% human <span style={{ color: 'var(--main-color)' }}>•</span> 8%
            being <span style={{ color: 'var(--main-color)' }}>•</span> 90%
            rebel
          </p>
          <p style={{ marginBottom: 0 }}>{author.summary}</p>
        </div>
      </div>
      <div className="social-wrapper">
        <Social />
      </div>
    </div>
  )
}

export default Bio
