import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

import '../styles/fonts.css'

Wordpress2016.overrideThemeStyles = ({ rhythm }) => ({
  a: {
    color: 'var(--link-color)',
    borderBottom: '1px solid var(--border-color)',
    boxShadow: 'none',
    transition: 'all 0.2s',
  },
  'a:hover': {
    color: 'var(--hover-color)',
    borderBottomColor: 'var(--hover-border-color)',
  },
  '.active-link': {
    color: 'var(--hover-color)',
    borderBottomColor: 'var(--hover-border-color)',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'p code': {
    fontSize: rhythm(0.55),
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

const { rhythm, scale } = typography

export { typography as default, rhythm, scale }
