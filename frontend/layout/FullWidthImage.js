import React, { Component } from 'react'
import './FullWidthImage.sass'

export default class FullWidthImage extends Component {
  state = {
    scrollPosition: 0,
    windowHeight: 0
  }

  initScrollHandler = () => {
    // window.addEventListener('scroll', this.scrollHandler)
      const INTERVAL = 10
      this.intervalID = setInterval(this.handleInterval, INTERVAL)
  }

  disableScrollHandler = () => {
    console.log('Disabling scroll handler')
    // window.removeEventListener('scroll', this.scrollHandler)
    clearInterval(this.intervalID)
    cancelAnimationFrame(this.requestID)
    this.requestID = null
    this.intervalID = null
  }

  scrollHandler = (event) => {
    let scrollPosition = window.scrollY
    // if (scrollPosition > 300) {
    //   return
    // }
    this.setState({ scrollPosition })
  }

  initWindowHeightHandler = () => {
    this.windowHeightHandler()
    window.addEventListener('resize', this.windowHeightHandler)
  }

  disableWindowHeightHandler = () => {
    window.removeEventListener('resize', this.windowHeightHandler)
  }

  windowHeightHandler = () => {
    this.setState({
      windowHeight: window.innerHeight
    })
  }

  componentDidMount = () => {
    if (this.props.parallax) {
      this.initScrollHandler()
      this.initWindowHeightHandler()
    }
  }

  componentWillUnmount = () => {
    this.disableScrollHandler()
    this.disableWindowHeightHandler()
  }

  getWindowScrollTop = () => {
    // Get scroll position, with IE fallback
    return window.pageYOffset || document.documentElement.scrollTop
  }

  handleInterval = () => {
    // Interval is only used to throttle animation frame
    cancelAnimationFrame(this.requestID)
    this.requestID = requestAnimationFrame(this.handleRequestAnimationFrame)
  }

  handleRequestAnimationFrame = () => {
    const { scrollPosition, windowHeight } = this.state
    const newScrollPosition = this.getWindowScrollTop()

    // Update the state only when scroll position is changed
    if (newScrollPosition !== scrollPosition) {
      const { parallax } = this.props
      const transform = `translateY(${ scrollPosition / 3  }px)`
      const opacity = 1 - newScrollPosition / (windowHeight * (parallax / 100))
      if (opacity < 0) {
        return
      }
      this.setState({
        scrollPosition: newScrollPosition,
        opacity,
        transform
      })
    }
  }

  render() {
    const {
      opacity,
      transform,
      scrollPosition,
      windowHeight
    } = this.state

    const {
      image,
      height,
      style,
      dim,
      children,
      parallax
    } = this.props

    let header_parallax = {}

    if (parallax) {
      header_parallax = {
        transform,
        opacity
        // transform: `translateX(${ scrollPosition / 3  }px)`,
      }
    }

    return (
      <div
        className="full-width-image-container"
        style={{
          backgroundImage: `url(${ image })`,
          height,
          ...style
        }}
      >
        { dim && <div className="dimmer" style={{ opacity: dim }}></div> }

        { children &&
          <div
            style={
              header_parallax
            }
          >{ children }</div>
        }
      </div>
    )
  }
}
