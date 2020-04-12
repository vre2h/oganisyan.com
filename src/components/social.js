import React from 'react'

import { rhythm } from '../utils/typography'

export default () => (
  <div
    style={{
      display: 'flex',
      textAlign: 'center',
      fontSize: `${rhythm(1.3)}`,
      color: '#555',
      overflow: 'auto',
    }}
    className="social"
  >
    <a id="twitter" className="link" href="https://twitter.com/vre2h">
      <i className="fa fa-twitter" />
    </a>
    <a id="github" className="link" href="https://github.com/vre2h">
      <i className="fa fa-github" />
    </a>{' '}
    <a
      id="stack"
      className="link"
      href="https://stackoverflow.com/users/10396289/vre2h"
    >
      <i className="fa fa-stack-overflow" />
    </a>{' '}
    <a id="linkedin" className="link" href="https://linkedin.com/in/vre2h">
      <i className="fa fa-linkedin" />
    </a>{' '}
    <a id="mail" className="link" href="mailto:hovanisyan.vrezh@gmail.com">
      <i className="fa fa-envelope" />
    </a>{' '}
    <a id="fb" className="link" href="https://facebook.com/vre2h">
      <i className="fa fa-facebook" />
    </a>
    <a id="telegram" className="link" href="https://t.me/vre2h">
      <i className="fa fa-telegram" />
    </a>
  </div>
)
