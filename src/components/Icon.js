import React from 'react'

const Icon = props => (
  <svg
    className="Icon"
    // className={props.cursor}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d={props.icon} fill="black" fill-opacity="0.8" />
  </svg>
)

export default Icon
