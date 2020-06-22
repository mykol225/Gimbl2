import React from 'react'
import ValueSimple from './ValueSimple'
import Icon32 from './Icon32'
import Styles from './SimpleWIcon.module.scss'
import ValueStyles from './ValueSimple.module.scss'

const SimpleWIcon = props => {
  console.log(Styles)
  console.log(ValueStyles.ValueSimple)
  console.log(Styles.Valuetest + ' ' + ValueStyles.ValueSimple)

  if (!props.icon) {
    return (
      <div className={Styles.SimpleWIcon}>
        <ValueSimple value={props.value} placeholder={props.placeholder} />
      </div>
    )
  } else {
    return (
      <div className={Styles.SimpleWIcon} title="SimpleWIcon">
        <Icon32 icon={props.icon} cursor={props.cursor} />
        <ValueSimple
          className={Styles.Valuetest + ' ' + ValueStyles.ValueSimple} //not working. seems to log the correct name, but className is being overwritten in the child compoent.
          value={props.value}
          placeholder={props.placeholder}
        />
      </div>
    )
  }
}

export default SimpleWIcon
