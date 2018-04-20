import React, { Component } from 'react'
import Link from 'next/link'
import { Motion, StaggeredMotion, spring } from 'react-motion'

import './menu_mobile.sass'

export default class MenuMobile extends Component {
  render() {
    const { links, open, onClick } = this.props
    const defaultStyles = links.map(() => ({ translateY: 0, opacity: 0 }))

    return (
      <div className={ 'nav-bar-menu-mobile' } style={{ pointerEvents: open ? 'auto' : 'none' }}>
        <Motion style={
            {
              radius: spring(open ? 0 : 50),
              size: spring(open ? 100 : 0)
            }
          }
        >
          {({
            radius,
            size
          }) =>
            <div
              className="nav-bar-menu-mobile-bg"
              style={{
                borderRadius: `${radius}%)`,
                height: `${size}vh`
              }}
            ></div>
        }
        </Motion>
        <StaggeredMotion
          defaultStyles={ defaultStyles }
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
              ? {
                translateY: spring(open ? 0 : -25, {stiffness: 150, damping: 20}),
                opacity: spring(open ? 1 : 0)
              }
              : {
                translateY: spring(prevInterpolatedStyles[i - 1].translateY, {stiffness: 150, damping: 20}),
                opacity: spring(prevInterpolatedStyles[i - 1].opacity)
              }
          })}>
          {interpolatingStyles =>
            <div className="nav-bar-menu-mobile-links">
              {
                interpolatingStyles.map((style, i) =>
                <Link
                  className="nav-bar-menu-mobile-link"
                  href={ links[i].path }
                  onClick={ onClick }
                  style={{
                    WebkitTransform: `translateY(${style.translateY * (i + 2)}px)`,
                    transform: `translateY(${style.translateY * (i + 2)}px)`,
                    opacity: style.opacity
                  }}
                >
                  { links[i].title }
                </Link>
                )
              }
            </div>
          }
        </StaggeredMotion>
      </div>
    )
  }
}
