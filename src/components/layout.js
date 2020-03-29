import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

import Nav from './nav'
import { mainIcon } from './icons'

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
        flexWrap: 'wrap',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: rhythm(1.5),
      }}
    >
      <h3
        style={{
          position: 'relative',
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          minWidth: '50%',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            position: 'absolute',
            left: '-15px',
            top: '-25px',
            zIndex: '-1',
          }}
        >
          {mainIcon}
        </div>
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
            marginLeft: 15,
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
        marginTop: rhythm(3),
        color: '#a0a0a0',
        fontSize: rhythm(0.4),
      }}
    >
      Made on planet earth. <br />
      (Dimension C137)
    </footer>
  </div>
)

export default Layout
