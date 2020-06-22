import React from 'react'
import Styles from '../components/SectionTItle.module.scss'

const SectionTitle = props => {
  return (
    <div className={Styles.SectionTitleContainer}>
      <p className={Styles.SectionTitleText}>{props.children}</p>
    </div>
  )
}

export default SectionTitle
