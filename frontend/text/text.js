import React from 'react'

export const Title = ({
  bright,
  children,
  center,
  marginTop,
  marginBottom
}) => (
  <h1
    className={
      'section-title' +
      (center ? ' text-center' : '') +
      (marginTop ? ' text-margin-top' : '') +
      (marginBottom ? ' text-margin-bottom' : '') +
      (bright ? ' text-bright' : '')
    }
  >
    { children }
  </h1>
)

export const SubTitle = ({
  bright,
  children,
  center,
  marginTop,
  marginBottom
}) => (
  <h2
    className={
      'sub-title' +
      (center ? ' text-center' : '') +
      (marginTop ? ' text-margin-top' : '') +
      (marginBottom ? ' text-margin-bottom' : '') +
      (bright ? ' text-bright' : '')
    }
  >
    { children }
  </h2>
)

export const CardTitle = ({
  children,
  center,
  marginTop,
  marginBottom
}) => (
  <h2
    className={
      'card-title' +
      (center ? ' text-center' : '') +
      (marginTop ? ' text-margin-top' : '') +
      (marginBottom ? ' text-margin-bottom' : '')
    }
  >
    { children }
  </h2>
)

export const Paragraph = ({
  children,
  center,
  marginTop,
  marginBottom
}) => (
  <p
    className={
      'paragraph' +
      (center ? ' text-center' : '') +
      (marginTop ? ' text-margin-top' : '') +
      (marginBottom ? ' text-margin-bottom' : '')
    }
  >
    { children }
  </p>
)

export const Italic = ({
  children,
  center,
  marginTop,
  marginBottom
}) => (
  <p
    className={
      'italic' +
      (center ? ' text-center' : '') +
      (marginTop ? ' text-margin-top' : '') +
      (marginBottom ? ' text-margin-bottom' : '')
    }
  >
    { children }
  </p>
)

export const Small = ({
  children,
  center,
  marginTop,
  marginBottom
}) => (
  <p
    className={
      'small' +
      (center ? ' text-center' : '') +
      (marginTop ? ' text-margin-top' : '') +
      (marginBottom ? ' text-margin-bottom' : '')
    }
  >
    { children }
  </p>
)

