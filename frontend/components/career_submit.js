import React, { Component } from 'react'
import { Columns, Column } from '../layouts/columns'
import Input from './input'
import TextArea from './textarea'
import { Button } from './button/button'
import {
  SubTitle
} from '../text/text'


import './career_submit.sass'

export default ({
  name,
  email,
  message
}) => (
  <Columns>
    <Column>
      <form
        name="career"
        method="POST"
        action="thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="career" />
        <SubTitle marginBottom>Spontaneous contact</SubTitle>
        <Input
          label="Your name"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <Input
          label="Your email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <TextArea
          label="Message"
          name="message"
          placeholder="Enter your message"
        />
        <div data-netlify-recaptcha></div>
        <Button
          title="Submit"
          type="submit"
          marginTop
        />
      </form>
    </Column>
  </Columns>
)
