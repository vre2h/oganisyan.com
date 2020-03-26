import React from 'react'
import { css } from 'astroturf'

import { Link } from 'gatsby'

const linkColor = '#0060a0'
const hoverColor = '#b03000'

const styles = css`
  .link {
    margin: 7px;

    color: ${linkColor};

    box-shadow: none;
    border-bottom: 1px solid ${linkColor};

    transition: all 0.3s;
  }

  .link:first-child {
    margin-left: 0;
  }

  .link:hover {
    color: ${hoverColor};
    border-bottom-color: ${hoverColor};
  }
`

export default ({ href, title, absolute }) => {
  if (absolute) {
    return (
      <a className={styles.link} href={href}>
        {title}
      </a>
    )
  }

  return (
    <Link className={styles.link} to={href}>
      {title}
    </Link>
  )
}
