import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

import Nav from './nav'

const Layout = ({ title, children }) => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}
  >
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexWrap: 'wrap',
      }}
    >
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          marginBottom: rhythm(0.3),
          marginRight: rhythm(0.5),
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
      <Nav />
    </header>
    <main>{children}</main>
    <footer
      style={{
        textAlign: 'center',
        marginTop: rhythm(2.5),
        color: '#a0a0a0',
        fontSize: rhythm(0.5),
      }}
    >
      Made on planet earth. <br />
      (Dimension C137)
    </footer>
  </div>
)

export default Layout
