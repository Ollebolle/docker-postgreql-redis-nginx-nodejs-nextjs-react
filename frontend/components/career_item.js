import React, { Component } from 'react'
import { LinkButton } from './button/button'
import { Columns, Column } from '../layouts/columns'
import {
  CardTitle,
  Italic,
  Paragraph
} from '../text/text'

import './career_item.sass'

export default ({
  buttonText,
  title,
  date,
  excerpt,
  id
}) => (
  <div className="career-item">
    <div className="career-item-content">
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
  </div>
)
