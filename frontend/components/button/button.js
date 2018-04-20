import React from 'react'
import Link from 'next/link'
import './button.sass'

export const Button = ({
  center,
  right,
  onClick,
  title,
  marginTop,
  marginBottom,
  type
}) => (
  <div className={
      (center ? ' button-center' : '') +
      (right ? ' button-right' : '') +
      (marginTop ? ' button-margin-top' : '') +
      (marginBottom ? ' button-margin-bottom' : '')
    }
  >
    <button
      className={ 'button' + (center ? ' button-center' : '') }
      onClick={ onClick }
      type={ type ? type : '' }
    >
      { title }
    </button>
  </div>
)

export const LinkButton = ({
  center,
  right,
  title,
  to,
  marginTop,
  marginBottom,
  important
}) => (
  <div className={
      (center ? ' button-center' : '') +
      (right ? ' button-right' : '') +
      (marginTop ? ' button-margin-top' : '') +
      (marginBottom ? ' button-margin-bottom' : '')
    }
  >
    <Link href={ to }>
      <button className={ 'button' + (important ? ' button-important' : '') }>{ title }</button>
    </Link>
  </div>
)
