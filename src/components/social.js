import React from 'react'

import { rhythm } from '../utils/typography'
import {
  Twitter,
  Github,
  Linkedin,
  FB,
  Telegram,
  Gmail,
  StackOverflow,
} from './icons'

export default () => (
  <div
    style={{
      display: 'flex',
      textAlign: 'center',
      fontSize: `${rhythm(1.3)}`,
      color: '#555',
      overflowX: 'auto',
    }}
    className="social"
  >
    <a
      target="_blank"
      rel="noopener noreferrer"
      id="telegram"
      className="link"
      href="https://t.me/oganisyancom"
    >
      <Telegram width="25" className="icon" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      id="twitter"
      className="link"
      href="https://twitter.com/vre2h"
    >
      <Twitter width="25" className="icon" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      id="github"
      className="link"
      href="https://github.com/vre2h"
    >
      <Github width="25" className="icon" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      id="stack"
      className="link"
      href="https://stackoverflow.com/users/10396289/vre2h"
    >
      <StackOverflow width="25" className="icon" />
    </a>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      id="linkedin"
      className="link"
      href="https://linkedin.com/in/vre2h"
    >
      <Linkedin width="25" className="icon" />
    </a>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      id="mail"
      className="link"
      href="mailto:hovanisyan.vrezh@gmail.com"
    >
      <Gmail width="25" className="icon" />
    </a>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      id="fb"
      className="link"
      href="https://facebook.com/vre2h"
    >
      <FB width="25" className="icon" />
    </a>
  </div>
)
