import React from 'react'

export default ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  flexWrap = 'wrap',
  flexDirection = 'row',
} = {}) => (
  <div
    style={{
      display: 'flex',
      justifyContent,
      alignItems,
      flexWrap,
      flexDirection,
    }}
  >
    {children}
  </div>
)
