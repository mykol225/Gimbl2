import React from 'react'

const Button = props => {
  return (
    <div className="Button-container">
      <button
        className={
          !props.primary
            ? !props.destructive
              ? 'Button standard'
              : 'Button standard destructive'
            : !props.destructive
            ? 'Button primary'
            : 'Button primary destructive '
        }
      >
        {props.title}
      </button>
    </div>
  )
}

export default Button
