import React from 'react'

import { changeDivider } from '../utils/date'
import { rhythm } from '../utils/typography'

export default ({ date }) => (
  <small style={{ color: '#a0a0a0', fontSize: rhythm(0.45) }}>
    {changeDivider(date)}
  </small>
)
