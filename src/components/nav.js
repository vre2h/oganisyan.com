import React from 'react'

import { rhythm } from '../utils/typography'
import NavLink from './navlink'

const urls = [
  {
    url: '/',
    title: 'Blog',
  },
  {
    url: '/',
    title: 'About',
  },
  {
    url: '/',
    title: 'Portfolio',
  },
  {
    url: '/',
    title: 'Testimonials',
  },
]

export default () => (
  <nav
    style={{
      display: 'flex',
      marginBottom: rhythm(1),
      fontSize: rhythm(0.5),
    }}
  >
    {urls.map(({ url, title }) => (
      <NavLink href={url} title={title} />
    ))}
  </nav>
)
