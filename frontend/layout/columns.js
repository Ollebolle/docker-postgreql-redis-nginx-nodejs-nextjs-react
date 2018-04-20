import React, { Component } from 'react'

import './columns.sass'

export class Columns extends Component {
  render() {
    const {
      children,
      className,
      multiLine
    } = this.props
    return (
      <div className={
        'columns' +
        (multiLine ? ' is-multiline' : '') +
        (className ? ' ' + className : '')
      }>
        { children }
      </div>
    )
  }
}

export class Column extends Component {
  render() {
    const {
      children,
      className,
      width
    } = this.props
    return (
      <div className={
        'column' +
        (width ? ' ' + width : '') +
        (className ? ' ' + className : '')
      }>
        { children }
      </div>
    )
  }
}

export const Separator = () => (
  <div className="column-separator">
  </div>
)
