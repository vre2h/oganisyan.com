import React from 'react'
import { Link } from 'gatsby'

import './styles/navlink.css'

export default ({ href, title, absolute, style }) => {
  if (absolute) {
    return (
      <a className="link" href={href} style={style}>
        {title}
      </a>
    )
  }

  return (
    <Link
      activeClassName="active-link"
      className="link"
      to={href}
      style={style}
    >
      {title}
    </Link>
  )
}
