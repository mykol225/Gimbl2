import React from 'react'

const Hyperlink = props => {
  return (
    <div className="Link-container">
      <a href={props.link} className="Link-input" target={props.target}>
        {props.children}
      </a>
    </div>
  )
}

export default Hyperlink
