import React from 'react'
import Styles from '../components/Label.module.scss'

const Label = props => {
  return (
    <div className={Styles.LabelContainer}>
      <label className={Styles.LabelContent} htmlFor={props.htmlFor}>
        {props.children}
      </label>
    </div>
  )
}

export default Label
