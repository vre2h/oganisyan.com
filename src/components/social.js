import React from 'react'
import { css } from 'astroturf'

import { rhythm } from '../utils/typography'

const styles = css`
  .link {
    margin: 0;

    text-decoration: none;
    color: inherit;
    box-shadow: none;

    transition: transform 300ms ease;
  }

  .link:hover {
    transform: translateY(-5px);
  }
`

export default () => (
  <div
    style={{
      display: 'flex',
      textAlign: 'center',
      fontSize: `${rhythm(1.3)}`,
      color: '#555',
      overflow: 'auto',
    }}
  >
    <a id="twitter" className={styles.link} href="https://twitter.com/vre2h">
      <i className="fa fa-twitter" />
    </a>
    <a id="github" className={styles.link} href="https://github.com/vre2h">
      <i className="fa fa-github" />
    </a>{' '}
    <a
      id="stack"
      className={styles.link}
      href="https://stackoverflow.com/users/10396289/vre2h"
    >
      <i className="fa fa-stack-overflow" />
    </a>{' '}
    <a
      id="linkedin"
      className={styles.link}
      href="https://linkedin.com/in/vre2h"
    >
      <i className="fa fa-linkedin" />
    </a>{' '}
    <a
      id="mail"
      className={styles.link}
      href="mailto:hovanisyan.vrezh@gmail.com"
    >
      <i className="fa fa-envelope" />
    </a>{' '}
    <a id="fb" className={styles.link} href="https://facebook.com/vre2h">
      <i className="fa fa-facebook" />
    </a>
    <a id="telegram" className={styles.link} href="https://t.me/vre2h">
      <i className="fa fa-telegram" />
    </a>
  </div>
)
