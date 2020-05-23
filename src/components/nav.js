import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

const urls = [
  {
    url: '/about/',
    title: 'About (cv)',
  },
  {
    url: '/testimonials/',
    title: 'Testimonials',
  },
  {
    url: '/bookshelf',
    title: 'Bookshelf',
  },
  {
    url: 'filmAndSeries',
    title: 'Movies and TV Shows',
  },
]

export default () => (
  <nav
    style={{
      display: 'flex',
      fontSize: rhythm(0.55),
      flexWrap: 'wrap',
    }}
  >
    <Link
      getProps={({ location: { pathname } }) => {
        if (pathname === '/' || pathname.includes('/blog')) {
          return { className: 'active-link' }
        }

        return {}
      }}
      style={{ margin: 7, marginLeft: 0 }}
      to="/"
      className="nav-link"
    >
      Blog
    </Link>
    {urls.map(({ url, title }) => (
      <Link
        activeClassName="active-link"
        style={{ margin: 7 }}
        to={url}
        key={title}
        partiallyActive
        className="nav-link"
      >
        {title}
      </Link>
    ))}
  </nav>
)
