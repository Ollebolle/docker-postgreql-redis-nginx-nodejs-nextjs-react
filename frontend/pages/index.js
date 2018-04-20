import React, { Component } from 'react'
import Navbar from '../layout/navbar/navbar'
import Page from '../layout/page'
import Section from '../layout/section'
import FullWidthImage from '../layout/FullWidthImage'
// import LastestBlogPosts from '../components/LastestBlogPosts'
// import Features from '../components/Features'
// import Departments from '../components/departments'
import Footer from '../components/footer'
import {
  Title
} from '../text/text'

// import logo from '../img/logo_hero_white.svg'

import '../styles/styles.sass'

export default class Index extends Component {
  render() {


    return (
      <Page>
        <Navbar />
        <FullWidthImage
          image="/public/cityscape.jpg"
          height="70vh"
          parallax={ 70 }
          dim={ 0.4 }
        >
          <Title bright>Welcome To Lala!</Title>
        </FullWidthImage>
        <Footer />
      </Page>
    )
  }
}

        // <Departments
        //   services={ services }
        //   title={ servicesData.title }
        //   buttonText={ servicesData.buttonText }
        // />
        // <LastestBlogPosts
        //   data={ blog_posts }
        //   title={ newsData.title }
        //   buttonText={ newsData.buttonText }
        // />