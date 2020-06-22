import React from 'react'
import Styles from './LargeSectionTitle.module.scss'

const LargeSectionTitle = props => {
  return (
    <div className={Styles.LargeSectionTitleContainer}>
      <p className={Styles.LargeSectionTitleText}>{props.children}</p>
    </div>
  )
}

export default LargeSectionTitle
