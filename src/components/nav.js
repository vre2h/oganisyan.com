import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

const urls = [
  {
    link: '/',
    text: 'Blog',
  },
  {
    link: '/',
    text: 'About',
  },
  {
    link: '/',
    text: 'Portfolio',
  },
  {
    link: '/',
    text: 'Testimonials',
  },
]

export default () => {
  const linkStyles = {
    boxShadow: 'none',
    textDecoration: 'none',
    margin: '7px',
    color: '#0060a0',
    borderBottom: '1px solid rgba(0,96,160,0.15)',
  }

  return (
    <nav
      style={{
        display: 'flex',
        marginBottom: rhythm(1),
        fontSize: rhythm(0.5),
      }}
    >
      {urls.map(({ link, text }) => (
        <Link style={linkStyles} to={link}>
          {text}
        </Link>
      ))}
    </nav>
  )
}
