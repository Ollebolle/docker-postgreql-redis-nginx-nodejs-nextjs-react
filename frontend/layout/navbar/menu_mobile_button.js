import React from 'react'
import { Motion, spring } from 'react-motion'

import './menu_mobile_button.sass'

export default ({ open, onClick }) => (
  <Motion style={
      {
        rotation: spring(open ? 45 : 0, {stiffness: 150, damping: 10}),
        opacity: spring(open ? 0 : 1),
        translateX: spring(open ? 100 : 0, {stiffness: 150, damping: 10})
      }
    }
  >
    {({
      rotation,
      opacity,
      translateX
    }) =>
      // children is a callback which should accept the current value of
      // `style`
      <div
        className={ 'navbar-menu-button' + (open ? ' active' : ' inactive') }
        onClick={ onClick }
      >
        <span style={{
          WebkitTransform: `rotate(${rotation}deg)`,
          transform: `rotate(${rotation}deg)`
        }} />
        <span style={{
          WebkitTransform: `translateX(${translateX}px)`,
          transform: `translateX(${translateX}px)`,
          opacity: opacity
        }} />
        <span style={{
          WebkitTransform: `rotate(-${rotation}deg)`,
          transform: `rotate(-${rotation}deg)`
        }} />
      </div>
    }
  </Motion>
)
