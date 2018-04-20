import React, {Component} from 'react'
import Router from 'next/router'
import AuthService from './AuthService'

export default function Protected(AuthComponent) {
    const Auth = new AuthService()
    return class Authenticated extends Component {
      state = {
        is_loading: true
      }

      componentDidMount = () => {
        if (!Auth.loggedIn()) {
          Router.push('/')
        }
        this.setState({ is_loading: false })
      }

      render = () => {
        if (this.state.is_loading) {
          return <div>LOADING....</div>
        } else {
          return <AuthComponent {...this.props}  auth={Auth} />
        }
      }
    }
}
