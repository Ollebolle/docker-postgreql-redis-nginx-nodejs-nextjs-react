import React from 'react'

import './input.sass'

export default (props) => (
  <div className="field">
    { props.label && <label className="label">{ props.label }</label> }
    <p className="control is-expanded">
      <input
        className="input"
        { ...props }
      />
    </p>
  </div>
)
