import React, { Component } from 'react'
import Router from 'next/router'
import Navbar from '../layout/navbar/navbar'
import Page from '../layout/page'
import Section from '../layout/section'
import Input from '../components/input'
import { Button } from '../components/button/button'
import AuthService from '../utils/AuthService'

const auth = new AuthService()

export default class Login extends Component {

  state = {
    email: '',
    password: ''
  }


  componentDidMount () {
    console.log('logged in', auth.loggedIn())
    // if (auth.loggedIn()) {
    //   Router.push('/')
    // }
  }


  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = () => {
    auth.login(this.state.email, this.state.password)
      .then(() => {
        console.warn('bananas')
        Router.push('/profile')
      })
  }

  render() {
    const {
      email,
      password
    } = this.state

    return (
      <Page>
        <Navbar />
        <Section title="Login">
          <Input type="email" value={ email } onChange={ this.onInputChange } name="email" />
          <Input type="password" value={ password } onChange={ this.onInputChange } name="password" />
          <Button
            title="Login"
            onClick={ this.login }
          />
        </Section>
      </Page>
    )
  }
}
