import React, { Component } from 'react'
import Section from '../layouts/section'
import { Columns, Column } from '../layouts/columns'
import Map from './Map'
import Input from './input'
import TextArea from './textarea'
import { Button } from './button/button'
import {
  SubTitle
} from '../text/text'

import './contact.sass'

export default ({ offices }) => (
  <Section title="Contact us">
    <Columns className="contact">
      <Column className="contact-map">
        <Map locations={ offices } />
      </Column>
      <Column>
        <form
          name="contact"
          method="POST"
          action="thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <SubTitle marginBottom marginTop>Send us an email</SubTitle>
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
  </Section>
)
