import React from 'react'
import { Title } from '../text/text'

import './section.sass'

const Section = ({ children, title, diffBg, className }) => (
  <section className={
    'page-section' +
    (diffBg ? ' diff-background' : '')
  }>
    <div className="page-section-content">
      { title && <Title center>{ title }</Title> }
      { title && <hr /> }
      { children }
    </div>
  </section>
)

export default Section
