import React from 'react'
import Icon16 from '../components/Icon16'
import Styles from './Disclosure.module.scss'

const Disclosure = props => {
  if (!props.icon || props.icon === 'none') {
    return (
      <div className={Styles.DisclosureContainer}>
        <p className={Styles.DisclosureP}>{props.children}</p>
      </div>
    )
  } else {
    return (
      <div className={Styles.DisclosureContainer}>
        <Icon16 icon={props.icon} />
        <p className={Styles.DisclosureP}>{props.children}</p>
      </div>
    )
  }
}

export default Disclosure
