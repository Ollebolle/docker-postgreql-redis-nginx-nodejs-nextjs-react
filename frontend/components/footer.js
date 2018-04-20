import React, { Component } from 'react'
import Section from '../layout/section'

import './footer.sass'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer section section-sm">
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-12">
                <div className="copyright">
                  <p>Copyright © 2018. All Rights Reserved</p>
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <ul className="social-media-icons text-right">
                    <li><a className="fa fa-facebook" href=""></a></li>
                    <li><a className="fa fa-twitter" href=""></a></li>
                    <li><a className="fa fa-pinterest-p" href=""></a></li>
                    <li><a className="fa fa-vimeo" href=""></a></li>
                  </ul>
              </div>
            </div>
          </div>
        </Section>
      </footer>
    )
  }
}
