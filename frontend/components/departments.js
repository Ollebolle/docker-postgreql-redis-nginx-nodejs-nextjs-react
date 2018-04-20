import React from 'react'
import Section from '../layouts/section'
import { Columns, Column } from '../layouts/columns'
import { LinkButton } from './button/button'
import {
  CardTitle,
  Title,
  Italic,
  Paragraph,
  SectionTitle,
  SubTitle
} from '../text/text'

import './departments.sass'

export default ({
  buttonText,
  title,
  services
}) => (
  <Section title={ title } diffBg>
    <Columns multiLine>
      {
        services && services.map(entry => (
          <Column key={ entry.id }>
            <div className="department">
              <div className="department-image-container">
                <div
                  className="department-image"
                  style={{
                    backgroundImage: `url(${ entry.image })`
                  }}
                >
                </div>
              </div>
              <div className="department-info">
                <CardTitle center marginBottom>{ entry.title }</CardTitle>
                <Paragraph center marginBottom>{ entry.description }</Paragraph>
                <LinkButton
                  to={ entry.id }
                  title={ buttonText ? buttonText : 'Read more' }
                  center
                  marginBottom
                />
              </div>
            </div>
          </Column>
        ))
      }
    </Columns>
  </Section>
)

              // <div
              //   className="news-image"
              //   style={{
              //     backgroundImage: `url(${ entry.image })`
              //   }}
              // >
              // </div>
              // <img src={ entry.image } />