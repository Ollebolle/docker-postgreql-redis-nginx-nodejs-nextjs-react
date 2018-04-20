import React from 'react'

import './page.sass'

export default ({ children, center }) => (
  <div
    className={
      'page-content' +
      (center ? ' page-content-center' : '')
    }
  >
    { children }
  </div>
)
