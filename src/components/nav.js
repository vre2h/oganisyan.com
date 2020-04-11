import React from 'react'

import { rhythm } from '../utils/typography'
import NavLink from './navlink'

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
      <NavLink href={url} title={title} key={title} />
    ))}
  </nav>
)
