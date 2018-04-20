import React, { Component } from 'react'
import Link from 'next/link'
import MenuMobile from './menu_mobile'
import MenuMobileButton from './menu_mobile_button'
import AuthService from '../../utils/AuthService'

const auth = new AuthService()

// import { LinkButton } from '../../components/button/button'

// import logo from '../../img/logo.svg'

const links = [
  {
    title: 'Home',
    path: '/'
  },
  // {
  //   title: 'About us',
  //   path: '/about'
  // },
  {
    title: 'Login',
    path: '/login'
  },
  {
    title: 'Signup',
    path: '/signup'
  }
]

const links_loggedin = [
  {
    title: 'Home',
    path: '/'
  },
  // {
  //   title: 'About us',
  //   path: '/about'
  // },
  {
    title: 'Profile',
    path: '/profile'
  },
  {
    title: 'Logout',
    path: '/logout'
  }
]

const mobile_break_point = 680

export default class Navbar extends Component {
  state = {
    menu_open: false,
    is_mobile: false,
    is_mounted: false
  }

  componentDidMount = () => {
    // console.log('bananananana')
    this.checkDeviceWidth()
    window.addEventListener('resize', this.checkDeviceWidth)
    // console.error(auth.loggedIn())
    this.setState({ is_mounted: true })
    // if (auth.loggedIn()) {
    //   console.warn('is logged in')
    //   this.setState({ is_logged_in: true })
    // }
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.checkDeviceWidth)
  }

  checkDeviceWidth = () => {
    const switched_to_mobile = window.innerWidth < mobile_break_point && !this.state.is_mobile
    const switched_to_not_mobile = window.innerWidth >= mobile_break_point && this.state.is_mobile
    if (switched_to_mobile) {
      this.setState({ is_mobile: true })
    } else if (switched_to_not_mobile) {
      this.setState({ is_mobile: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState({ menu_open: !this.state.menu_open })
  }

  render() {
    const {
      menu_open,
      is_mobile,
      is_mounted
    } = this.state
    console.log('is_mobile', is_mobile)

    const is_logged_in = is_mounted ? auth.loggedIn() : false

    return (
      <nav className="nav-bar">
        <div className="nav-bar-content">
          <Link
            href="/"
          >
            <div className="nav-bar-logo">
              <img src="/public/logo.svg" alt="Logo" />
            </div>
          </Link>
          {
            is_mobile &&
              <MenuMobile
                links={ is_logged_in ? links_loggedin : links }
                open={ menu_open }
                onClick={ this.toggleMobileMenu }
              />
          }
          {
            is_mobile &&
              <MenuMobileButton
                open={ menu_open }
                onClick={ this.toggleMobileMenu }
              />
          }
          {
            !is_mobile &&
              <div className={ 'nav-bar-links' + (menu_open ? ' open' : ' closed') }>
                {
                  (is_logged_in ? links_loggedin : links).map((link) =>
                    <Link
                      // className="nav-bar-link nav-bar-link-desktop"
                      href={ link.path }
                      key={ link.path }
                    >
                      <a>{ link.title }</a>
                    </Link>
                  )
                }
              </div>
          }
        </div>
      </nav>
    )
  }
}
