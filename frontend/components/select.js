import React, { Component } from 'react'

import './select.sass'

export default ({
  name,
  onChange,
  options,
  value
}) => (
  <div className="control is-expanded">
    <div className="select is-fullwidth">
      <select
        name={ name }
        onChange={ onChange }
        value={ value }
      >
        <option value="">-</option>
        {
          options.map((option) => (
            <option value={ option } key={ option }>
              { option }
            </option>
          ))
        }
      </select>
    </div>
  </div>
)
