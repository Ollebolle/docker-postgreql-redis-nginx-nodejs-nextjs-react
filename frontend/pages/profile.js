import React, { Component } from 'react'
import Protected from '../utils/protected'
import AuthService from '../utils/AuthService'
import Navbar from '../layout/navbar/navbar'
import Page from '../layout/page'
import Section from '../layout/section'
import FullWidthImage from '../layout/FullWidthImage'
import Footer from '../components/footer'
import {
  Title,
  SubTitle,
  Paragraph
} from '../text/text'
import { create } from 'domain';

const auth = new AuthService()

class Profile extends Component {

  state = {
    ...auth.getProfile()
  }

  componentDidMount = () => {
    this.updateProfileData()
  }

  updateProfileData = () => {
    console.log('Getting profile data')
    auth.updateProfile()
      .then(data => {
        console.log('Updated profile data', data)
        this.setState({ ...data })
      })
  }

  render() {
    const {
      createdAt,
      email,
    } = this.state

    console.log(this.state)

    return (
      <Page>
        <Navbar />
        <FullWidthImage
          image="/public/sthlm01.jpg"
          height="70vh"
          parallax={ 70 }
          dim={ 0.4 }
        >
          <Title bright>Profile</Title>
          <SubTitle bright marginTop>{ email }</SubTitle>
          <Paragraph bright marginTop>{ `Member since: ${ (new Date(createdAt)).toString() }` }</Paragraph>
        </FullWidthImage>
        <Footer />
      </Page>
    )
  }
}

export default Protected(Profile)
