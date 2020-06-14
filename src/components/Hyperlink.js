import React from 'react'

const Hyperlink = props => {
  return (
    <div className="link-container">
      <a href={props.link} className="Link-input" target={props.target}>
        {props.title}
      </a>
    </div>
  )
}

export default Hyperlink
