import React from 'react'
import Link from 'gatsby-link'
import FullWidthImage from '../layouts/FullWidthImage'
import Section from '../layouts/section'
import { LinkButton } from './button/button'
import NewsItem from '../components/news_item'
import { Columns, Column } from '../layouts/columns'

import './LatestBlogPosts.sass'

export default ({ data, title, buttonText }) => (
  <Section title={ title } diffBg>
    {
      data && data.map(post => (
        <NewsItem
          key={ post.id }
          image={ post.image }
          title={ post.title }
          date={ post.date }
          excerpt={ post.excerpt }
          id={ post.id }
          buttonText={ buttonText }
        />
      ))
    }
  </Section>
)
