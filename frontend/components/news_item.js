import React, { Component } from 'react'
import Plx from 'react-plx'
import { LinkButton } from './button/button'
import { Columns, Column } from '../layouts/columns'
import {
  CardTitle,
  Italic,
  Paragraph
} from '../text/text'

import './news_item.sass'

export default class NewsItem extends Component {
  render() {
    const {
      buttonText,
      image,
      title,
      date,
      excerpt,
      id
    } = this.props

    return (
      <Plx
        className='news-item'
        parallaxData={[
          {
            start: 'self',
            duration: 1000,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
              }
            ]
          }
        ]} // your parallax effects, see beneath
      >

        <div className="news-image-container">
          <div
            className="news-image"
            style={{
              backgroundImage: `url(${ image })`
            }}
          >
          </div>
        </div>
        <div className="news-item-content">
          <CardTitle center>
            { title }
          </CardTitle>
          <Italic center marginTop>
            <small>{ date }</small>
          </Italic>
          <Paragraph center marginTop>
            { excerpt }
          </Paragraph>
          <LinkButton
            to={ id }
            title={ buttonText ? buttonText : 'Read more' }
            center
            marginTop
          />
        </div>

      </Plx>
    )
  }
}
        // <img src={ image } alt={ title } />
        // <div
        //   className="news-image"
        //   style={{
        //     backgroundImage: `url(${ image })`
        //   }}
        // >
        // </div>
            // title="Read more →"