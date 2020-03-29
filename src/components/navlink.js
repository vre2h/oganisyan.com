import React from 'react'
import { css } from 'astroturf'

import { Link } from 'gatsby'

const linkColor = '#0060a0'
const hoverColor = '#f9d679'
const borderColor = 'rgba(0, 96, 160, 0.2)'
const hoverBorderColor = 'rgba(249, 214,121, 0.5)'

const styles = css`
  .link {
    margin: 7px;

    color: ${linkColor};

    box-shadow: none;
    border-bottom: 1px solid ${borderColor};

    transition: all 0.2s;
  }

  .link:first-child {
    margin-left: 0;
  }

  .link:hover {
    color: ${hoverColor};
    border-bottom-color: ${hoverBorderColor};
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
