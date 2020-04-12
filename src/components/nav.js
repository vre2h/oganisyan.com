import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

const urls = [
  {
    url: '/',
    title: 'Blog',
  },
  {
    url: '/about/',
    title: 'About (cv)',
  },
  {
    url: '/testimonials/',
    title: 'Testimonials',
  },
]

export default () => (
  <nav
    style={{
      display: 'flex',
      fontSize: rhythm(0.55),
    }}
  >
    {urls.map(({ url, title }) => (
      <Link style={{ margin: 7 }} to={url} key={title}>
        {title}
      </Link>
    ))}
  </nav>
)
