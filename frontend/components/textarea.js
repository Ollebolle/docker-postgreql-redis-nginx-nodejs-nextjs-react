import React from 'react'

export default (props) => (
  <div className="field">
    { props.label && <label className="label">{ props.label }</label> }
    <div className="control is-expanded">
      <textarea
        className="textarea"
        { ...props }
      />
    </div>
  </div>
)
