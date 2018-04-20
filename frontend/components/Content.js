import React from 'react'

export default ({ content, className }) => (
  <div className={className}>{content}</div>
)
export const HTMLContent = ({ content, className }) => (
  <div className={ 'text-content' + (className ? ' ' + className : '') } dangerouslySetInnerHTML={{ __html: content }} />
)
