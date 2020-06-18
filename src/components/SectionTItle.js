import React from 'react'

const SectionTitle = props => {
  return (
    <div className="SectionTitle-container">
      <p className="SectionTitle-text">{props.children}</p>
    </div>
  )
}

export default SectionTitle
