import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from './navbar/navbar'
import PageBorder from '../components/page_border'

import '../styles/all.sass'
import '../styles/text.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Wesmans" />
    <Navbar />
    <PageBorder />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
