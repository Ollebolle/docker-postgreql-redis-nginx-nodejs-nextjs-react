import React from 'react'

export default class AuthService {
  constructor(domain) {
    this.domain = domain || '/api'
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  login(email, password) {
    // Get a token
    console.log('Logging in', email)
    const body = JSON.stringify({
      email,
      password
    })
    return this.fetch('/user/login', {
      method: 'POST',
      body
    })
      .then(response => {
        console.log(response)
        this.setToken(response.token)
        this.setProfile(response.user)
        return
      })
  }

  signUp(email, password) {
    // Get a token
    console.log('Signing up new user', email)
    const body = JSON.stringify({
      email,
      password
    })
    return this.fetch('/user/register', {
      method: 'POST',
      body
    })
      .then(response => {
        console.log(response)
        this.setToken(response.token)
        this.setProfile(response.user)
        return
      })
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    // return !!token && !isTokenExpired(token) // handwaiving here
    return !!token // handwaiving here
  }

  setProfile(profile){
    console.log('setting profile', profile)
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  getProfile(){
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  updateProfile() {
    return this.fetch('/user')
      .then(response => {
        this.setProfile(response)
        return response
      })
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // localStorage.removeItem('profile');
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  fetch(url, options){
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()){
      headers['Authorization'] = 'JWT ' + this.getToken()
    }

    return fetch(`${ this.domain }${ url }`, {
      headers,
      ...options
    })
    .then(this._checkStatus)
    .then(response => response.json())
  }
}