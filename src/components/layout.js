import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'
import littlePrince from '../../content/assets/little-prince.png'

import Nav from './nav'
import { mainIcon, PlanetEarth } from './icons'
import Flex from './Flex'

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
        marginTop: rhythm(1 / 3),
      }}
    >
      <h3
        style={{
          position: 'relative',
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          minWidth: '50%',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            position: 'absolute',
            left: '-15px',
            top: '-25px',
            cursor: 'pointer',
            zIndex: '-1',
          }}
        >
          <img
            alt=""
            src={littlePrince}
            style={{
              position: 'absolute',
              width: '69px',
              left: '5px',
              zIndex: '-1',
              top: '-19px',
              cursor: 'pointer',
            }}
          />

          {mainIcon}
        </div>
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
            marginLeft: 15,
            borderBottom: 'none',
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
      className="footer"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <PlanetEarth
          width="50"
          style={{ cursor: 'pointer', fontSize: rhythm(0.6) }}
          className="planet"
        />
        <div style={{ marginLeft: 5 }}>
          Made on planet earth. <br />
          (Dimension C137)
        </div>
      </Flex>
      <div
        style={{ marginTop: rhythm(1), fontSize: rhythm(0.4), color: '#ccc' }}
      >
        Icons made by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >
          Freepik
        </a>{' '}
        from{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </div>
    </footer>
  </div>
)

export default Layout
