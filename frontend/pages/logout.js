import React, { Component } from 'react'
import Router from 'next/router'
import Navbar from '../layout/navbar/navbar'
import Page from '../layout/page'
import Section from '../layout/section'
import { Title } from '../text/text'
import AuthService from '../utils/AuthService'

const auth = new AuthService()

export default class Logout extends Component {

  componentDidMount () {
    console.log('logged in', auth.loggedIn())
    this.logout()
  }

  logout = () => {
    auth.logout()
    console.warn('Logged out')
    Router.push('/')
  }

  render() {
    return (
      <Page center>
        <Title>Logging out...</Title>
      </Page>
    )
  }
}
