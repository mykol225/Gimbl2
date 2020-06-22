import React from 'react'
import Icon16 from './Icon16'
import Styles from './DisclosureSection.module.scss'

const DisclosureSection = props => {
  if (!props.icon || props.icon === 'none') {
    return (
      <div className={Styles.DisclosureContainer}>
        <p className={Styles.DisclosureSectionP}>{props.children}</p>
      </div>
    )
  } else {
    return (
      <div className={Styles.DisclosureContainer}>
        <Icon16 icon={props.icon} />
        <p className={Styles.DisclosureSectionP}>{props.children}</p>
      </div>
    )
  }
}

export default DisclosureSection
